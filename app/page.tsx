"use client"

import React, { useState } from 'react'
import { 
  Rocket, Globe, Star, Atom, ExternalLink, 
  Orbit, BarChart3, Mail, ChevronRight 
} from "lucide-react"
import { motion } from "framer-motion"

// --- Background Components ---
function StarsBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#020617]">
      {[...Array(150)].map((_, i) => (
        <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8,
            animationDuration: `${Math.random() * 5 + 3}s`,
          }}
        />
      ))}
    </div>
  )
}

// --- Data Structure for Planets ---
const planetData = [
  {
    name: 'Saturn',
    subtitle: 'The Ringed Giant',
    image: 'https://science.nasa.gov/wp-content/uploads/2023/05/pia25102-saturn-approach-16x9-1.jpg?w=1280',
    color: 'border-yellow-500/50',
    accent: 'text-yellow-400',
    info: { diameter: '116,460 km', distance: '1.4 billion km from Sun', temp: '-178°C' }
  },
  {
    name: 'Earth',
    subtitle: 'Our Home Planet',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1280px-The_Earth_seen_from_Apollo_17.jpg',
    color: 'border-blue-500/50',
    accent: 'text-blue-400',
    info: { diameter: '12,742 km', distance: '150 million km from Sun', temp: '15°C (Avg)' }
  },
  {
    name: 'Jupiter',
    subtitle: 'Largest Planet',
    image: 'https://science.nasa.gov/wp-content/uploads/2023/09/pia22946-jupiter-marble-16x9-1.jpg?w=1280',
    color: 'border-orange-600/50',
    accent: 'text-orange-500',
    info: { diameter: '139,820 km', distance: '778 million km from Sun', temp: '-108°C' }
  }
];

