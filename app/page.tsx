"use client"

import React, { useState, useEffect } from 'react'
import { 
  Rocket, 
  Cpu, 
  Globe, 
  Code2, 
  Database, 
  Layout, 
  ArrowRight,
  Github,
  Linkedin,
  Mail
} from "lucide-react"
import { motion } from "framer-motion"

// --- Background Components ---
function StarsBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#030712]">
      {[...Array(120)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7,
            animationDuration: `${2 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  )
}

// --- Main Page Component ---
export default function PortfolioPage() {
  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-orange-500/30">
      <StarsBackground />
      
      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
          TURAB TECH
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        </div>
        <button className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-orange-400 hover:text-white transition-all">
          Contact Me
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-widest">
            Available for New Projects
          </span>
          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Building the Future of <br />
            <span className="bg-gradient-to-r from-orange-400 via-rose-400 to-purple-500 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Welcome to Fahimiullah Turab Tech. We specialize in high-end web development, 
            3D interfaces, and innovative software solutions for the modern age.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)]">
              View Projects <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-md border border-slate-700 rounded-xl font-bold transition-all">
              Learn More
            </button>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-24 px-6 bg-slate-900/40 backdrop-blur-sm border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Professional Services</h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Layout className="text-orange-400" />, title: "Web Design", desc: "Creating stunning, responsive, and user-centric interfaces." },
              { icon: <Code2 className="text-rose-400" />, title: "Development", desc: "Building fast, scalable applications using Next.js and React." },
              { icon: <Database className="text-purple-400" />, title: "Backend", desc: "Secure data management and robust server-side architecture." }
            ].map((service, index) => (
              <div key={index} className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-orange-500/50 transition-all group">
                <div className="mb-4 p-3 bg-slate-900 rounded-lg w-fit group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Expertise & <br/>Tech Stack</h2>
            <p className="text-slate-400 mb-8">
              I use the latest technologies to ensure your project is not only beautiful 
              but also high-performing and future-proof.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Three.js'].map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-slate-300 font-medium">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-3xl border border-slate-700/50 p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-10">
                <Cpu size={200} />
             </div>
             <h3 className="text-2xl font-bold mb-4 italic">"Innovation distinguishes between a leader and a follower."</h3>
             <p className="text-orange-400 font-bold">— Professional Vision</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-slate-800/50 text-center">
        <div className="flex justify-center gap-6 mb-8">
          <Github className="text-slate-400 hover:text-white cursor-pointer" />
          <Linkedin className="text-slate-400 hover:text-white cursor-pointer" />
          <Mail className="text-slate-400 hover:text-white cursor-pointer" />
        </div>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Fahimiullah Turab Tech. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
