document.addEventListener("DOMContentLoaded", () => {
  
  const events = [
    { "year": 1976, "name": "David Berkowitz", "desc": "\"Son of Sam\"; claimed a demon dog commanded him to kill. Later diagnosed with schizophrenia." },
    { "year": 1976, "name": "Edward Charles Allaway", "desc": "CSU Fullerton mass shooting; paranoid schizophrenia." },
    { "year": 1977, "name": "Richard Chase", "desc": "\"Vampire of Sacramento\"; paranoid schizophrenia, believed Nazis were poisoning him." },
    { "year": 1981, "name": "John Hinckley Jr.", "desc": "Attempted Reagan assassination; diagnosed with schizophrenia, had erotomanic delusions about Jodie Foster." },
    { "year": 1987, "name": "Ronald Gene Simmons", "desc": "Killed 16 family and acquaintances. Exhibited signs of psychosis during and after killings." },
    { "year": 1993, "name": "James Swann Jr.", "desc": "Believed he was possessed by 'the spirit of Malcolm X'; diagnosed with paranoid schizophrenia." },
    { "year": 1994, "name": "Dean Allen Mellberg", "desc": "Fairchild Air Force Base shooting; paranoid, delusional behavior." },
    { "year": 2001, "name": "Andrea Yates", "desc": "Drowned her five children; had postpartum psychosis and schizophrenia, heard Satan’s voice." },
    { "year": 2003, "name": "Deanna Laney", "desc": "Killed two sons with rocks; said God told her to do it. Psychotic religious delusions." },
    { "year": 2003, "name": "Charles Edmund Cullen", "desc": "Nurse, serial killer; exhibited psychosis and dissociation during his killings." },
    { "year": 2003, "name": "Joshua Cooke", "desc": "\"Matrix killer\"; diagnosed with schizophrenia, acted on paranoid and derealization delusions." },
    { "year": 2003, "name": "David Shick", "desc": "Stabbed classmates; believed he was under mind control, diagnosed with schizophrenia." },
    { "year": 2004, "name": "Cayce Pollard", "desc": "Believed God told him to commit murder; had religious psychosis." },
    { "year": 2004, "name": "Chai Vang", "desc": "WI hunting murders; believed he was being racially threatened, showed paranoid tendencies." },
    { "year": 2004, "name": "Nathan Gale", "desc": "Killed Dimebag Darrell on stage; paranoid schizophrenia, believed band was stealing his thoughts." },
    { "year": 2006, "name": "Brandon Dewayne Johnson", "desc": "TX murder; heard voices, diagnosed with schizophrenia." },
    { "year": 2007, "name": "Joseph McEnroe", "desc": "WA family slaying; heard voices, possible psychosis." },
    { "year": 2009, "name": "Anthony Barrera", "desc": "CA; stabbed a man while claiming he was a demon. Diagnosed with schizophrenia." },
    { "year": 2009, "name": "Anthony Sowell", "desc": "OH serial killer; diagnosed with PTSD and psychosis." },
    { "year": 2010, "name": "Omar Thornton", "desc": "CT workplace shooting; believed coworkers were racist and conspiring against him." },
    { "year": 2010, "name": "Trevor Hoskins", "desc": "Claimed he was a god and stabbed woman to 'release evil spirits.'" },
    { "year": 2011, "name": "Jared Loughner", "desc": "Tucson, AZ shooter. Paranoid schizophrenia; believed the government controlled grammar." },
    { "year": 2011, "name": "Scott Dekraai", "desc": "CA salon massacre; had bipolar disorder with psychotic features." },
    { "year": 2011, "name": "Tyler Hadley", "desc": "FL; killed parents with hammer, showed disturbing disconnection and paranoid thoughts." },
    { "year": 2012, "name": "James Holmes", "desc": "Aurora, CO theater shooter. Diagnosed with schizoaffective disorder; heard voices, had delusions of grandeur." },
    { "year": 2012, "name": "Luka Magnotta", "desc": "Killed and dismembered a man; diagnosed with schizophrenia." },
    { "year": 2012, "name": "Adam Lanza", "desc": "Sandy Hook shooter; no schizophrenia diagnosis, but had extreme social detachment, OCD, and paranoia." },
    { "year": 2012, "name": "Jacob Tyler Roberts", "desc": "OR mall shooter; possible psychosis or dissociation during rampage." },
    { "year": 2013, "name": "Ali Syed", "desc": "CA rampage killer; believed voices told him to kill." },
    { "year": 2013, "name": "Aaron Alexis", "desc": "Navy Yard shooter; etched 'My ELF Weapon' on shotgun, believed he was targeted with mind control." },
    { "year": 2013, "name": "Michael Brandon Hill", "desc": "GA school incident; diagnosed with bipolar disorder and schizophrenia." },
    { "year": 2013, "name": "Nico Jenkins", "desc": "NE spree killer; claimed voices of Apophis told him to kill." },
    { "year": 2014, "name": "Matthew de Grood", "desc": "Calgary mass stabbing; diagnosed with schizophrenia, heard voices and had delusions." },
    { "year": 2014, "name": "Elliot Rodger", "desc": "Isla Vista shooter; not formally diagnosed, but displayed psychotic narcissism and paranoia." },
    { "year": 2014, "name": "Myron May", "desc": "FSU shooter; posted videos about being a 'Targeted Individual'." },
    { "year": 2014, "name": "Ali Abballa", "desc": "Canada; ISIS-inspired attacker, previously diagnosed with mental illness and delusions." },
    { "year": 2014, "name": "Douglas Garland", "desc": "Triple homicide; diagnosed with paranoid personality disorder, possibly psychotic." },
    { "year": 2014, "name": "Michael Zehaf-Bibeau", "desc": "Parliament Hill attacker; diagnosed with schizophrenia and delusions." },
    { "year": 2017, "name": "Randy Stair", "desc": "PA supermarket shooter; believed he was transforming into a ghost cartoon character." },
    { "year": 2017, "name": "Stephen Paddock", "desc": "Las Vegas shooter; sent texts about brain hacking and being part of a government experiment." },
    { "year": 2017, "name": "Kevin Janson Neal", "desc": "CA spree shooter; believed neighbors were cooking meth to poison him, delusional disorder." },
    { "year": 2017, "name": "Devin Patrick Kelley", "desc": "TX church shooter; history of mental health issues and delusional behavior." },
    { "year": 2018, "name": "Nikolas Cruz", "desc": "Parkland shooter; reported hearing voices, diagnosed with several disorders including autism and depression, possible psychosis." },
    { "year": 2018, "name": "Dimitrios Pagourtzis", "desc": "TX Santa Fe shooter; showed disturbing journals, possible delusional ideation." },
    { "year": 2019, "name": "John Ernest", "desc": "Poway synagogue shooter; expressed suicidal ideation and delusional martyrdom." },
    { "year": 2019, "name": "Isaiah Joel Peoples", "desc": "Drove into pedestrians believing they were devils; schizoaffective disorder." },
    { "year": 2020, "name": "Johan Nilsson", "desc": "Swedish axe murderer; suspected schizophrenia, killed parents in separate attacks." },
    { "year": 2021, "name": "Noah Green", "desc": "Capitol attacker; delusions about Freemasons and brain control, believed government was targeting him." },
    { "year": 2021, "name": "Darrell Brooks", "desc": "Waukesha attack; displayed psychotic symptoms and delusional courtroom behavior." },
    { "year": 2022, "name": "Salvador Ramos", "desc": "Uvalde shooter; possible psychosis, animal torture, disturbing behavior, online threats." },
    { "year": 2022, "name": "Stephen Marlow", "desc": "OH shooter; posted about telepathy, ventriloquism, and a terrorist mind-control conspiracy." },
    { "year": 2022, "name": "Alejandro Enriquez", "desc": "TX; murdered parents, later diagnosed with schizophrenia." }
  ];

  const SCROLL_PER_CARD = 600; 
  const FOCUS_ZONE = 180; 
  const AUTO_PLAY_SPEED = 2.5; 
  const IDLE_TIMEOUT_MS = 4000; 
  const ON_AIR_PAUSE_MS = 2500; 

  let isAutoPlaying = false;
  let isPausedOnCard = false;
  let currentPausedIndex = -1;
  let idleTimer = null;
  let virtualScrollY = 0; 
  let cards = [];

  // Dual Sound Engine Nodes
  let audioCtx, noiseGain, oscGain, isAudioInitialized = false;

  const DEPTH = {
    rMin: 0.3, rMax: 2.4,
    pxMin: 0.04, pxMax: 1.00,
    drMin: 0.15, drMax: 0.65,
    opMin: 0.25, opMax: 1.00,
    twAMin: 0.05, twAMax: 0.28,
    twSMin: 0.0005, twSMax: 0.004,
    glMin: 0, glMax: 10,
    colFarR: 240, colFarG: 170, colFarB: 110, 
    colNearR: 255, colNearG: 235, colNearB: 210,
  };

  function lerp(a, b, t) { return a + (b - a) * t; }

  const stars = S.map(s => {
    const z = s.z;
    return {
      nx: s.x / 999, ny: s.y / 999, z, baseO: s.o,
      radius: lerp(DEPTH.rMin, DEPTH.rMax, z),
      parallax: lerp(DEPTH.pxMin, DEPTH.pxMax, z),
      drift: lerp(DEPTH.drMin, DEPTH.drMax, z),
      opFloor: lerp(DEPTH.opMin, DEPTH.opMax, z),
      twAmp: lerp(DEPTH.twAMin, DEPTH.twAMax, z),
      twSpd: lerp(DEPTH.twSMin, DEPTH.twSMax, z),
      twPhase: Math.random() * Math.PI * 2,
      glow: lerp(DEPTH.glMin, DEPTH.glMax, z),
      cr: Math.round(lerp(DEPTH.colFarR, DEPTH.colNearR, z)),
      cg: Math.round(lerp(DEPTH.colFarG, DEPTH.colNearG, z)),
      cb: Math.round(lerp(DEPTH.colFarB, DEPTH.colNearB, z)),
    };
  });
  stars.sort((a, b) => a.z - b.z);
  
  const shooters = [];
  const canvas = document.getElementById('star-canvas');
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, DPR = 1, curX = 0, curY = 0;

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = Math.round(W * DPR);
    canvas.height = Math.round(H * DPR);
  }
  window.addEventListener('resize', resize);
  
  function easeInOut(t) { return t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t; }

  const spacer = document.getElementById('scroll-spacer');
  const viewport = document.getElementById('viewport');
  const gridFloor = document.getElementById('grid-floor');
  const powerOverlay = document.getElementById('power-overlay');

  function resetIdleTimer() {
    isAutoPlaying = false;
    isPausedOnCard = false; 
    virtualScrollY = window.scrollY || window.pageYOffset || 0; 
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => { 
      isAutoPlaying = true; 
      currentPausedIndex = -1; 
    }, IDLE_TIMEOUT_MS);
  }

  window.addEventListener('wheel', resetIdleTimer, { passive: true });
  window.addEventListener('touchstart', resetIdleTimer, { passive: true });
  window.addEventListener('touchmove', resetIdleTimer, { passive: true });
  window.addEventListener('keydown', resetIdleTimer, { passive: true });

  function initAudio() {
    if (isAudioInitialized) return;
    isAudioInitialized = true;

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();

    // 1. Setup Static Analog Noise Node
    const bufferSize = audioCtx.sampleRate * 2; 
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);

    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
      let white = Math.random() * 2 - 1;
      data[i] = (lastOut + (0.02 * white)) / 1.02; 
      lastOut = data[i];
      data[i] *= 3.5; 
    }

    const noiseSource = audioCtx.createBufferSource();
    noiseSource.buffer = buffer;
    noiseSource.loop = true;

    const bandpass = audioCtx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.value = 1100;
    bandpass.Q.value = 0.9;

    noiseGain = audioCtx.createGain();
    noiseGain.gain.value = 0; 

    noiseSource.connect(bandpass);
    bandpass.connect(noiseGain);
    noiseGain.connect(audioCtx.destination);
    noiseSource.start();

    // 2. Setup High-Pitch Tinnitus Sine Generator Node
    const osc = audioCtx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = 7200; // Realistic internal tinnitus frequency tracking

    oscGain = audioCtx.createGain();
    oscGain.gain.value = 0; // Starts hidden outside focus zones

    osc.connect(oscGain);
    oscGain.connect(audioCtx.destination);
    osc.start();
  }

  const initOverlay = document.getElementById('init-overlay');
  initOverlay.addEventListener('click', () => {
    initAudio();
    initOverlay.style.opacity = '0';
    setTimeout(() => {
      initOverlay.style.display = 'none';
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
      init(); 
    }, 500);
  });

  function init() {
    resize();
    spacer.style.height = `${(events.length * SCROLL_PER_CARD) + window.innerHeight}px`;

    events.forEach((ev, i) => {
      const el = document.createElement('div');
      el.className = 'event-card';
      
      const hue = Math.floor(32 + Math.random() * 6); 
      const flickerDur = 0.3 + Math.random() * 2.0; 
      
      el.style.setProperty('--crt-color', `hsl(${hue}, 100%, 48%)`);
      el.style.setProperty('--crt-glow', `hsla(${hue}, 100%, 50%, 0.55)`);
      el.style.setProperty('--flicker-dur', `${flickerDur}s`);

      el.innerHTML = `
        <div class="card-content">
          <div class="crt-overlay"></div>
          <div class="crt-scanline"></div>
          <div class="card-year"><span class="card-year-text">${ev.year}</span></div>
          <div class="cli-line" style="animation-delay: 0.1s;"><span class="cli-prompt">FILE_></span> ${ev.name}</div>
          <div class="card-details">
            <div class="card-details-inner">
              <div class="cli-line" style="animation-delay: 0.2s;"><span class="cli-prompt">DATA_></span> <span class="card-desc">${ev.desc}</span></div>
            </div>
          </div>
        </div>
      `;
      
      el.addEventListener('click', () => {
        resetIdleTimer();
        window.scrollTo({ top: i * SCROLL_PER_CARD, behavior: 'smooth' });
      });

      viewport.appendChild(el);
      const maxOffset = Math.sin(i * 1.5) * 80; 
      cards.push({ el, zIndex: i, maxOffset });
    });

    resetIdleTimer();
    requestAnimationFrame(renderLoop);
  }

  function renderLoop(ts) {
    if (isAutoPlaying && !isPausedOnCard) {
      virtualScrollY += AUTO_PLAY_SPEED;
      let activeIndex = Math.round(virtualScrollY / SCROLL_PER_CARD);
      let distToActive = Math.abs((activeIndex * SCROLL_PER_CARD) - virtualScrollY);
      
      if (distToActive <= AUTO_PLAY_SPEED && activeIndex !== currentPausedIndex && activeIndex < events.length) {
        virtualScrollY = activeIndex * SCROLL_PER_CARD; 
        isPausedOnCard = true;
        currentPausedIndex = activeIndex;
        setTimeout(() => { isPausedOnCard = false; }, ON_AIR_PAUSE_MS); 
      }

      if (virtualScrollY >= spacer.offsetHeight - window.innerHeight) { 
        virtualScrollY = 0; currentPausedIndex = -1; 
      }
      window.scrollTo(0, virtualScrollY);
    } else if (!isAutoPlaying) {
      virtualScrollY = window.scrollY || window.pageYOffset || 0; 
    }

    const scrollY = window.scrollY || window.pageYOffset || 0; 
    const pathRatio = scrollY / SCROLL_PER_CARD;
    const tgtX = -(Math.sin(pathRatio * 1.5) * 60); 
    const tgtY = -(scrollY * 0.15); 

    curX += (tgtX - curX) * 0.07;
    curY += (tgtY - curY) * 0.07;

    let minDistance = Math.min(...cards.map(card => Math.abs((card.zIndex * SCROLL_PER_CARD) - scrollY)));
    let powerLevel = 1.0;
    if (minDistance > FOCUS_ZONE) {
      powerLevel = Math.max(0, 1 - ((minDistance - FOCUS_ZONE) / ((SCROLL_PER_CARD / 2) - FOCUS_ZONE)));
    }
    powerOverlay.style.opacity = 0.95 * (1 - powerLevel); 

    // ── Synchronized Sound Loop Modulation ──
    if (isAudioInitialized && audioCtx && audioCtx.state === 'running') {
      let targetNoiseVol = 0;
      let targetOscVol = 0;

      if (minDistance <= FOCUS_ZONE) {
        // Inside Focus Zone: Interpolate noise out and tinnitus in
        let focusFactor = 1 - (minDistance / FOCUS_ZONE); // 1 at dead center, 0 at border
        
        targetNoiseVol = (1 - focusFactor) * 0.05; // Drop noise completely as we hit center
        targetOscVol = focusFactor * 0.018;       // Swell the tinnitus ring up at dead center
      } else {
        // Outside Focus Zone: White noise static swells up between data transitions
        targetNoiseVol = Math.min(1, (minDistance - FOCUS_ZONE) / 150) * 0.14;
        targetOscVol = 0; // Pure dead silence for the oscillator tone
      }

      // Smooth audio ramps locked to the animation thread steps to eliminate digital clicking
      noiseGain.gain.setTargetAtTime(targetNoiseVol, audioCtx.currentTime, 0.04);
      oscGain.gain.setTargetAtTime(targetOscVol, audioCtx.currentTime, 0.05);
    }

    const cycle = (ts % 240000) / 120000;
    const ease = easeInOut(cycle > 1 ? 2 - cycle : cycle);
    const baseDX = -W * DPR * 0.02 * ease;
    const baseDY = -H * DPR * 0.02 * ease;

    ctx.fillStyle = '#02060f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
      const opacity = Math.max(0.05, Math.min(1, star.baseO * star.opFloor + Math.sin(ts * star.twSpd + star.twPhase) * star.twAmp));
      const px = (star.nx * canvas.width) + (curX * DPR) * star.parallax + baseDX * star.drift;
      let py = ((star.ny * canvas.height) + (curY * DPR) * star.parallax + baseDY * star.drift) % canvas.height;
      if (py < 0) py += canvas.height;

      const totalGlow = star.glow * DPR * opacity;
      if (totalGlow > 0.5) { ctx.shadowBlur = totalGlow; ctx.shadowColor = `rgba(${star.cr},${star.cg},${star.cb},${opacity})`; }

      ctx.beginPath();
      ctx.arc(px, py, Math.max(0.4, star.radius * DPR), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${star.cr},${star.cg},${star.cb},${opacity})`;
      ctx.fill();
      if (totalGlow > 0.5) ctx.shadowBlur = 0;
    });

    if (Math.random() < 0.008) shooters.push({ x: Math.random() * canvas.width, y: -canvas.height * 0.15, len: (80 + Math.random() * 140) * DPR, spd: (10 + Math.random() * 14) * DPR, angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1), op: 1.0 });
    for (let i = shooters.length - 1; i >= 0; i--) {
      let ss = shooters[i]; ss.x += Math.cos(ss.angle) * ss.spd; ss.y += Math.sin(ss.angle) * ss.spd; ss.op -= 0.014;
      if (ss.op <= 0 || ss.x > canvas.width || ss.y > canvas.height) { shooters.splice(i, 1); continue; }
      const tx = ss.x - Math.cos(ss.angle) * ss.len, ty = ss.y - Math.sin(ss.angle) * ss.len;
      const g = ctx.createLinearGradient(ss.x, ss.y, tx, ty);
      g.addColorStop(0, `rgba(255,235,210,${ss.op})`); g.addColorStop(1, 'rgba(255,235,210,0)');
      ctx.beginPath(); ctx.moveTo(ss.x, ss.y); ctx.lineTo(tx, ty);
      ctx.strokeStyle = g; ctx.lineWidth = 1.5 * DPR; ctx.lineCap = 'round'; ctx.stroke();
    }

    cards.forEach((card, i) => {
      const absoluteZ = i * SCROLL_PER_CARD;
      const distance = absoluteZ - scrollY;

      let scale = 1, opacity = 0, yOffset = 0, blurAmount = 0;
      if (distance < 0) {
        scale = 1 + (Math.abs(distance) / 500); opacity = 1 - (Math.abs(distance) / 250); 
        yOffset = distance * 1.8; blurAmount = Math.min(20, Math.abs(distance) / 15); 
      } else {
        scale = 1000 / (1000 + distance); opacity = 1 - (distance / 3000); 
        yOffset = distance * 0.15; blurAmount = Math.max(0, (distance - FOCUS_ZONE) / 80);
      }

      let centerFactor = Math.max(0, Math.min(1, (Math.abs(distance) - FOCUS_ZONE) / 200));
      let currentXOffset = card.maxOffset * (centerFactor * centerFactor * (3 - 2 * centerFactor));

      if (Math.abs(distance) <= FOCUS_ZONE) { card.el.classList.add('in-focus'); blurAmount = 0; } 
      else { card.el.classList.remove('in-focus'); }

      if (opacity > 0) {
        card.el.style.display = 'flex';
        card.el.style.transform = `translate3d(calc(-50% + ${currentXOffset}px), calc(-50% + ${yOffset}px), 0) scale(${scale})`;
        card.el.style.opacity = opacity;
        card.el.style.filter = `blur(${blurAmount}px)`;
        card.el.style.zIndex = events.length - Math.floor(Math.abs(distance));
      } else { card.el.style.display = 'none'; }
    });

    requestAnimationFrame(renderLoop);
  }
});
