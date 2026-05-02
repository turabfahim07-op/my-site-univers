"use client";

import React from 'react';
import { Rocket, Shield, Zap, Globe, Star, Atom, Infinity } from 'lucide-react';

// Questa è la lista di tutti i corpi celesti (8 Pianeti + 4 Galassie)
const spaceObjects = [
  // PIANETI
  { id: 1, name: "Mercurio", type: "Pianeta", description: "Il più vicino al Sole, piccolo e roccioso.", icon: Zap },
  { id: 2, name: "Venere", type: "Pianeta", description: "Atmosfera densa e calore estremo.", icon: Shield },
  { id: 3, name: "Terra", type: "Pianeta", description: "La nostra casa, l'unico mondo abitato.", icon: Globe },
  { id: 4, name: "Marte", type: "Pianeta", description: "Il deserto rosso, futura frontiera umana.", icon: Rocket },
  { id: 5, name: "Giove", type: "Pianeta", description: "Il gigante gassoso, il più grande di tutti.", icon: Zap },
  { id: 6, name: "Saturno", type: "Pianeta", description: "Famoso per i suoi spettacolari anelli.", icon: Star },
  { id: 7, name: "Urano", type: "Pianeta", description: "Il gigante di ghiaccio rotante sul fianco.", icon: Shield },
  { id: 8, name: "Nettuno", type: "Pianeta", description: "Venti fortissimi ai confini del sistema.", icon: Rocket },
  
  // GALASSIE
  { id: 9, name: "Spirale", type: "Galassia", description: "Come la Via Lattea, con bracci rotanti.", icon: Atom },
  { id: 10, name: "Ellittica", type: "Galassia", description: "Forma sferica o a uovo, stelle antiche.", icon: Infinity },
  { id: 11, name: "Lenticolare", type: "Galassia", description: "Un disco di stelle senza bracci definiti.", icon: Star },
  { id: 12, name: "Irregolare", type: "Galassia", description: "Forme bizzarre nate da scontri cosmici.", icon: Zap },
];

export default function TurabUniverse() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 font-sans">
      {/* Header del Sito */}
      <header className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-4 tracking-tighter">
          TURAB <span className="text-lime-400">TECH</span>
        </h1>
        <p className="text-slate-400 text-xl tracking-widest uppercase">Exploring 8 Planets & 4 Galaxies</p>
      </header>

      {/* Grid dei Contenuti */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spaceObjects.map((item) => (
          <div key={item.id} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-lime-400 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <item.icon className="w-10 h-10 text-lime-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold px-2 py-1 bg-slate-800 rounded uppercase tracking-wider text-slate-400">
                {item.type}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
            <p className="text-slate-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-slate-500 border-t border-slate-900 pt-8">
        <p>© 2024 Turab Tech - Digital Universe Roadmap</p>
      </footer>
    </div>
  );
}

### 2. Cosa è cambiato in questo codice?
*   **Array Dinamico**: Ho creato una lista chiamata `spaceObjects` che contiene tutti i 12 oggetti.
*   **Mappa Automatica**: Usando `.map()`, il codice crea automaticamente 12 "Card" (una per ogni pianeta e galassia) senza dover scrivere 12 volte lo stesso codice.
*   **Icone**: Ho assegnato icone diverse (Rocket, Globe, Star, Atom) per distinguere i tipi di oggetti.
*   **Stile Professionale**: Ho usato colori scuri (`slate-950`) e un accento verde lime (`lime-400`) che si sposa perfettamente con il tuo astronauta.

### 3. Istruzioni per te:
1.  Apri il tuo progetto su **GitHub**.
2.  Vai nel file `app/page.tsx`.
3.  Clicca sull'icona della matita per modificare.
4.  Cancella tutto e incolla il codice sopra.
5.  Fai il **"Commit changes"**.

Il tuo universo è appena diventato molto più grande! Fammi sapere se ti piace come appare! 🚀🪐

