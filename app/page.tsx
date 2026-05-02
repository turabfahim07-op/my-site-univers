"use client"

import { Code, Laptop, Lightbulb, Rocket, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GalaxyScene } from "@/components/galaxy-scene"
import { SpaceCharts } from "@/components/space-charts"
import { motion } from "framer-motion"

// Animated stars background
function StarsBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: Math.random() * 0.7 + 0.3,
          }}
        />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <StarsBackground />
      
      {/* Header */}
      <header className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.h1 
            className="text-xl font-bold text-foreground flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Rocket className="h-6 w-6 text-primary" />
            <span className="text-glow-orange">Fahimiullah Turab Tech</span>
          </motion.h1>
          <nav className="hidden md:flex gap-6">
            <a href="#galaxy" className="text-muted-foreground hover:text-primary transition-colors">Galassia</a>
            <a href="#servizi" className="text-muted-foreground hover:text-primary transition-colors">Servizi</a>
            <a href="#dati" className="text-muted-foreground hover:text-primary transition-colors">Dati Spaziali</a>

          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <Sparkles className="h-12 w-12 text-primary text-glow-orange" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance text-glow-orange">
            Benvenuto in Fahimiullah Turab Tech
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty text-glow-blue">
            Soluzioni tecnologiche innovative per il tuo business. Esplora lo spazio della tecnologia con noi.
          </p>
        </motion.div>
      </section>

      {/* 3D Galaxy Section */}
      <section id="galaxy" className="relative z-10 py-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="rounded-2xl overflow-hidden glow-mixed"
          >
            <h3 className="text-3xl font-bold text-center text-foreground mb-8 text-glow-blue">
              Esplora il Sistema Solare 3D
            </h3>
            <p className="text-center text-muted-foreground mb-6">
              Muovi il mouse per esplorare - I pianeti orbitano attorno al sole
            </p>
            <GalaxyScene />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servizi" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border glow-orange hover:glow-mixed transition-all duration-300">
                <CardHeader>
                  <Laptop className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-foreground">Sviluppo Web</CardTitle>
                  <CardDescription className="text-muted-foreground">Creazione di siti web moderni e responsivi</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Realizzo siti web personalizzati utilizzando le tecnologie più avanzate per garantire prestazioni ottimali.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border glow-blue hover:glow-mixed transition-all duration-300">
                <CardHeader>
                  <Code className="h-10 w-10 text-secondary mb-2" />
                  <CardTitle className="text-foreground">Sviluppo Software</CardTitle>
                  <CardDescription className="text-muted-foreground">Applicazioni su misura per le tue esigenze</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sviluppo software personalizzato per automatizzare i processi e migliorare la produttività aziendale.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border glow-orange hover:glow-mixed transition-all duration-300">
                <CardHeader>
                  <Lightbulb className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-foreground">Consulenza IT</CardTitle>
                  <CardDescription className="text-muted-foreground">Strategie tecnologiche per il tuo successo</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Offro consulenza per aiutarti a scegliere le soluzioni tecnologiche più adatte al tuo business.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Space Data Charts Section */}
      <section id="dati" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-center text-foreground mb-4 text-glow-orange">
              Dati Spaziali Interattivi
            </h3>
            <p className="text-center text-muted-foreground mb-12">
              Grafici futuristici che mostrano dati sull&apos;universo
            </p>
            <SpaceCharts />
          </motion.div>
        </div>
      </section>



      {/* Footer */}
      <footer className="border-t border-border py-8 relative z-10 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Fahimiullah Turab Tech. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </main>
  )
}
