"use client";
import React, { useState } from 'react';

export default function StandaloneSearch() {
  const [query, setQuery] = useState("");

  // Il tuo database personalizzato (È QUI!)
  const database = [
    { title: "Fahim Turab Softwer - Progetti", cat: "Engineering", desc: "Sito ufficiale per le costruzioni digitali." },
    { title: "Esplorazione di Marte", cat: "Space", desc: "Dati tecnici sul pianeta rosso e i crateri." },
    { title: "Come costruire un ponte", cat: "Construction", desc: "Guida per giovani ingegneri civili." },
    { title: "Next.js per Principianti", cat: "Software", desc: "Impara a programmare come Fahim." }
  ];

  const filteredResults = database.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#202124', color: 'white', minHeight: '100vh', padding: '50px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '40px', color: '#4285F4', marginBottom: '30px' }}>Fahim Search</h1>
        
        <input 
          type="text" 
          placeholder="Cerca nel tuo database..."
          style={{ width: '100%', padding: '15px 25px', borderRadius: '30px', border: '1px solid #5f6368', backgroundColor: '#303134', color: 'white', fontSize: '18px', outline: 'none', marginBottom: '40px' }}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div style={{ textAlign: 'left' }}>
          {filteredResults.map((item, index) => (
            <div key={index} style={{ marginBottom: '25px', padding: '15px', borderBottom: '1px solid #3c4043' }}>
              <p style={{ color: '#8ab4f8', fontSize: '20px', margin: '0 0 5px 0' }}>{item.title}</p>
              <p style={{ color: '#bdc1c6', fontSize: '14px', margin: '0' }}>{item.desc}</p>
              <span style={{ fontSize: '12px', color: '#34A853', fontWeight: 'bold' }}>Categoria: {item.cat}</span>
            </div>
          ))}
          {filteredResults.length === 0 && <p>Nessun risultato trovato per "{query}"</p>}
        </div>
      </div>
    </div>
  );
}
