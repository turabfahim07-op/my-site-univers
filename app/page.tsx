"use client"

import React from 'react'
import { Rocket, Globe, Star, Atom, ExternalLink, Orbit, BarChart3, Mail, Map, Zap, Database } from "lucide-react"
import { motion } from "framer-motion"

// --- SFONDO STELLARE ---
const StarsBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#020617]">
    {[...Array(150)].map((_, i) => (
      <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.8,
          animationDuration: `${Math.random() * 5 + 2}s`,
        }}
      />
    ))}
  </div>
)

export default function SpaceEncyclopedia() {
  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-orange-500/30">
      <StarsBackground />
      
      {/* HEADER FISSO */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto backdrop-blur-xl border-b border-white/5 sticky top-0 bg-[#020617]/50">
        <div className="flex items-center gap-3 text-2xl font-black text-white tracking-tighter">
          <img src="/astronaut.png" alt="Logo" className="w-10 h-10 object-contain" />
          TURAB <span className="text-orange-500">TECH</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
          <a href="#mission" className="hover:text-orange-500 transition-colors">Mission</a>
          <a href="#planets" className="hover:text-orange-500 transition-colors">Planets</a>
          <a href="#discoveries" className="hover:text-orange-500 transition-colors">Discoveries</a>
        </div>
      </nav>

      {/* --- SEZIONE 1: MISSION & ROCKETRY --- */}
      <section id="mission" className="relative z-10 pt-20 pb-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
            <span className="text-orange-500 font-mono font-bold tracking-[0.3em] uppercase text-sm italic">Aerospace Division</span>
            <h1 className="text-7xl md:text-9xl font-black text-white leading-none mt-4 mb-8">NASA<br/>LAUNCH</h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              Analizziamo i sistemi di propulsione dei razzi SpaceX e NASA. In questa sezione trovi i dati tecnici delle missioni Crew Dragon e i lanci storici.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <Zap className="text-orange-500 mb-4" />
                <h4 className="font-bold text-white uppercase text-xs tracking-widest">Propulsion</h4>
                <p className="text-2xl font-black">9.8M lbs</p>
                <span className="text-slate-500 text-xs">Thrust at liftoff</span>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <Database className="text-blue-500 mb-4" />
                <h4 className="font-bold text-white uppercase text-xs tracking-widest">Payload</h4>
                <p className="text-2xl font-black">22,800 kg</p>
                <span className="text-slate-500 text-xs">To Low Earth Orbit</span>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <img 
              src="https://images-assets.nasa.gov/image/NHQ202410140003/NHQ202410140003~medium.jpg" 
              className="rounded-[3rem] border-2 border-white/10 shadow-[0_0_80px_rgba(249,115,22,0.2)]" 
              alt="NASA Rocket Launch" 
            />
          </div>
        </div>
      </section>

      {/* --- SEZIONE 2: IL SISTEMA SOLARE (Dati Completi) --- */}
      <section id="planets" className="relative z-10 py-32 bg-slate-900/40 border-y border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-white italic tracking-tighter mb-4">Planetary Systems Hub</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>

          <div className="space-y-24">
            {/* Saturno */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img src="https://images-assets.nasa.gov/image/PIA01384/PIA01384~thumb.jpg" className="w-80 h-80 mx-auto rounded-full shadow-[0_0_100px_rgba(234,179,8,0.2)] border-2 border-yellow-500/30" alt="Saturn" />
              <div>
                <h3 className="text-4xl font-black text-yellow-500 mb-4 tracking-widest">SATURN: THE RINGED GIANT</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">Saturno è il sesto pianeta dal Sole e il secondo più grande del sistema solare. È famoso per il suo complesso sistema di anelli fatti di ghiaccio e polvere.</p>
                <div className="grid grid-cols-3 gap-4 border-l-4 border-yellow-500 pl-6 py-4 bg-yellow-500/5">
                  <div><span className="block text-[10px] uppercase text-slate-500">Diameter</span><span className="font-bold">116,460 km</span></div>
                  <div><span className="block text-[10px] uppercase text-slate-500">Distance</span><span className="font-bold">1.4 Billion km</span></div>
                  <div><span className="block text-[10px] uppercase text-slate-500">Temp</span><span className="font-bold">-178°C</span></div>
                </div>
              </div>
            </div>

            {/* Terra */}
            <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
              <div className="order-2 md:order-1 text-right">
                <h3 className="text-4xl font-black text-blue-500 mb-4 tracking-widest">EARTH: OUR HOME</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">L'unico pianeta conosciuto per ospitare la vita. Con il 71% di superficie coperta da acqua, la Terra è il gioiello blu della galassia.</p>
                <div className="grid grid-cols-3 gap-4 border-r-4 border-blue-500 pr-6 py-4 bg-blue-500/5">
                  <div><span className="block text-[10px] uppercase text-slate-500">Diameter</span><span className="font-bold">12,742 km</span></div>
                  <div><span className="block text-[10px] uppercase text-slate-500">Distance</span><span className="font-bold">150 Million km</span></div>
                  <div><span className="block text-[10px] uppercase text-slate-500">Temp</span><span className="font-bold">15°C</span></div>
                </div>
              </div>
              <img src="https://images-assets.nasa.gov/image/AS17-148-22727/AS17-148-22727~thumb.jpg" className="order-1 md:order-2 w-80 h-80 mx-auto rounded-full shadow-[0_0_100px_rgba(59,130,246,0.2)] border-2 border-blue-500/30" alt="Earth" />
            </div>

            {/* Giove */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img src="https://images-assets.nasa.gov/image/PIA04866/PIA04866~thumb.jpg" className="w-80 h-80 mx-auto rounded-full shadow-[0_0_100px_rgba(249,115,22,0.2)] border-2 border-orange-500/30" alt="Jupiter" />
              <div>
                <h3 className="text-4xl font-black text-orange-600 mb-4 tracking-widest">JUPITER: LARGEST PLANET</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">Giove è un gigante gassoso con una massa due volte superiore a quella di tutti gli altri pianeti messi insieme. La sua Grande Macchia Rossa è una tempesta secolare.</p>
                <div className="grid grid-cols-3 gap-4 border-l-4 border-orange-600 pl-6 py-4 bg-orange-600/5">
                  <div><span className="block text-[10px] uppercase text-slate-500">Diameter</span><span className="font-bold">139,820 km</span></div>
                  <div><span className="block text-[10px] uppercase text-slate-500">Distance</span><span className="font-bold">778 Million km</span></div>
                  <div><span className="block text-[10px] uppercase text-slate-500">Temp</span><span className="font-bold">-108°C</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEZIONE 3: SCOPERTE E GALASSIE --- */}
      <section id="discoveries" className="relative z-10 py-32 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-black text-white mb-16 tracking-tighter">Deep Field Discovery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-4">
            <img src="https://images-assets.nasa.gov/image/hubble-observes-a-spiral-galaxy-in-the-constellation-hydra_35706560942_o/hubble-observes-a-spiral-galaxy-in-the-constellation-hydra_35706560942_o~thumb.jpg" className="rounded-2xl border border-white/10 h-60 w-full object-cover" alt="Galaxy" />
            <p className="text-xs font-mono text-slate-500 uppercase">Spiral Galaxy Hydra</p>
          </div>
          <div className="space-y-4 translate-y-8">
            <img src="https://images-assets.nasa.gov/image/PIA23645/PIA23645~thumb.jpg" className="rounded-2xl border border-white/10 h-60 w-full object-cover" alt="Nebula" />
            <p className="text-xs font-mono text-slate-500 uppercase">James Webb Data</p>
          </div>
          <div className="space-y-4">
            <img src="https://images-assets.nasa.gov/image/PIA22350/PIA22350~thumb.jpg" className="rounded-2xl border border-white/10 h-60 w-full object-cover" alt="Space" />
            <p className="text-xs font-mono text-slate-500 uppercase">Exoplanet Analysis</p>
          </div>
          <div className="space-y-4 translate-y-8">
            <img src="https://images-assets.nasa.gov/image/PIA15415/PIA15415~thumb.jpg" className="rounded-2xl border border-white/10 h-60 w-full object-cover" alt="Cluster" />
            <p className="text-xs font-mono text-slate-500 uppercase">Galaxy Cluster</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-20 border-t border-white/5 text-center bg-black/40">
        <div className="flex justify-center gap-10 text-slate-500 mb-8">
           <Rocket className="hover:text-orange-500 transition-colors" />
           <Globe className="hover:text-blue-500 transition-colors" />
           <Map className="hover:text-green-500 transition-colors" />
        </div>
        <p className="text-slate-600 font-mono text-xs uppercase tracking-[0.5em]">
          © 2026 Fahimiullah Turab Tech - Galactic Division
        </p>
      </footer>
    </div>
  )
}
