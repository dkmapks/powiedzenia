const sounds = [
  { name: "kurwa", label: "🖕 kurwa" },
  { name: "noichuj", label: "😐 no i chuj" },
  { name: "ruchanie", label: "🍑 ruchanie?" },
  { name: "pierdolisz", label: "🤯 co ty pierdolisz?" },
  { name: "pucy", label: "🚫 nie wal pucy" },
  { name: "niepijeniepale", label: "💪 nie pije nie pale konia nie wale" },
  { name: "smiech", label: "😂 (śmiech)" },
  { name: "suszy", label: "🥴 ale mnie suszy" },
  { name: "dior", label: "🧴 dior sauvage" },
  { name: "piatek", label: "🎉 piątek" },
  { name: "branzo", label: "✊ branzo" },
  { name: "16cm", label: "📏 16cm" },
  { name: "zjadl", label: "🍔 ale bym coś zjadł" },
  { name: "wyjebane", label: "🧘 wyjebane mam" },
  { name: "pierdol", label: "🤬 pierdol się ty się wycisz" },
  { name: "babcia", label: "👵 babcia z wąsami" },
  { name: "npctoska", label: "🤖 npctoska" },
  { name: "spagety", label: "🍝 czypa spagety" },
  { name: "chuj2", label: "🟥 chuj do kwadratu" },
  { name: "kutas", label: "🍆 kutas" }
];
const container = document.getElementById('soundboard');
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.innerText = sound.label;
  btn.onclick = () => {
    const audio = new Audio(`sounds/${sound.name}.mp3`);
    audio.play();
  };
  container.appendChild(btn);
});
