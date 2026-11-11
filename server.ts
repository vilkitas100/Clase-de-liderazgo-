import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import fs from 'fs';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Gemini Leadership Coach
  app.post('/api/ai-coach', async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        return res.status(400).json({ 
          error: 'GEMINI_API_KEY no configurada en las variables de entorno.' 
        });
      }

      const { prompt, topicTitle, role, leaderName } = req.body;
      const ai = new GoogleGenAI({ apiKey });

      const systemInstruction = `Eres la Profesora Liz Acuña Barboza, catedrática distinguida de la Universidad Hispanoamericana en la asignatura "Liderazgo y Cambio Organizacional".
Estás interactuando con ${leaderName || 'el estudiante'} en el "Tema 8: Taller de Liderazgo Transformacional" (Subtema: ${topicTitle || 'General'}).
Tus explicaciones se basan rigurosamente en:
1. Administración de Empresas (gestión estratégica de stakeholders: clientes, proveedores, acreedores, empleados, accionistas).
2. Psicología Organizacional e Inteligencia Emocional (Daniel Goleman, Paul Ekman, Carl Rogers, Amy Edmondson).
3. Neuroaprendizaje (sistema límbico, corteza prefrontal, neuroplasticidad y neuronas espejo en la empatía).
4. Ciencias de la Comunicación (Paul Watzlawick, Shannon-Weaver, Comunicación No Violenta).

Responde de manera cálida, motivadora, analítica e inspiradora. Resalta el valor inestimable de los estudiantes colaboradores y líderes para el futuro de las organizaciones y el planeta. Sé conciso pero sumamente profundo (2-3 párrafos máximo).`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      return res.json({ response: response.text });
    } catch (err: any) {
      console.error('Error en API Gemini:', err);
      return res.status(500).json({ error: err?.message || 'Error al conectar con la IA' });
    }
  });

  // Mount Vite in development mode
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);

    app.use('*', async (req, res, next) => {
      const url = req.originalUrl;
      try {
        let template = fs.readFileSync(path.resolve('./index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    app.use(express.static('dist'));
    app.use('*', (req, res) => {
      res.sendFile(path.resolve('./dist/index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor de Liderazgo Transformacional ejecutándose en http://localhost:${PORT}`);
  });
}

startServer();
