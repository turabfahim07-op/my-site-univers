  "use client";

import React, { useState } from 'react';
import { Search, Globe, Rocket, Construction, ArrowRight, Mic, Camera } from 'lucide-react';

export default function StandaloneSearch() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Il tuo database personalizzato
  const database = [
    { title: "Fahim Turab Softwer - Progetti", cat: "Engineering", desc: "Sito ufficiale per le costruzioni digitali." },
    { title: "Esplorazione di Marte", cat: "Space", desc: "Dati tecnici sul pianeta rosso e i crateri." },
    { title: "Come costruire un ponte", cat: "Construction", desc: "Guida per giovani ingegneri civili." },
    { title: "Next.js per Principianti", cat: "Software", desc: "Impara a programmare come Fahim." }
  ];

  const filteredResults = database.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#202124] text-white flex flex-col font-sans">
      
      {/* Header con pulsanti finti per realismo */}
      <div className="flex justify-end p-4 gap-4 text-sm text-gray-300">
        <span className="hover:underline cursor-pointer">Gmail</span>
        <span className="hover:underline cursor-pointer">Immagini</span>
        <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center font-bold">F</div>
      </div>

      <main className={`flex flex-col items-center flex-grow ${isSearching ? 'pt-10' : 'justify-center'}`}>
        
        {/* Logo Fahim Search */}
        <div className={`mb-8 text-center transition-all ${isSearching ? 'scale-50 mb-2' : ''}`}>
          <h1 className="text-7xl font-bold">
            <span className="text-blue-500">F</span>
            <span className="text-red-500">a</span>
            <span className="text-yellow-500">h</span>
            <span className="text-blue-500">i</span>
            <span className="text-green-500">m</span>
            <span className="text-white ml-2">Search</span>
          </h1>
        </div>

        {/* Barra di Ricerca Professionale */}
        <div className="w-full max-w-[600px] px-4">
          <div className="relative group">
            <Search className="absolute left-4 top-3.5 text-gray-500 w-5 h-5" />
            <input 
              type="text" 
              className="w-full bg-[#303134] border border-[#5f6368] hover:bg-[#3c4043] focus:bg-[#303134] py-3 pl-12 pr-14 rounded-full text-lg outline-none shadow-xl transition-all"
              placeholder="Cerca su Fahim Search o scrivi un URL"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsSearching(e.target.value.length > 0);
              }}
            />
            <div className="absolute right-5 top-3 flex gap-3 text-blue-400">
              <Mic size={20} className="cursor-pointer" />
              <Camera size={20} className="cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Visualizzazione Risultati */}
        {isSearching && (
          <div className="w-full max-w-[700px] mt-10 px-6 self-start md:ml-[10%] lg:ml-[20%]">
            <p className="text-gray-400 text-sm mb-6">Circa {filteredResults.length} risultati trovati</p>
            {filteredResults.map((item, index) => (
              <div key={index} className="mb-8 group">
                <span className="text-gray-400 text-xs">https://fahim-softwer.com › {item.cat.toLowerCase()}</span>
                <h3 className="text-xl text-[#8ab4f8] group-hover:underline cursor-pointer font-medium mt-1">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer identico a Google */}
      <footer className="bg-[#171717] text-gray-400 text-sm">
        <div className="px-8 py-3 border-b border-[#3c4043]">Italia</div>
        <div className="px-8 py-3 flex justify-between flex-wrap gap-4">
          <div className="flex gap-6">
            <span>Informazioni</span>
            <span>Pubblicità</span>
            <span>Soluzioni aziendali</span>
          </div>
          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Termini</span>
            <span>Impostazioni</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
