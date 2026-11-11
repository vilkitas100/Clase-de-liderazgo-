import React, { useState } from 'react';
import { SUBTOPICS_DATA } from '../data/leadershipData';
import { SubTopicId, Flashcard } from '../types/leadership';
import { Sparkles, RotateCw, CheckCircle2, Search, Filter } from 'lucide-react';

export const FlashcardsGym: React.FC = () => {
  const [selectedSubtopic, setSelectedSubtopic] = useState<SubTopicId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [masteredCards, setMasteredCards] = useState<Record<string, boolean>>({});

  // Flatten all cards with subtopic metadata
  const allCardsWithTopic: (Flashcard & { subtopicCode: string; subtopicTitle: string })[] = [];
  SUBTOPICS_DATA.forEach((st) => {
    st.flashcards.forEach((fc) => {
      allCardsWithTopic.push({
        ...fc,
        subtopicCode: st.code,
        subtopicTitle: st.title,
      });
    });
  });

  // Filter cards
  const filteredCards = allCardsWithTopic.filter((card) => {
    const matchesTopic = selectedSubtopic === 'all' || card.id.includes(`-${selectedSubtopic}`);
    const matchesSearch =
      card.frontTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.frontConcept.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.backExplanation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  const handleFlip = (cardId: string) => {
    setFlippedCards((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const toggleMastered = (cardId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMasteredCards((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const masteredCount = Object.values(masteredCards).filter(Boolean).length;

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 text-stone-100 border border-amber-900/40 shadow-xl space-y-4">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-amber-400" />
              GIMNASIO DE MEMORIZACIÓN NEUROCOGNITIVA
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-amber-100">
              Tarjetas de Memoria (Flashcards)
            </h1>
          </div>

          <div className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800 text-center min-w-[140px]">
            <span className="text-xs text-stone-400 block">Dominadas</span>
            <span className="text-xl font-bold font-mono text-emerald-400">
              {masteredCount} / {allCardsWithTopic.length}
            </span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-2">
          
          {/* Search box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por autor, concepto o teoría..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
            />
          </div>

          {/* Subtopic Filter buttons */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedSubtopic('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                selectedSubtopic === 'all' ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              Todos ({allCardsWithTopic.length})
            </button>
            {SUBTOPICS_DATA.map((st) => (
              <button
                key={st.id}
                onClick={() => setSelectedSubtopic(st.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap uppercase ${
                  selectedSubtopic === st.id ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                Tema {st.code}
              </button>
            ))}
          </div>

        </div>

      </div>

      {/* Grid of Flashcards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => {
          const isFlipped = flippedCards[card.id] || false;
          const isMastered = masteredCards[card.id] || false;

          return (
            <div
              key={card.id}
              onClick={() => handleFlip(card.id)}
              className="h-72 cursor-pointer perspective-1000 group"
            >
              <div className={`relative w-full h-full duration-500 transition-all transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                
                {/* Front */}
                <div className={`absolute inset-0 w-full h-full p-5 rounded-2xl bg-white dark:bg-stone-900 border-2 transition-colors shadow-md flex flex-col justify-between backface-hidden ${
                  isMastered ? 'border-emerald-500/60' : 'border-stone-200 dark:border-stone-800 group-hover:border-amber-500/40'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                      Subtema {card.subtopicCode.toUpperCase()}
                    </span>
                    
                    <button
                      onClick={(e) => toggleMastered(card.id, e)}
                      className={`p-1 rounded-full transition-colors ${
                        isMastered ? 'text-emerald-500 bg-emerald-500/10' : 'text-stone-300 hover:text-emerald-500'
                      }`}
                      title={isMastered ? 'Tarjeta dominada' : 'Marcar como dominada'}
                    >
                      <CheckCircle2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-2 text-center my-auto px-2">
                    <span className="text-[11px] text-stone-400 font-semibold block">{card.disciplineBadge}</span>
                    <h3 className="text-base font-bold font-serif text-stone-900 dark:text-stone-100">
                      {card.frontTitle}
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-300 font-medium leading-relaxed">
                      {card.frontConcept}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-stone-400 border-t border-stone-100 dark:border-stone-800 pt-2">
                    <span>{card.keyAuthor ? `Autor: ${card.keyAuthor}` : 'Teoría Clave'}</span>
                    <span className="flex items-center gap-1 text-amber-600 font-medium">
                      Girar <RotateCw className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 w-full h-full p-5 rounded-2xl bg-stone-900 text-stone-100 border-2 border-amber-500 shadow-xl flex flex-col justify-between rotate-y-180 backface-hidden">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-xs">
                    <span className="font-bold text-amber-300">Fundamento Explicativo</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-stone-800 text-stone-300 font-semibold uppercase">{card.disciplineBadge}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-200 leading-relaxed my-auto overflow-y-auto max-h-40 scrollbar-thin">
                    {card.backExplanation}
                  </p>

                  <div className="text-center text-[10px] text-amber-400/80 font-medium pt-2 border-t border-stone-800">
                    Haz clic para voltear al frente
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
