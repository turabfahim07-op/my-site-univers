"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, AreaChart, Area } from "recharts"
import { motion } from "framer-motion"

const planetComposition = [
  { name: "Idrogeno", value: 75, color: "#FF8C00" },
  { name: "Elio", value: 24, color: "#87CEEB" },
  { name: "Altri", value: 1, color: "#FFB347" },
]

const universeExpansion = [
  { year: "10 Mld", velocità: 62 },
  { year: "11 Mld", velocità: 65 },
  { year: "12 Mld", velocità: 68 },
  { year: "13 Mld", velocità: 70 },
  { year: "Oggi", velocità: 73 },
]

const planetSizes = [
  { name: "Mercurio", size: 0.38 },
  { name: "Venere", size: 0.95 },
  { name: "Terra", size: 1 },
  { name: "Marte", size: 0.53 },
  { name: "Giove", size: 11.2 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card/90 backdrop-blur-sm border border-border p-3 rounded-lg glow-mixed">
        <p className="text-foreground font-semibold">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-muted-foreground">
            {entry.name}: <span className="text-primary">{entry.value}</span>
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function SpaceCharts() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Planet Composition Pie Chart */}
      <motion.div 
        className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 animate-pulse-glow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        <h4 className="text-lg font-semibold text-foreground mb-4 text-glow-orange">
          Composizione Solare
        </h4>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={planetComposition}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {planetComposition.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                formatter={(value) => <span className="text-muted-foreground">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Universe Expansion Area Chart */}
      <motion.div 
        className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 animate-pulse-glow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ scale: 1.02 }}
      >
        <h4 className="text-lg font-semibold text-foreground mb-4 text-glow-blue">
          Espansione Universo (km/s/Mpc)
        </h4>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={universeExpansion}>
              <defs>
                <linearGradient id="colorVelocity" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF8C00" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#FF8C00" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="year" stroke="#87CEEB" fontSize={12} />
              <YAxis stroke="#87CEEB" fontSize={12} />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="velocità" 
                stroke="#FF8C00" 
                fillOpacity={1} 
                fill="url(#colorVelocity)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Planet Sizes Bar Chart */}
      <motion.div 
        className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 animate-pulse-glow md:col-span-2 lg:col-span-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        <h4 className="text-lg font-semibold text-foreground mb-4 text-glow-orange">
          Dimensioni Pianeti (Terra = 1)
        </h4>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={planetSizes} layout="vertical">
              <XAxis type="number" stroke="#87CEEB" fontSize={12} />
              <YAxis dataKey="name" type="category" stroke="#87CEEB" fontSize={12} width={70} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="size" fill="#87CEEB" radius={[0, 4, 4, 0]}>
                {planetSizes.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={index % 2 === 0 ? "#FF8C00" : "#87CEEB"} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  )
}
