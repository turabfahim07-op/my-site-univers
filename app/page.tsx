"use client";
import React, { useState } from 'react';

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const database = [
    { title: "Fahim Turab Tech", desc: "Il mio centro di innovazione digitale." },
    { title: "Progetto Marte 2026", desc: "Dati sulla missione spaziale." },
    { title: "Costruzione Ponti", desc: "Ingegneria e infrastrutture." },
    { title: "Software Fahim", desc: "Sviluppo di applicazioni moderne." }
  ];

  const filtered = database.filter(i => 
    i.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#1a1a1a', color: 'white', minHeight: '100vh', padding: '50px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center', color: '#4285F4' }}>Fahim Search Engine</h1>
      <input 
        type="text" 
        placeholder="Cerca nel mio database..."
        style={{ width: '100%', maxWidth: '500px', display: 'block', margin: '20px auto', padding: '15px', borderRadius: '30px', border: '1px solid #555', backgroundColor: '#333', color: 'white' }}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {filtered.map((item, index) => (
          <div key={index} style={{ borderBottom: '1px solid #444', padding: '15px 0' }}>
            <h3 style={{ color: '#8ab4f8', margin: '0' }}>{item.title}</h3>
            <p style={{ color: '#ccc' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}