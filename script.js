// Tutaj wpisz swoje dźwięki: [nazwa przycisku, plik dźwiękowy z rozszerzeniem]
const sounds = [
  ["🖕 kurwa", "kurwa.m4a"],
  ["😐 no i chuj", "noichuj.mp3"],
  ["🍑 ruchanie?", "ruchanie.m4a"],
  ["🤯 co ty pierdolisz?", "pierdolisz.mp3"],
  ["🚫 nie wal pucy", "pucy.mp3"],
  ["💪 nie pije nie pale konia nie wale", "niepijeniepale.mp3"],
  ["😂 (śmiech)", "smiech.mp3"],
  ["🥴 ale mnie suszy", "suszy.mp3"],
  ["🧴 dior sauvage", "dior.mp3"],
  ["🎉 piątek", "piatek.mp3"],
  ["✊ branzo", "branzo.mp3"],
  ["📏 16cm", "16cm.mp3"],
  ["🍔 ale bym coś zjadł", "zjadl.mp3"],
  ["🧘 wyjebane mam", "wyjebane.mp3"],
  ["🤬 pierdol się ty się wycisz", "pierdol.mp3"],
  ["👵 babcia z wąsami", "babcia.mp3"],
  ["🤖 npctoska", "npctoska.mp3"],
  ["🍝 czypa spagety", "spagety.mp3"],
  ["🟥 chuj do kwadratu", "chuj2.mp3"],
  ["🍆 kutas", "kutas.mp3"]
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('soundboard');

  sounds.forEach(([label, filename]) => {
    const btn = document.createElement('button');
    btn.textContent = label;

    btn.addEventListener('click', () => {
      const audio = new Audio(`sounds/${filename}`);
      audio.play().catch(err => {
        console.error("Błąd odtwarzania audio:", err);
      });
    });

    container.appendChild(btn);
  });
});
