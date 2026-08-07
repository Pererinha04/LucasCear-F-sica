const ICONS = {
  kinematics:  `<svg viewBox="0 0 24 24"><path d="M3 19c4-9 10-13 18-14" stroke-dasharray="2.2 3.4"/><circle cx="21" cy="5" r="1.6" fill="currentColor" stroke="none"/><path d="M17 4l4 1 -1 4"/></svg>`,
  newton:      `<svg viewBox="0 0 24 24"><circle cx="14" cy="12" r="6"/><path d="M2 12h5"/><path d="M4 9l3 3-3 3"/></svg>`,
  statics:     `<svg viewBox="0 0 24 24"><path d="M12 4v6"/><path d="M4 20l8-6 8 6"/><path d="M2 20h20"/><circle cx="12" cy="4" r="1.5" fill="currentColor" stroke="none"/></svg>`,
  energy:      `<svg viewBox="0 0 24 24"><path d="M13 3 5 14h6l-1 7 9-12h-7l1-6Z"/></svg>`,
  gravitation: `<svg viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="9" ry="4.2"/><circle cx="20.2" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none"/></svg>`,
  hydrostatics:`<svg viewBox="0 0 24 24"><path d="M2 9c2-2 4 2 6 0s4 2 6 0 4 2 6 0"/><path d="M2 15c2-2 4 2 6 0s4 2 6 0 4 2 6 0"/><circle cx="12" cy="9" r="2.6"/></svg>`,
  thermometry: `<svg viewBox="0 0 24 24"><path d="M12 3v11.5"/><circle cx="12" cy="18" r="3"/><path d="M9.5 6h5"/></svg>`,
  calorimetry: `<svg viewBox="0 0 24 24"><path d="M12 21c4 0 6-2.6 6-5.8 0-3-2-4.6-3-6.7-.6 1.4-1 2-1.8 2.2C13.7 8 14 5 12 2c0 4-4.5 5-4.5 9.6 0 1-.3 1.7-1 2.4-.3-.8-.4-1.5-.4-2C4.7 13.8 6 21 12 21Z"/></svg>`,
  thermodynamics:`<svg viewBox="0 0 24 24"><rect x="5" y="7" width="14" height="10" rx="1.5"/><path d="M9 7V4h6v3"/><path d="M2 12h3"/><path d="M19 12h3"/></svg>`,
  optics:      `<svg viewBox="0 0 24 24"><path d="M4 20 12 4l8 16Z"/><path d="M2 12h6"/><path d="M16 12h6"/></svg>`,
  eye:         `<svg viewBox="0 0 24 24"><path d="M2 12s4-6.5 10-6.5S22 12 22 12s-4 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="2.6"/></svg>`,
  waves:       `<svg viewBox="0 0 24 24"><path d="M2 12c1.5-4 3-4 4.5 0s3 4 4.5 0 3-4 4.5 0 3 4 4.5 0"/></svg>`,
  electrostatics:`<svg viewBox="0 0 24 24"><path d="M13 2 5 13h5l-1 9 9-12h-6l1-8Z"/></svg>`,
  circuits:    `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h4l1.5-2.5L10 12l1.5-5 1.5 5 1.5-2.5H21"/></svg>`,
  generators:  `<svg viewBox="0 0 24 24"><path d="M3 8h5v8H3z"/><path d="M8 10h3"/><path d="M8 14h3"/><path d="M13 6v12"/><path d="M17 9v6"/><path d="M13 12h8"/></svg>`,
  electromagnetism:`<svg viewBox="0 0 24 24"><path d="M4 4c4 0 4 4 8 4s4-4 8-4"/><path d="M4 12c4 0 4 4 8 4s4-4 8-4"/><path d="M4 20c4 0 4 4 8 4" opacity="0"/></svg>`,
  modern:      `<svg viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none"/></svg>`,
  nuclear:     `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none"/><path d="M12 12 4 7"/><path d="M12 12 4 17"/><path d="M12 12h9.4"/><path d="M12 4v0"/></svg>`
};

