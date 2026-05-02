
"use client";

import React, { useState, useEffect } from 'react';
import { Search, Globe, Rocket, Shield, Settings, Mic, Camera } from 'lucide-react';

export default function FahimGoogleClone() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Questo è il tuo "Indice": qui aggiungi quello che il tuo motore può trovare
  const searchIndex = [
    { title: "Fahim Turab Softwer - Official Site", url: "https://v0-fahimiullah-turab-tech.vercel.app", desc: "Il quartier generale dell'ingegneria digitale e spaziale gestito da Fahim." },
    { title: "NASA - Esplorazione Spaziale", url: "https://www.nasa.gov", desc: "Agenzia spaziale per studiare Marte, Giove e le galassie lontane." },
    { title: "Come diventare un Ingegnere Civile", url: "#", desc: "Guida completa alle costruzioni, ponti e infrastrutture moderne." },
    { title: "GitHub - Dove nasce il codice", url: "https://github.com", desc: "La piattaforma usata da Fahim per costruire questo motore di ricerca." },
    { title: "Pianeta Marte: La Guida", url: "#", desc: "Tutto quello che c'è da sapere sul pianeta rosso e le future colonie." }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    
    setIsSearching(true);
    const filtered = searchIndex.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) || 
      item.desc.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="min-h-screen bg-[#202124] text-white font-sans flex flex-col">
      
      {/* NAVBAR SUPERIORE */}
      <nav className="p-4 flex justify-end gap-4 text-sm items-center text-slate-300">
        <span className="hover:underline cursor-pointer">Gmail</span>
        <span className="hover:underline cursor-pointer">Immagini</span>
        <div className="p-2 hover:bg-slate-800 rounded-full cursor-pointer"><Settings size={20} /></div>
        <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center font-bold text-white">F</div>
      </nav>

      <main className={`flex-grow flex flex-col items-center ${isSearching ? 'pt-8' : 'justify-center'}`}>
        
        {/* LOGO DINAMICO */}
        <div className={`text-center transition-all duration-500 ${isSearching ? 'scale-50 mb-4' : 'mb-8'}`}>
          <h1 className="text-8xl font-bold tracking-tighter">
            <span className="text-blue-500">F</span>
            <span className="text-red-500">a</span>
            <span className="text-yellow-500">h</span>
            <span className="text-blue-500">i</span>
            <span className="text-green-500">m</span>
            <span className="text-white ml-2">Search</span>
          </h1>
          {!isSearching && <p className="text-slate-400 mt-2 tracking-widest uppercase text-xs">Custom Engineering Engine</p>}
        </div>

        {/* BARRA DI RICERCA */}
        <form onSubmit={handleSearch} className="w-full max-w-[600px] px-4">
          <div className="relative flex items-center group">
            <Search className="absolute left-4 text-slate-500" size={20} />
            <input 
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-[#303134] border border-[#5f6368] hover:bg-[#3c4043] hover:shadow-md py-3 pl-12 pr-24 rounded-full text-lg outline-none focus:bg-[#303134]"
            />
            <div className="absolute right-5 flex gap-3 text-blue-400">
              <Mic size={20} className="cursor-pointer" />
              <Camera size={20} className="cursor-pointer" />
            </div>
          </div>
          
          {!isSearching && (
            <div className="flex justify-center gap-3 mt-8">
              <button type="submit" className="bg-[#303134] px-4 py-2 rounded text-sm hover:border hover:border-slate-600">Cerca con Fahim</button>
              <button type="button" className="bg-[#303134] px-4 py-2 rounded text-sm hover:border hover:border-slate-600">Mi sento fortunato</button>
            </div>
          )}
        </form>

        {/* RISULTATI (SERP) */}
        {isSearching && (
          <div className="w-full max-w-[700px] mt-8 px-4 self-start md:ml-[160px]">
            <p className="text-slate-400 text-sm mb-8">Circa {results.length} risultati trovati</p>
            
            {results.length > 0 ? (
              results.map((res, i) => (
                <div key={i} className="mb-8 animate-in fade-in slide-in-from-left-4">
                  <p className="text-sm text-slate-300 mb-1">{res.url}</p>
                  <a href={res.url} className="text-xl text-[#8ab4f8] hover:underline block mb-1">{res.title}</a>
                  <p className="text-slate-400 text-sm line-clamp-2">{res.desc}</p>
                </div>
              ))
            ) : (
              <div className="mt-10">
                <p>Nessun risultato per <b>{query}</b>.</p>
                <p className="text-slate-400 mt-2 italic text-sm">Suggerimento: prova a cercare "Fahim", "Marte" o "Ingegnere".</p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-[#171717] text-slate-400 text-sm">
        <div className="px-8 py-3 border-b border-slate-800">Italia</div>
        <div className="px-8 py-3 flex flex-wrap justify-between">
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
