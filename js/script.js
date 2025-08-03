/* Scroll reveal: animación al aparecer */
const obs = new IntersectionObserver(
    entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
    { threshold: 0.3 }
  );
  document.querySelectorAll('.appear').forEach(el => obs.observe(el));
  
  /* Reproductor de audio */
  const btn = document.getElementById('playBtn');
const song = document.getElementById('song');
const icon = btn.querySelector('i');

btn.addEventListener('click', () => {
  if (song.paused) {
    song.play();
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  } else {
    song.pause();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  }
});

  
  /* Cuenta regresiva */
  const eventDate = new Date('2025-08-16T13:00:00-05:00'); // Ajusta fecha/hora del evento
  const els = {
    d: '#days',
    h: '#hours',
    m: '#minutes',
    s: '#seconds' // NUEVO
  };
  
  function tick() {
    const now = new Date();
    const diff = eventDate - now;
  
    if (diff <= 0) {
      // Evento pasado
      document.querySelector(els.d).textContent = "00";
      document.querySelector(els.h).textContent = "00";
      document.querySelector(els.m).textContent = "00";
      document.querySelector(els.s).textContent = "00";
      const big = document.getElementById('day-count');
      if (big) big.textContent = "0";
      return;
    }
  
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60); // NUEVO
  
    document.querySelector(els.d).textContent = d.toString().padStart(2, '0');
    document.querySelector(els.h).textContent = h.toString().padStart(2, '0');
    document.querySelector(els.m).textContent = m.toString().padStart(2, '0');
    document.querySelector(els.s).textContent = s.toString().padStart(2, '0'); // NUEVO
  
    const big = document.getElementById('day-count');
    if (big) big.textContent = d.toString();
  }
  
  // Ejecutar al cargar y luego cada segundo
  tick();
  setInterval(tick, 1000);
  
  /* Botones de ubicación (mapas) */
  document.querySelectorAll('[data-map]').forEach(b =>
    b.addEventListener('click', () => window.open(b.dataset.map, '_blank'))
  );
  