const SERIES = [
  { grid:"grid-1", accentBadge:"var(--terracotta-2)",
    topics:[
      {icon:"kinematics", title:"Cinemática Escalar", desc:"Do repouso ao MRUV: como descrever qualquer movimento em linha reta.", dur:"28 min", ex:"14 exercícios"},
      {icon:"newton", title:"Leis de Newton", desc:"Inércia, força e reação — as três leis que explicam por que nada se move sozinho.", dur:"34 min", ex:"16 exercícios"},
      {icon:"statics", title:"Estática e Equilíbrio", desc:"Torque, alavancas e o ponto exato onde as forças se cancelam.", dur:"25 min", ex:"10 exercícios"},
      {icon:"energy", title:"Trabalho e Energia", desc:"Energia que se transforma, não se perde — do arremesso ao pêndulo.", dur:"31 min", ex:"12 exercícios"},
      {icon:"gravitation", title:"Gravitação Universal", desc:"As leis de Kepler e a força que mantém a Lua presa à Terra.", dur:"26 min", ex:"9 exercícios"},
      {icon:"hydrostatics", title:"Hidrostática", desc:"Pressão, empuxo e por que a jangada flutua e a pedra não.", dur:"29 min", ex:"11 exercícios"}
    ]},
  { grid:"grid-2", accentBadge:"var(--amber)",
    topics:[
      {icon:"thermometry", title:"Termometria e Dilatação", desc:"Por que os trilhos têm frestas e o mercúrio sobe no termômetro.", dur:"24 min", ex:"10 exercícios"},
      {icon:"calorimetry", title:"Calorimetria", desc:"Trocas de calor, mudanças de estado e o gelo que insiste em não derreter rápido.", dur:"27 min", ex:"12 exercícios"},
      {icon:"thermodynamics", title:"Termodinâmica", desc:"As leis que regem motores, geladeiras e o limite de toda máquina térmica.", dur:"33 min", ex:"13 exercícios"},
      {icon:"optics", title:"Óptica Geométrica", desc:"Reflexão, refração e o motivo do remo parecer quebrado na água.", dur:"30 min", ex:"15 exercícios"},
      {icon:"eye", title:"Instrumentos Ópticos e o Olho", desc:"Lentes, lupas e como corrigir o que o olho não enxerga sozinho.", dur:"22 min", ex:"8 exercícios"},
      {icon:"waves", title:"Ondulatória e Som", desc:"Da maré que sobe ao eco no cânion: tudo é onda, se você souber olhar.", dur:"28 min", ex:"11 exercícios"}
    ]},
  { grid:"grid-3", accentBadge:"var(--glow)",
    topics:[
      {icon:"electrostatics", title:"Eletrostática", desc:"Cargas, campos elétricos e a faísca antes da tempestade.", dur:"26 min", ex:"10 exercícios"},
      {icon:"circuits", title:"Eletrodinâmica e Circuitos", desc:"Corrente, resistência e como montar um circuito que realmente funciona.", dur:"36 min", ex:"18 exercícios"},
      {icon:"generators", title:"Geradores e Receptores", desc:"Potência elétrica, rendimento e a conta de luz explicada pela física.", dur:"24 min", ex:"9 exercícios"},
      {icon:"electromagnetism", title:"Eletromagnetismo", desc:"Indução, motores e a ligação entre eletricidade e magnetismo.", dur:"32 min", ex:"14 exercícios"},
      {icon:"modern", title:"Física Moderna", desc:"Relatividade e quântica: quando o senso comum já não explica mais nada.", dur:"29 min", ex:"10 exercícios"},
      {icon:"nuclear", title:"Radioatividade", desc:"Decaimento, meia-vida e a energia escondida dentro do átomo.", dur:"25 min", ex:"8 exercícios"}
    ]}
];

SERIES.forEach(series=>{
  const grid = document.getElementById(series.grid);
  series.topics.forEach((t,i)=>{
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.innerHTML = `
      <div style="display:flex;align-items:flex-start;justify-content:space-between;">
        <div class="topic-icon">${ICONS[t.icon]}</div>
        <div class="topic-num">0${i+1}</div>
      </div>
      <div>
        <div class="topic-title">${t.title}</div>
        <div class="topic-desc">${t.desc}</div>
      </div>
      <div class="topic-foot">
        <span>${t.dur} · ${t.ex}</span>
        <span class="arrow"><svg viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg></span>
      </div>`;
    grid.appendChild(card);
  });
});

// active pill on scroll
const pills = document.querySelectorAll('.depth-pill');
const sections = ['ano-1','ano-2','ano-3'].map(id=>document.getElementById(id));
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const idx = sections.indexOf(entry.target);
      pills.forEach(p=>p.classList.remove('is-active'));
      if(pills[idx]) pills[idx].classList.add('is-active');
    }
  });
},{rootMargin:"-40% 0px -50% 0px"});
sections.forEach(s=>io.observe(s));