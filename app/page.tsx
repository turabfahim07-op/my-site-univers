"use client"

import React from 'react'
import { Rocket, Globe, Zap, Shield, Star, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export default function NasaProfessionalPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans overflow-x-hidden">
      {/* Background Stellato */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, opacity: Math.random() }} />
        ))}
      </div>

      {/* Hero Section con Razzo NASA */}
      <section className="relative z-10 pt-20 pb-32 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex-1 text-left">
          <span className="text-orange-500 font-mono tracking-widest uppercase text-sm font-bold">Mission: Innovation</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mt-4 leading-tight">
            TURAB <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">TECH</span>
          </h1>
          <p className="text-xl text-slate-400 mt-6 max-w-lg">
            Engineering digital solutions with the precision of aerospace technology. Welcome to the next frontier.
          </p>
        </motion.div>

        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="flex-1 relative">
          <img 
            src="https://images-assets.nasa.gov/image/spacex-crew-6-launch-jsc2023e011651/spacex-crew-6-launch-jsc2023e011651~medium.jpg" 
            alt="NASA Rocket" 
            className="rounded-2xl shadow-[0_0_50px_rgba(249,115,22,0.3)] border border-orange-500/20 w-full object-cover h-[400px]"
          />
          <div className="absolute -bottom-6 -right-6 bg-orange-500 p-6 rounded-xl font-bold text-white shadow-xl">
            NASA IMAGERY <br/> LIVE DATA
          </div>
        </motion.div>
      </section>

      {/* Sistema Solare "3D Feel" */}
      <section className="relative z-10 py-20 bg-slate-900/50 backdrop-blur-md border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-16 italic">Planetary Systems Hub</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Mars', img: 'https://starwalk.space/gallery/images/mars-the-ultimate-guide/1140x641.jpg', color: 'bg-red-500' },
              { name: 'Saturn', img: 'https://science.nasa.gov/wp-content/uploads/2023/05/pia25102-saturn-approach-16x9-1.jpg', color: 'bg-yellow-500' },
              { name: 'Earth', img: 'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg', color: 'bg-blue-500' },
              { name: 'Jupiter', img: 'https://science.nasa.gov/wp-content/uploads/2023/09/pia22946-jupiter-marble-16x9-1.jpg', color: 'bg-orange-800' }
            ].map((planet) => (
              <motion.div whileHover={{ scale: 1.1 }} key={planet.name} className="relative group cursor-pointer">
                <div className={`absolute inset-0 ${planet.color} blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                <img src={planet.img} alt={planet.name} className="w-40 h-40 mx-auto rounded-full object-cover border-2 border-white/10 shadow-2xl mb-4" />
                <h3 className="text-xl font-bold text-white">{planet.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Professionale */}
      <footer className="relative z-10 py-20 px-6 text-center">
        <div className="flex justify-center gap-8 mb-8">
           <Rocket className="hover:text-orange-500 cursor-pointer transition-colors" />
           <Globe className="hover:text-blue-500 cursor-pointer transition-colors" />
           <Zap className="hover:text-yellow-500 cursor-pointer transition-colors" />
        </div>
        <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">© 2026 Turab Tech Aerospace Division</p>
      </footer>
    </div>
  )
}

