 "use client";
import React, { useState } from 'react';

export default function FahimEngine() {
  const [cerca, setCerca] = useState("");
  
  // IL TUO DATABASE PERSONALE
  const dati = [
    { titolo: "Fahim Turab Tech", info: "Sviluppo software e innovazione." },
    { titolo: "Missione Marte 2026", info: "Progetto di colonizzazione spaziale." },
    { titolo: "Ingegneria dei Ponti", info: "Studio sulle infrastrutture moderne." }
  ];

  const risultati = dati.filter(item => 
    item.titolo.toLowerCase().includes(cerca.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#1a1a1a', color: 'white', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#4285F4', fontSize: '3rem' }}>Fahim Search</h1>
      
      <input 
        type="text" 
        placeholder="Cerca nei miei progetti..."
        onChange={(e) => setCerca(e.target.value)}
        style={{ width: '100%', maxWidth: '600px', display: 'block', margin: '30px auto', padding: '15px', borderRadius: '25px', border: '1px solid #555', backgroundColor: '#333', color: 'white' }}
      />

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {risultati.map((res, i) => (
          <div key={i} style={{ borderBottom: '1px solid #444', padding: '15px 0' }}>
            <h3 style={{ color: '#8ab4f8', margin: '0' }}>{res.titolo}</h3>
            <p style={{ color: '#ccc' }}>{res.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