// --- Main Page Component ---
export default function UltimateUniversePage() {
  return (
    <div className="min-h-screen text-slate-200 font-sans overflow-x-hidden">
      <StarsBackground />
      
      {/* PROFESSIONAL NAV */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-slate-800/50 bg-[#020617]/80 backdrop-blur-sm sticky top-0">
        <div className="flex items-center gap-3 text-2xl font-black tracking-tighter text-white">
          <Rocket className="text-orange-500 animate-pulse" /> TURAB TECH
        </div>
        <div className="flex gap-4">
           <button className="px-5 py-2.5 bg-orange-500 text-white rounded-full text-sm font-bold shadow-[0_0_15px_rgba(249,115,22,0.5)] hover:scale-105 transition-transform">English Portal</button>
        </div>
      </nav>

      {/* 1. HERO SECTION WITH NASA ROCKETS */}
      <section className="relative z-10 pt-20 pb-32 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="flex-1 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Orbit size={14}/> Space Exploration Hub
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter">
            Exploring <br/> the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Frontier</span>
          </h1>
          <p className="text-xl text-slate-400 mt-8 max-w-lg leading-relaxed">
            Welcome to Fahimiullah Turab Tech. We provide professional technology solutions inspired by NASA's engineering excellence and the mysteries of the deep universe.
          </p>
        </motion.div>

        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="flex-1 relative">
          <img 
            src="https://images-assets.nasa.gov/image/spacex-crew-6-launch-jsc2023e011651/spacex-crew-6-launch-jsc2023e011651~medium.jpg" 
            alt="NASA/SpaceX Rocket Launch" 
            className="rounded-3xl shadow-[0_0_60px_rgba(249,115,22,0.4)] border-4 border-orange-500/20 w-full object-cover h-[500px]"
          />
          <div className="absolute -bottom-8 -right-8 bg-slate-900 p-8 rounded-2xl font-bold text-white shadow-2xl border border-slate-800 flex items-center gap-4">
             <BarChart3 className="text-orange-400" size={32}/>
             <div>
                <div className="text-sm text-slate-400">NASA MISSION DATA</div>
                <div className="text-2xl">LIVE STREAM</div>
             </div>
          </div>
        </motion.div>
      </section>

      {/* 2. PLANETARY SYSTEMS HUB (UPDATED FROM YOUR PHOTO) */}
      <section id="planets" className="relative z-10 py-28 px-6 bg-slate-900/40 backdrop-blur-md border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-black text-white mb-6 tracking-tighter">Planetary Systems Hub</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-20">Explore key data and high-resolution imagery of our closest celestial neighbors.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {planetData.map((planet) => (
              <motion.div 
                key={planet.name}
                whileHover={{ y: -10 }}
                className={`relative p-8 rounded-3xl bg-[#020617] border-2 ${planet.color} shadow-xl group overflow-hidden`}
              >
                {/* Image */}
                <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                   <img src={planet.image} alt={planet.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                {/* Names */}
                <h3 className={`text-3xl font-extrabold ${planet.accent} mb-2 tracking-tight`}>{planet.name}</h3>
                <p className="text-slate-400 text-sm mb-6 font-medium tracking-wide uppercase">{planet.subtitle}</p>
                
                {/* INFO TABLE (RE-ADDED AS REQUESTED) */}
                <div className="space-y-3 text-left border-t border-slate-800 pt-6 text-sm">
                  <div className="flex justify-between"><span className="text-slate-500">Diameter:</span> <span className="font-bold text-white">{planet.info.diameter}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Distance:</span> <span className="font-bold text-white">{planet.info.distance}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Avg Temp:</span> <span className="font-bold text-white">{planet.info.temp}</span></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SIMULATION AND UNIVERSE GALLERY */}
      <section className="relative z-10 py-28 px-6 max-w-7xl mx-auto">
         <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Simulation (Right Side) */}
            <div className="relative p-10 bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
               <Atom className="absolute -top-10 -right-10 text-orange-500/10" size={250}/>
               <h3 className="text-3xl font-bold text-white mb-6">Galactic Simulation</h3>
               <p className="text-slate-400 mb-10 leading-relaxed">Our advanced simulation engine tracks known exoplanets and analyzes potential habitability based on NASA's Kepler and TESS mission data.</p>
               <div className="flex flex-wrap gap-4">
                  {['Kepler-186f', 'Proxima b', 'TRAPPIST-1e', 'TOI-700 d'].map(p => (
                     <span key={p} className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm text-orange-300 font-mono">{p}</span>
                  ))}
               </div>
            </div>

            {/* Galaxy Gallery (NASA Discoveries) */}
            <div>
               <h2 className="text-4xl font-black text-white mb-8 tracking-tight">NASA Discoveries <br/>Deep Field Gallery</h2>
               <div className="grid grid-cols-2 gap-6">
                  <img src="https://science.nasa.gov/wp-content/uploads/2023/11/stsci-01h5303gz9m4jgtx77j9c66914-16x9-1.jpg?w=1280" alt="Galaxy Cluster" className="rounded-2xl border border-slate-800 h-40 w-full object-cover"/>
                  <img src="https://images-assets.nasa.gov/image/PIA22946/PIA22946~medium.jpg" alt="Jupiter CloseUp" className="rounded-2xl border border-slate-800 h-40 w-full object-cover"/>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/NGC_4414_%28visible_light%29.jpg/1280px-NGC_4414_%28visible_light%29.jpg" alt="Spiral Galaxy" className="rounded-2xl border border-slate-800 h-40 w-full object-cover"/>
                  <img src="https://science.nasa.gov/wp-content/uploads/2023/09/pia23403-mosaic-of-the-crab-nebula-16x9-1.jpg?w=1280" alt="Crab Nebula" className="rounded-2xl border border-slate-800 h-40 w-full object-cover"/>
               </div>
               <button className="mt-10 px-6 py-3 bg-white text-black rounded-full font-bold text-sm flex items-center gap-2 hover:bg-orange-400 hover:text-white transition-colors">
                  Explore Full Archive <ExternalLink size={16}/>
               </button>
            </div>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-16 text-center border-t border-slate-800/50 bg-slate-950 mt-20">
        <div className="flex justify-center gap-10 text-slate-500 mb-10">
           <Rocket className="hover:text-orange-500 cursor-pointer"/>
           <Globe className="hover:text-blue-500 cursor-pointer"/>
           <Mail className="hover:text-white cursor-pointer"/>
        </div>
        <p className="text-slate-600 font-mono text-xs uppercase tracking-widest">© 2026 Fahimiullah Turab Tech - Galactic Operations Division</p>
        <p className="text-slate-700 text-xs mt-2">All imagery courtesy of NASA/JPL-Caltech</p>
      </footer>
    </div>
  )
}

      
