 "use client";
import React, { useState } from 'react';

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const database = [
    { title: "Fahim Turab Softwer - Progetti", desc: "Sito ufficiale per le costruzioni digitali." },
    { title: "Esplorazione di Marte", desc: "Dati tecnici sul pianeta rosso." },
    { title: "Come costruire un ponte", desc: "Guida per giovani ingegneri civili." }
  ];
  const filtered = database.filter(i => i.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div style={{ backgroundColor: '#202124', color: 'white', minHeight: '100vh', padding: '50px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center', color: '#4285F4' }}>Fahim Search</h1>
      <input 
        type="text" 
        placeholder="Cerca nel tuo database..."
        style={{ width: '100%', maxWidth: '500px', display: 'block', margin: '20px auto', padding: '15px', borderRadius: '30px', border: '1px solid #5f6368', backgroundColor: '#303134', color: 'white' }}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {filtered.map((item, index) => (
          <div key={index} style={{ borderBottom: '1px solid #3c4043', padding: '15px 0' }}>
            <h3 style={{ color: '#8ab4f8', margin: '0' }}>{item.title}</h3>
            <p style={{ color: '#bdc1c6' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
"use client";
import React, { useState } from 'react';

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const database = [
    { title: "Fahim Turab Softwer - Progetti", desc: "Sito ufficiale per le costruzioni digitali." },
    { title: "Esplorazione di Marte", desc: "Dati tecnici sul pianeta rosso." },
    { title: "Come costruire un ponte", desc: "Guida per giovani ingegneri civili." }
  ];
  const filtered = database.filter(i => i.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div style={{ backgroundColor: '#202124', color: 'white', minHeight: '100vh', padding: '50px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center', color: '#4285F4' }}>Fahim Search</h1>
      <input 
        type="text" 
        placeholder="Cerca nel tuo database..."
        style={{ width: '100%', maxWidth: '500px', display: 'block', margin: '20px auto', padding: '15px', borderRadius: '30px', border: '1px solid #5f6368', backgroundColor: '#303134', color: 'white' }}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {filtered.map((item, index) => (
          <div key={index} style={{ borderBottom: '1px solid #3c4043', padding: '15px 0' }}>
            <h3 style={{ color: '#8ab4f8', margin: '0' }}>{item.title}</h3>
            <p style={{ color: '#bdc1c6' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
