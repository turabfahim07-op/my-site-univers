
"use client";

import React from 'react';
import { Rocket, HardHat, GraduationCap, Globe, Sun, Info } from 'lucide-react';

export default function FahimTurabSoftwer() {
  const planets = [
    { name: "Mercurio", type: "Pianeta Roccioso", detail: "Il più piccolo e vicino al Sole. Non ha atmosfera e la sua superficie è piena di crateri." },
    { name: "Marte", type: "Pianeta Roccioso", detail: "Conosciuto come il 'Pianeta Rosso' per via dell'ossido di ferro. Ha il vulcano più grande del sistema solare." },
    { name: "Giove", type: "Gigante Gassoso", detail: "Il pianeta più grande. La sua 'Grande Macchia Rossa' è una tempesta che dura da secoli." },
    { name: "Saturno", type: "Gigante Gassoso", detail: "Famoso per il suo incredibile sistema di anelli fatti di ghiaccio e polvere." },
    { name: "Nettuno", type: "Gigante di Ghiaccio", detail: "Il pianeta più lontano e ventoso. È di un blu intenso a causa del metano nell'atmosfera." },
  ];

  const galaxies = [
    { name: "Spirale", desc: "Hanno bracci curvi che partono dal centro, come la nostra Via Lattea." },
    { name: "Ellittica", desc: "Hanno una forma a uovo e contengono stelle molto vecchie." },
    { name: "Lenticolare", desc: "Una via di mezzo tra spirali ed ellittiche, senza bracci definiti." },
    { name: "Irregolare", desc: "Non hanno una forma precisa e sono spesso nate da scontri tra galassie." }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 font-sans">
      {/* HEADER PROFESSIONALE */}
      <header className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-2 tracking-tighter text-orange-500">
          FAHIM TURAB <span className="text-white">SOFTWER</span>
        </h1>
        <p className="text-slate-400 text-xl italic">Engineering the future of space exploration at 13</p>
      </header>

      {/* SEZIONE SOLE (LA NOSTRA STELLA) */}
      <section className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-3xl p-8 shadow-2xl flex items-center gap-6">
        <Sun className="w-20 h-20 text-white animate-pulse" />
        <div>
          <h2 className="text-4xl font-bold">IL SOLE</h2>
          <p className="text-white/90 text-lg">Il cuore del nostro sistema. Una stella nana gialla che fornisce l'energia necessaria per la vita sulla Terra.</p>
        </div>
      </section>

      {/* DATABASE PIANETI */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Globe className="text-blue-400" /> Planetary Data Center
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {planets.map((p) => (
            <div key={p.name} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-orange-500 transition-all group">
              <h3 className="text-orange-500 font-bold text-2xl mb-1">{p.name}</h3>
              <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded uppercase font-bold">{p.type}</span>
              <p className="mt-4 text-slate-300 leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DATABASE GALASSIE */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Rocket className="text-purple-400" /> Galactic Structures
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galaxies.map((g) => (
            <div key={g.name} className="flex gap-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <div className="bg-purple-500/20 p-3 rounded-xl h-fit">
                <Info className="text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">{g.name}</h3>
                <p className="text-slate-400">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-slate-600 border-t border-slate-900 pt-8">
        © 2024 Fahim Turab Softwer • Middle School Engineering Project
      </footer>
    </div>
  );
}
