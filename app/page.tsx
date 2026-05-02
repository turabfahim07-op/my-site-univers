"use client"

import React from 'react'
import { Rocket, Globe, Star, Atom, ExternalLink, Orbit, BarChart3, Mail } from "lucide-react"
import { motion } from "framer-motion"

// Sfondo con stelle animate
const StarsBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#020617]">
    {[...Array(120)].map((_, i) => (
      <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.7,
          animationDuration: `${Math.random() * 4 + 2}s`,
        }}
      />
    ))}
  </div>
)

const planets = [
  {
    name: 'Saturn',
    desc: 'The Ringed Giant',
    img: 'https://images-assets.nasa.gov/image/PIA01384/PIA01384~thumb.jpg',
    stats: { diameter: '116,460 km', distance: '1.4 billion km', temp: '-178°C' },
    color: 'border-yellow-500/40'
  },
  {
    name: 'Earth',
    desc: 'Our Home Planet',
    img: 'https://images-assets.nasa.gov/image/AS17-148-22727/AS17-148-22727~thumb.jpg',
    stats: { diameter: '12,742 km', distance: '150 million km', temp: '15°C' },
    color: 'border-blue-500/40'
  },
  {
    name: 'Jupiter',
    desc: 'Largest Planet',
    img: 'https://images-assets.nasa.gov/image/PIA04866/PIA04866~thumb.jpg',
    stats: { diameter: '139,820 km', distance: '778 million km', temp: '-108°C' },
    color: 'border-orange-500/40'
  }
]

export default function CompleteUniversePage() {
  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-orange-500/30">
      <StarsBackground />
      
      {/* Navigazione */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3 text-2xl font-black text-white tracking-tighter">
          <Rocket className="text-orange-500" /> TURAB TECH
        </div>
        <button className="px-6 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold transition-all shadow-lg shadow-orange-900/20">
          English Portal
        </button>
      </nav>

      {/* Hero: Razzi NASA */}
      <section className="relative z-10 pt-20 pb-32 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
            NASA <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">MISSION</span> HUB
          </h1>
          <p className="text-xl text-slate-400 max-w-lg mb-10">
            Esplora il sistema solare e le ultime scoperte dell'universo con la tecnologia di Turab Tech.
          </p>
        </div>
        <div className="flex-1 relative group">
          <img 
            src="https://images-assets.nasa.gov/image/NHQ202410140003/NHQ202410140003~medium.jpg" 
            alt="NASA Rocket" 
            className="rounded-3xl border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute -bottom-6 -left-6 bg-[#0f172a] p-6 rounded-2xl border border-white/10 shadow-2xl">
             <div className="text-orange-500 font-bold">LIVE DATA FEED</div>
             <div className="text-sm text-slate-400 font-mono italic">NASA_ENGINE_READY</div>
          </div>
        </div>
      </section>

      {/* Sezione Pianeti Completa */}
      <section className="relative z-10 py-24 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-16 text-center italic">Planetary Systems Hub</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {planets.map((p) => (
              <div key={p.name} className={`p-8 rounded-[2rem] bg-[#020617] border-2 ${p.color} hover:bg-slate-900/50 transition-all group`}>
                <img src={p.img} alt={p.name} className="w-40 h-40 mx-auto rounded-full object-cover shadow-2xl mb-8 group-hover:rotate-12 transition-transform" />
                <h3 className="text-3xl font-bold text-white mb-1">{p.name}</h3>
                <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-6">{p.desc}</p>
                <div className="space-y-3 text-sm border-t border-white/5 pt-6">
                  <div className="flex justify-between"><span>Diametro:</span> <span className="text-white font-bold">{p.stats.diameter}</span></div>
                  <div className="flex justify-between"><span>Distanza Sole:</span> <span className="text-white font-bold">{p.stats.distance}</span></div>
                  <div className="flex justify-between"><span>Temp. Media:</span> <span className="text-white font-bold">{p.stats.temp}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galassie e Scoperte NASA */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-slate-900/80 p-10 rounded-3xl border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Orbit className="text-blue-400" /> Galactic Simulation
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              Utilizziamo i dati dei telescopi Hubble e James Webb per simulare la rotazione delle galassie a spirale scoperte recentemente dalla NASA.
            </p>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 text-xs font-mono">JWST_ACTIVE</div>
              <div className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-lg text-orange-400 text-xs font-mono">HUBBLE_LINK</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images-assets.nasa.gov/image/hubble-observes-a-spiral-galaxy-in-the-constellation-hydra_35706560942_o/hubble-observes-a-spiral-galaxy-in-the-constellation-hydra_35706560942_o~thumb.jpg" className="rounded-xl border border-white/10 h-32 w-full object-cover" />
            <img src="https://images-assets.nasa.gov/image/PIA23645/PIA23645~thumb.jpg" className="rounded-xl border border-white/10 h-32 w-full object-cover" />
            <img src="https://images-assets.nasa.gov/image/PIA22350/PIA22350~thumb.jpg" className="rounded-xl border border-white/10 h-32 w-full object-cover" />
            <img src="https://images-assets.nasa.gov/image/PIA15415/PIA15415~thumb.jpg" className="rounded-xl border border-white/10 h-32 w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-20 border-t border-white/5 text-center bg-[#020617]">
        <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">
          © 2026 Turab Tech - NASA Certified Partner
        </p>
      </footer>
    </div>
  )
}
