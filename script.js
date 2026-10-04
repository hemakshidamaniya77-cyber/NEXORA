/**
 * NEXORA — Smart Student Career Intelligence
 * Interactive Futuristic AI Career Command Center Engine
 * 
 * Features:
 * 1. Particle Canvas System (Cyber Constellation)
 * 2. Custom Cursor Glow Tracker
 * 3. Theme Manager (Dark / Light Mode with LocalStorage)
 * 4. Career DNA Interactive Radar Canvas & Archetype Engine
 * 5. Smart Skill Explorer (Dynamic Filtering & Data Binding)
 * 6. Career Match Engine & Interactive Detail Modal
 * 7. Interactive 6-Stage Futuristic Roadmap
 * 8. AI Skill Gap Analyzer (Local Storage Persistence & Deep Matching)
 * 9. SaaS Student Dashboard (Interactive Readiness Meter & Sprint Checklist)
 * 10. Live Activity Notification Stream (Simulated Realtime Ticker)
 * 11. 3D Micro-Tilt Card Physics
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all interactive systems
  initThemeManager();
  initParticleCanvas();
  initCursorGlow();
  initNavbarScroll();
  initCareerDNA();
  initSkillExplorer();
  initCareerMatchEngine();
  initInteractiveRoadmap();
  initSkillGapAnalyzer();
  initStudentDashboard();
  initLiveActivityTicker();
  initCardTiltPhysics();
  initViewportCounters();
});

/* ==========================================================================
   1. THEME MANAGER (Dark / Light Mode with LocalStorage)
   ========================================================================== */
function initThemeManager() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // Retrieve saved preference or default to dark
  const savedTheme = localStorage.getItem('nexora_theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Futuristic Dark' : 'Clean Modern Light'} mode`);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('nexora_theme', theme);
    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.className = 'bi bi-moon-stars-fill';
      } else {
        themeIcon.className = 'bi bi-sun-fill';
      }
    }
    // Redraw DNA Radar to adjust stroke contrasts
    if (window.redrawRadar) {
      window.redrawRadar();
    }
  }
}

/* ==========================================================================
   2. HIGH-TECH CYBER NEURAL MATRIX & LIVING BACKGROUND ENGINE
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Track cursor for magnetic forcefield
  const mouse = {
    x: width / 2,
    y: height / 2,
    radius: 160,
    active: false
  };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  // Interactive Shockwave Ripples on Click
  const shockwaves = [];
  window.addEventListener('pointerdown', (e) => {
    shockwaves.push({
      x: e.clientX,
      y: e.clientY,
      radius: 5,
      maxRadius: Math.min(width, height) * 0.45,
      speed: 8,
      alpha: 0.9,
      color: Math.random() > 0.5 ? '#00F2FE' : '#8B5CF6'
    });
  });

  // 1. Core Constellation Nodes
  const nodeCount = Math.min(Math.floor(window.innerWidth / 18), 65);
  const nodes = [];

  class CyberNode {
    constructor() {
      this.init();
    }
    init() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.originX = this.x;
      this.originY = this.y;
      this.vx = (Math.random() - 0.5) * 0.55;
      this.vy = (Math.random() - 0.5) * 0.55;
      this.radius = Math.random() * 2.2 + 1;
      this.baseAlpha = Math.random() * 0.45 + 0.35;
      this.pulsePhase = Math.random() * Math.PI * 2;
      this.pulseSpeed = 0.03 + Math.random() * 0.03;
      this.isAccent = Math.random() > 0.65;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx = -this.vx;
      if (this.y < 0 || this.y > height) this.vy = -this.vy;

      this.pulsePhase += this.pulseSpeed;

      // Magnetic Repulsion from cursor
      if (mouse.active) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 3.5;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force;
          this.y -= Math.sin(angle) * force;
        }
      }
    }
    draw(isDark) {
      const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
      const alpha = Math.min(this.baseAlpha * pulse, 1);

      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

      if (isDark) {
        ctx.fillStyle = this.isAccent
          ? `rgba(0, 242, 254, ${alpha})`
          : `rgba(139, 92, 246, ${alpha * 0.85})`;
        ctx.shadowColor = this.isAccent ? '#00F2FE' : '#8B5CF6';
        ctx.shadowBlur = 8 * pulse;
      } else {
        ctx.fillStyle = this.isAccent
          ? `rgba(2, 132, 199, ${alpha})`
          : `rgba(99, 102, 241, ${alpha * 0.85})`;
        ctx.shadowColor = '#0284C7';
        ctx.shadowBlur = 4;
      }

      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < nodeCount; i++) {
    nodes.push(new CyberNode());
  }

  // 2. High-Speed Energy Packets (Data Pulses along Network Lines)
  const packets = [];
  const maxPackets = 14;

  class DataPacket {
    constructor(nodeA, nodeB) {
      this.nodeA = nodeA;
      this.nodeB = nodeB;
      this.progress = 0;
      this.speed = 0.015 + Math.random() * 0.025;
      this.color = Math.random() > 0.5 ? '#00F2FE' : '#34D399';
    }
    update() {
      this.progress += this.speed;
    }
    draw() {
      const curX = this.nodeA.x + (this.nodeB.x - this.nodeA.x) * this.progress;
      const curY = this.nodeA.y + (this.nodeB.y - this.nodeA.y) * this.progress;

      ctx.save();
      ctx.beginPath();
      ctx.arc(curX, curY, 2.4, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.restore();
    }
  }

  // 3. Floating Holographic Tech Glyphs
  const glyphChars = ['✦', '01', 'λ', '▲', '⬡', '{ }', '//', 'AI', '⚡', '◈'];
  const glyphs = [];
  const glyphCount = 18;

  for (let i = 0; i < glyphCount; i++) {
    glyphs.push({
      x: Math.random() * width,
      y: Math.random() * height,
      char: glyphChars[Math.floor(Math.random() * glyphChars.length)],
      size: Math.floor(Math.random() * 8) + 11,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -0.25 - Math.random() * 0.35,
      alpha: Math.random() * 0.22 + 0.1,
      angle: Math.random() * Math.PI * 2,
      vAngle: (Math.random() - 0.5) * 0.015
    });
  }

  // 4. Cyber Comets / Shooting Data Meteors
  const comets = [];
  let nextCometTime = Date.now() + 1500;

  function spawnComet() {
    const startFromTop = Math.random() > 0.4;
    comets.push({
      x: startFromTop ? Math.random() * width : 0,
      y: startFromTop ? 0 : Math.random() * (height * 0.5),
      length: 90 + Math.random() * 90,
      speed: 12 + Math.random() * 8,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
      alpha: 1,
      color: Math.random() > 0.5 ? '#00F2FE' : '#A78BFA'
    });
    nextCometTime = Date.now() + 2500 + Math.random() * 3000;
  }

  // Main 60FPS Render Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

    // A. Draw Floating Holographic Glyphs
    ctx.font = '600 12px JetBrains Mono, monospace';
    glyphs.forEach(g => {
      g.x += g.vx;
      g.y += g.vy;
      g.angle += g.vAngle;

      if (g.y < -20) {
        g.y = height + 20;
        g.x = Math.random() * width;
      }
      if (g.x < -20) g.x = width + 20;
      if (g.x > width + 20) g.x = -20;

      ctx.save();
      ctx.translate(g.x, g.y);
      ctx.rotate(g.angle);
      ctx.fillStyle = isDark
        ? `rgba(0, 242, 254, ${g.alpha})`
        : `rgba(79, 70, 229, ${g.alpha * 0.8})`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(g.char, 0, 0);
      ctx.restore();
    });

    // B. Draw Nodes & Constellation Lines
    const maxLineDist = 135;
    const activePairs = [];

    for (let i = 0; i < nodes.length; i++) {
      nodes[i].update();
      nodes[i].draw(isDark);

      // Connect to other nearby nodes
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxLineDist) {
          activePairs.push([nodes[i], nodes[j]]);
          const lineAlpha = (1 - dist / maxLineDist) * (isDark ? 0.22 : 0.12);

          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);

          // Subtle gradient on connection line
          const lineGrad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
          if (isDark) {
            lineGrad.addColorStop(0, `rgba(0, 242, 254, ${lineAlpha})`);
            lineGrad.addColorStop(1, `rgba(139, 92, 246, ${lineAlpha * 0.8})`);
          } else {
            lineGrad.addColorStop(0, `rgba(2, 132, 199, ${lineAlpha})`);
            lineGrad.addColorStop(1, `rgba(99, 102, 241, ${lineAlpha * 0.8})`);
          }

          ctx.strokeStyle = lineGrad;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }

      // Connect cursor to nearby nodes with elastic neon beam
      if (mouse.active) {
        const mdx = mouse.x - nodes[i].x;
        const mdy = mouse.y - nodes[i].y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 160) {
          const mAlpha = (1 - mDist / 160) * (isDark ? 0.45 : 0.25);
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${mAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
    }

    // C. Manage & Draw Data Packets along Active Network Lines
    if (packets.length < maxPackets && activePairs.length > 0 && Math.random() < 0.08) {
      const randomPair = activePairs[Math.floor(Math.random() * activePairs.length)];
      packets.push(new DataPacket(randomPair[0], randomPair[1]));
    }

    for (let p = packets.length - 1; p >= 0; p--) {
      packets[p].update();
      packets[p].draw();
      if (packets[p].progress >= 1) {
        packets.splice(p, 1);
      }
    }

    // D. Spawn & Draw Cyber Shooting Comets
    if (Date.now() > nextCometTime) {
      spawnComet();
    }

    for (let c = comets.length - 1; c >= 0; c--) {
      const comet = comets[c];
      comet.x += Math.cos(comet.angle) * comet.speed;
      comet.y += Math.sin(comet.angle) * comet.speed;
      comet.alpha -= 0.012;

      if (comet.alpha <= 0 || comet.x > width + 200 || comet.y > height + 200) {
        comets.splice(c, 1);
        continue;
      }

      // Draw Comet Head and Gradient Trail
      const tailX = comet.x - Math.cos(comet.angle) * comet.length;
      const tailY = comet.y - Math.sin(comet.angle) * comet.length;

      const cometGrad = ctx.createLinearGradient(comet.x, comet.y, tailX, tailY);
      cometGrad.addColorStop(0, comet.color);
      cometGrad.addColorStop(1, 'transparent');

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(comet.x, comet.y);
      ctx.lineTo(tailX, tailY);
      ctx.strokeStyle = cometGrad;
      ctx.lineWidth = 2.2;
      ctx.shadowColor = comet.color;
      ctx.shadowBlur = 14;
      ctx.stroke();

      // Comet Head Flare
      ctx.beginPath();
      ctx.arc(comet.x, comet.y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.restore();
    }

    // E. Draw Expanding Cyber Shockwaves
    for (let s = shockwaves.length - 1; s >= 0; s--) {
      const sw = shockwaves[s];
      sw.radius += sw.speed;
      sw.alpha -= 0.02;

      if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
        shockwaves.splice(s, 1);
        continue;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 242, 254, ${sw.alpha})`;
      ctx.lineWidth = 2;
      ctx.shadowColor = sw.color;
      ctx.shadowBlur = 15;
      ctx.stroke();
      ctx.restore();
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   3. CUSTOM CURSOR GLOW TRACKER
   ========================================================================== */
function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  if (!glow) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth lerp follower
  function updateGlow() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    glow.style.transform = `translate3d(${currentX - 225}px, ${currentY - 225}px, 0)`;
    requestAnimationFrame(updateGlow);
  }
  updateGlow();
}

/* ==========================================================================
   4. STICKY NAVBAR SCROLL BEHAVIOR
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.querySelector('.nexora-navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   5. CAREER DNA INTERACTIVE RADAR CANVAS
   ========================================================================== */
function initCareerDNA() {
  const canvas = document.getElementById('dna-radar-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // DNA trait dimensions
  const traits = [
    { key: 'problem_solving', name: 'Problem Solving', value: 90 },
    { key: 'creativity', name: 'Creativity', value: 85 },
    { key: 'communication', name: 'Communication', value: 78 },
    { key: 'technical', name: 'Technical Thinking', value: 92 },
    { key: 'leadership', name: 'Leadership', value: 74 },
    { key: 'adaptability', name: 'Adaptability', value: 88 }
  ];

  // Set crisp high DPI canvas
  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Bind sliders & value labels
  traits.forEach(t => {
    const slider = document.getElementById(`slider-${t.key}`);
    const label = document.getElementById(`val-${t.key}`);
    if (slider && label) {
      slider.value = t.value;
      label.textContent = `${t.value}%`;

      slider.addEventListener('input', (e) => {
        t.value = parseInt(e.target.value, 10);
        label.textContent = `${t.value}%`;
        drawRadar();
        updateArchetype();
      });
    }
  });

  // Preset archetypes
  const presetBtns = document.querySelectorAll('.dna-preset-btn');
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const presetType = btn.getAttribute('data-preset');

      if (presetType === 'architect') {
        setValues({ problem_solving: 94, creativity: 75, communication: 70, technical: 96, leadership: 80, adaptability: 85 });
      } else if (presetType === 'innovator') {
        setValues({ problem_solving: 88, creativity: 95, communication: 82, technical: 84, leadership: 78, adaptability: 92 });
      } else if (presetType === 'strategist') {
        setValues({ problem_solving: 90, creativity: 80, communication: 92, technical: 82, leadership: 90, adaptability: 86 });
      } else { // balanced
        setValues({ problem_solving: 85, creativity: 85, communication: 85, technical: 85, leadership: 85, adaptability: 85 });
      }
    });
  });

  function setValues(valObj) {
    traits.forEach(t => {
      if (valObj[t.key] !== undefined) {
        t.value = valObj[t.key];
        const slider = document.getElementById(`slider-${t.key}`);
        const label = document.getElementById(`val-${t.key}`);
        if (slider) slider.value = t.value;
        if (label) label.textContent = `${t.value}%`;
      }
    });
    drawRadar();
    updateArchetype();
  }

  function updateArchetype() {
    const tech = traits.find(t => t.key === 'technical').value;
    const prob = traits.find(t => t.key === 'problem_solving').value;
    const creat = traits.find(t => t.key === 'creativity').value;
    const lead = traits.find(t => t.key === 'leadership').value;
    const comm = traits.find(t => t.key === 'communication').value;

    const nameEl = document.getElementById('archetype-display-name');
    const descEl = document.getElementById('archetype-display-desc');
    if (!nameEl) return;

    if (tech >= 90 && prob >= 88) {
      nameEl.textContent = 'Visionary Systems Architect';
      if (descEl) descEl.textContent = 'High technical precision with algorithmic problem-solving excellence. Ideal for Distributed Systems, AI Engineering & Core Tech.';
    } else if (creat >= 88 && tech >= 80) {
      nameEl.textContent = 'Full-Stack Product Innovator';
      if (descEl) descEl.textContent = 'Unique fusion of creative intuition and full-lifecycle code craft. Excels in Web3, Modern Web Apps & Interactive Product UX.';
    } else if (lead >= 85 && comm >= 85) {
      nameEl.textContent = 'Engineering Team Lead & Strategist';
      if (descEl) descEl.textContent = 'Strong technical acumen augmented by executive leadership and cross-team execution velocity.';
    } else {
      nameEl.textContent = 'Algorithmic Problem Solver';
      if (descEl) descEl.textContent = 'High adaptability with systematic analytical reasoning. Excellent across Machine Learning and Complex Data Science.';
    }
  }

  function drawRadar() {
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    const cx = w / 2;
    const cy = h / 2;
    const maxRadius = Math.min(w, h) * 0.38;
    const numPoints = traits.length;
    const angleStep = (Math.PI * 2) / numPoints;
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

    ctx.clearRect(0, 0, w, h);

    // 1. Draw Background Concentric Hexagons
    const levels = 4;
    for (let level = 1; level <= levels; level++) {
      const r = (maxRadius / levels) * level;
      ctx.beginPath();
      for (let i = 0; i < numPoints; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // 2. Draw Axis Lines
    for (let i = 0; i < numPoints; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = cx + Math.cos(angle) * maxRadius;
      const y = cy + Math.sin(angle) * maxRadius;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(x, y);
      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Axis text labels
      const labelDist = maxRadius + 22;
      const lx = cx + Math.cos(angle) * labelDist;
      const ly = cy + Math.sin(angle) * labelDist;
      ctx.fillStyle = isDark ? '#94A3B8' : '#475569';
      ctx.font = '600 11px Plus Jakarta Sans, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(traits[i].name, lx, ly);
    }

    // 3. Draw Polygon Data Path
    ctx.beginPath();
    for (let i = 0; i < numPoints; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const r = (traits[i].value / 100) * maxRadius;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();

    // Polygon Gradient Fill
    const gradient = ctx.createRadialGradient(cx, cy, 10, cx, cy, maxRadius);
    gradient.addColorStop(0, 'rgba(0, 242, 254, 0.45)');
    gradient.addColorStop(0.7, 'rgba(139, 92, 246, 0.35)');
    gradient.addColorStop(1, 'rgba(244, 63, 94, 0.2)');
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.strokeStyle = '#00F2FE';
    ctx.lineWidth = 2.5;
    ctx.shadowColor = 'rgba(0, 242, 254, 0.6)';
    ctx.shadowBlur = 12;
    ctx.stroke();
    ctx.shadowBlur = 0; // reset

    // 4. Draw Vertex Dots
    for (let i = 0; i < numPoints; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const r = (traits[i].value / 100) * maxRadius;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;

      ctx.beginPath();
      ctx.arc(x, y, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.strokeStyle = '#8B5CF6';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  window.redrawRadar = drawRadar;
  drawRadar();
  updateArchetype();
}

/* ==========================================================================
   6. SMART SKILL EXPLORER (Dynamic Filter & Data Binding)
   ========================================================================== */
const skillsData = [
  {
    name: 'Python',
    category: 'Programming',
    icon: 'bi-filetype-py',
    demand: 'VERY HIGH',
    demandClass: 'very-high',
    level: 'Intermediate',
    relevance: 'AI, ML, Automation & Backend',
    progress: 92,
    desc: 'The lingua franca of modern artificial intelligence, data manipulation, and web backend architecture.'
  },
  {
    name: 'TypeScript & React',
    category: 'Web Development',
    icon: 'bi-filetype-tsx',
    demand: 'VERY HIGH',
    demandClass: 'very-high',
    level: 'Advanced',
    relevance: 'Frontend Engineering & Full Stack',
    progress: 88,
    desc: 'Component architecture, typed state pipelines, hooks, and scalable enterprise web apps.'
  },
  {
    name: 'PyTorch & Deep Learning',
    category: 'AI & ML',
    icon: 'bi-cpu',
    demand: 'VERY HIGH',
    demandClass: 'very-high',
    level: 'Advanced',
    relevance: 'Neural Networks & LLMs',
    progress: 76,
    desc: 'Model training pipelines, transformer architectures, backpropagation, and GPU compute optimization.'
  },
  {
    name: 'Cloud Computing (AWS/GCP)',
    category: 'Cloud',
    icon: 'bi-clouds',
    demand: 'HIGH',
    demandClass: 'high',
    level: 'Intermediate',
    relevance: 'DevOps & Scalable Infra',
    progress: 82,
    desc: 'Serverless functions, container orchestration with Kubernetes, IAM policies, and VPC networking.'
  },
  {
    name: 'Data Engineering & SQL',
    category: 'Data Science',
    icon: 'bi-database-check',
    demand: 'VERY HIGH',
    demandClass: 'very-high',
    level: 'Intermediate',
    relevance: 'Big Data & Analytics',
    progress: 89,
    desc: 'Relational data modeling, window functions, query optimization, and ETL streaming pipelines.'
  },
  {
    name: 'Cyber Security & Network Defense',
    category: 'Cyber Security',
    icon: 'bi-shield-lock',
    demand: 'HIGH',
    demandClass: 'high',
    level: 'Advanced',
    relevance: 'Threat Hunting & InfoSec',
    progress: 70,
    desc: 'Penetration testing fundamentals, cryptographic primitives, zero-trust protocols, and audit logs.'
  },
  {
    name: 'UI/UX & Design Systems',
    category: 'UI/UX',
    icon: 'bi-brush',
    demand: 'HIGH',
    demandClass: 'high',
    level: 'Intermediate',
    relevance: 'Product Strategy & Interaction',
    progress: 85,
    desc: 'Design token architectures, Figma component variants, micro-interaction ergonomics, and accessibility.'
  },
  {
    name: 'Docker & Containerization',
    category: 'Cloud',
    icon: 'bi-box-seam',
    demand: 'HIGH',
    demandClass: 'high',
    level: 'Intermediate',
    relevance: 'CI/CD & Microservices',
    progress: 80,
    desc: 'Multi-stage container builds, microservices composition, volume mapping, and reproducible dev environments.'
  },
  {
    name: 'GenAI & LLM Integration',
    category: 'AI & ML',
    icon: 'bi-magic',
    demand: 'VERY HIGH',
    demandClass: 'very-high',
    level: 'Beginner-Friendly',
    relevance: 'Agents & Prompt Engineering',
    progress: 94,
    desc: 'RAG architectures, vector embeddings, function calling agents, and generative API integration.'
  }
];

function initSkillExplorer() {
  const container = document.getElementById('skills-card-container');
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  if (!container) return;

  function renderSkills(category = 'All') {
    container.innerHTML = '';
    const filtered = category === 'All' 
      ? skillsData 
      : skillsData.filter(s => s.category === category);

    filtered.forEach((skill, idx) => {
      const card = document.createElement('div');
      card.className = 'skill-card';
      card.style.animation = `fadeIn 0.35s ease forwards ${idx * 0.05}s`;
      card.innerHTML = `
        <div>
          <div class="skill-card-top">
            <div class="skill-icon-wrapper">
              <i class="bi ${skill.icon}"></i>
            </div>
            <span class="skill-badge-demand ${skill.demandClass}">${skill.demand} DEMAND</span>
          </div>
          <div class="skill-card-body">
            <h4>${skill.name}</h4>
            <div class="skill-meta">
              <span>${skill.category}</span>
              <span>·</span>
              <span>${skill.level}</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1.25rem;">
              ${skill.desc}
            </p>
          </div>
        </div>

        <div>
          <div class="skill-progress-section">
            <div class="skill-progress-meta">
              <span style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600;">Relevance</span>
              <span class="tabular-nums" style="font-size: 0.82rem; font-weight: 700; color: var(--accent-cyan);">${skill.progress}%</span>
            </div>
            <div class="skill-progress-bar">
              <div class="skill-progress-fill" style="width: ${skill.progress}%"></div>
            </div>
          </div>

          <div class="skill-card-footer">
            <span style="font-size: 0.76rem; color: var(--text-muted);">${skill.relevance}</span>
            <button class="btn-add-skill" data-skill="${skill.name}" title="Send to Gap Analyzer">
              <i class="bi bi-plus-circle"></i> Add to My Skills
            </button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

    // Attach listeners to "Add to My Skills"
    container.querySelectorAll('.btn-add-skill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const skillName = btn.getAttribute('data-skill');
        addSkillToAnalyzer(skillName);
      });
    });
  }

  // Filter clicks
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      renderSkills(cat);
    });
  });

  renderSkills('All');
}

function addSkillToAnalyzer(skillName) {
  const currentSkillsInput = document.getElementById('current-skills-input');
  if (currentSkillsInput) {
    const skillsList = currentSkillsInput.value
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    if (!skillsList.map(s => s.toLowerCase()).includes(skillName.toLowerCase())) {
      skillsList.push(skillName);
      currentSkillsInput.value = skillsList.join(', ');
      localStorage.setItem('nexora_skills_input', currentSkillsInput.value);
      showToast(`Added "${skillName}" to your Skill Gap Analyzer!`);
    } else {
      showToast(`"${skillName}" is already in your skills list.`);
    }
  }
}

/* ==========================================================================
   7. CAREER MATCH ENGINE & DETAIL MODAL
   ========================================================================== */
const careerProfiles = {
  'ai-engineer': {
    title: 'AI / Machine Learning Engineer',
    match: 96,
    salary: '$128,000 – $185,000 / yr',
    growth: '+34% next 5 yrs',
    summary: 'Design, optimize, and deploy large language models, computer vision systems, and automated cognitive decision engines at enterprise scale.',
    skills: ['Python', 'PyTorch', 'TensorFlow', 'LLM APIs', 'Vector DBs', 'Docker', 'CUDA/GPU'],
    dayInLife: [
      'Experiment with fine-tuning open-weights models (Llama 3 / Mistral) using LoRA/QLoRA.',
      'Construct high-throughput retrieval augmented generation (RAG) pipelines with hybrid search.',
      'Deploy low-latency inference endpoints backed by TensorRT and Triton inference servers.'
    ],
    recommendedCourses: [
      'DeepLearning.AI: Deep Learning Specialization',
      'Stanford CS229: Machine Learning',
      'Fast.ai: Practical Deep Learning for Coders'
    ]
  },
  'fullstack-dev': {
    title: 'Full Stack Systems Engineer',
    match: 92,
    salary: '$110,000 – $165,000 / yr',
    growth: '+26% next 5 yrs',
    summary: 'Architect end-to-end cloud platforms with reactive UI client interfaces and robust, scalable backend APIs.',
    skills: ['TypeScript', 'React / Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'GraphQL', 'Tailwind CSS'],
    dayInLife: [
      'Design reactive frontend component architectures with high performance and accessibility.',
      'Develop resilient microservices with structured database transactions and indexing.',
      'Set up end-to-end CI/CD test automation pipelines and preview environments.'
    ],
    recommendedCourses: [
      'Full Stack Open (University of Helsinki)',
      'Designing Data-Intensive Applications (Kleppmann)',
      'Epic React by Kent C. Dodds'
    ]
  },
  'data-scientist': {
    title: 'Data Scientist & Analytics Architect',
    match: 89,
    salary: '$115,000 – $170,000 / yr',
    growth: '+28% next 5 yrs',
    summary: 'Extract mathematical signals, predictive behavior patterns, and executive actionable intelligence from multi-terabyte datasets.',
    skills: ['Python', 'SQL (Advanced)', 'Pandas/NumPy', 'Scikit-Learn', 'Statistical Inference', 'Tableau', 'Spark'],
    dayInLife: [
      'Formulate probabilistic hypothesis tests and evaluate statistical significance in AB trials.',
      'Build feature engineering pipelines and model validation benchmarks.',
      'Deliver executive storytelling dashboards mapping metrics to commercial revenue outcomes.'
    ],
    recommendedCourses: [
      'MIT 6.041: Probabilistic Systems Analysis',
      'Google Advanced Data Analytics Certificate',
      'Kaggle Competitions & Feature Engineering Modules'
    ]
  },
  'cyber-analyst': {
    title: 'Cyber Security & Zero Trust Analyst',
    match: 84,
    salary: '$105,000 – $155,000 / yr',
    growth: '+32% next 5 yrs',
    summary: 'Safeguard distributed digital assets through threat modeling, cryptographic enforcement, vulnerability penetration, and automated incident triage.',
    skills: ['Network Protocols (TCP/IP)', 'Linux Kernel', 'SIEM / Splunk', 'Penetration Testing', 'Cryptography', 'Python Scripting'],
    dayInLife: [
      'Monitor distributed SIEM telemetry feeds for anomalous lateral authentication attempts.',
      'Conduct automated static and dynamic code vulnerability scans on microservice repos.',
      'Rehearse Red Team / Blue Team adversarial cyber scenarios and write remediation playbooks.'
    ],
    recommendedCourses: [
      'CompTIA Security+ / CySA+',
      'Offensive Security Certified Professional (OSCP)',
      'TryHackMe & Hack The Box Enterprise Security Labs'
    ]
  },
  'cloud-devops': {
    title: 'Cloud & Infrastructure Architect',
    match: 87,
    salary: '$120,000 – $175,000 / yr',
    growth: '+29% next 5 yrs',
    summary: 'Automate multi-region resilient infrastructure provisioning with Infrastructure-as-Code, Kubernetes clusters, and zero-downtime deployment topologies.',
    skills: ['AWS / GCP / Azure', 'Terraform', 'Kubernetes', 'Docker', 'CI/CD (GitHub Actions)', 'Linux / Bash', 'Prometheus / Grafana'],
    dayInLife: [
      'Author declarative Terraform state definitions for autoscaling container clusters.',
      'Implement distributed observability metrics with Prometheus alerts and OpenTelemetry traces.',
      'Optimize multi-tenant cloud cost governance and latency routing.'
    ],
    recommendedCourses: [
      'AWS Certified Solutions Architect – Associate',
      'Kubernetes Certified Administrator (CKA)',
      'HashiCorp Certified: Terraform Associate'
    ]
  },
  'uiux-product': {
    title: 'UI/UX & Product Design Engineer',
    match: 85,
    salary: '$100,000 – $150,000 / yr',
    growth: '+22% next 5 yrs',
    summary: 'Design intuitive, world-class user experiences and translate complex technical architectures into delightful, frictionless digital products.',
    skills: ['Figma Prototyping', 'Design Systems', 'User Research', 'HTML/CSS/JS', 'Interaction Design', 'Usability Testing'],
    dayInLife: [
      'Conduct qualitative student user testing sessions to uncover cognitive friction points.',
      'Maintain design tokens and Figma component libraries synchronized with code repositories.',
      'Prototype micro-interactions, motion curves, and fluid responsive views.'
    ],
    recommendedCourses: [
      'Google UX Design Professional Certificate',
      'Refactoring UI by Adam Wathan & Steve Schoger',
      'Interaction Design Foundation: Human-Computer Interaction'
    ]
  }
};

function initCareerMatchEngine() {
  const modalEl = document.getElementById('careerDetailModal');
  if (!modalEl) return;

  const modalTitle = document.getElementById('modalCareerTitle');
  const modalMatch = document.getElementById('modalCareerMatch');
  const modalSalary = document.getElementById('modalCareerSalary');
  const modalGrowth = document.getElementById('modalCareerGrowth');
  const modalSummary = document.getElementById('modalCareerSummary');
  const modalSkills = document.getElementById('modalCareerSkills');
  const modalDayList = document.getElementById('modalCareerDay');
  const modalCourses = document.getElementById('modalCareerCourses');
  const setTargetBtn = document.getElementById('btnSetAsTargetCareer');

  let activeCareerKey = '';

  document.querySelectorAll('.btn-explore-career').forEach(btn => {
    btn.addEventListener('click', () => {
      const careerKey = btn.getAttribute('data-career');
      const data = careerProfiles[careerKey];
      if (!data) return;

      activeCareerKey = careerKey;

      if (modalTitle) modalTitle.textContent = data.title;
      if (modalMatch) modalMatch.textContent = `${data.match}% MATCH`;
      if (modalSalary) modalSalary.textContent = data.salary;
      if (modalGrowth) modalGrowth.textContent = data.growth;
      if (modalSummary) modalSummary.textContent = data.summary;

      if (modalSkills) {
        modalSkills.innerHTML = data.skills
          .map(s => `<span class="career-skill-tag" style="background: rgba(0, 242, 254, 0.1); border-color: rgba(0, 242, 254, 0.3); color: var(--text-primary);">${s}</span>`)
          .join('');
      }

      if (modalDayList) {
        modalDayList.innerHTML = data.dayInLife
          .map(item => `<li><i class="bi bi-arrow-right-circle-fill"></i> <span>${item}</span></li>`)
          .join('');
      }

      if (modalCourses) {
        modalCourses.innerHTML = data.recommendedCourses
          .map(item => `<li><i class="bi bi-mortarboard-fill"></i> <span>${item}</span></li>`)
          .join('');
      }

      // Open Bootstrap modal
      const bsModal = new bootstrap.Modal(modalEl);
      bsModal.show();
    });
  });

  if (setTargetBtn) {
    setTargetBtn.addEventListener('click', () => {
      const data = careerProfiles[activeCareerKey];
      if (!data) return;

      const targetSelect = document.getElementById('target-career-select');
      if (targetSelect) {
        // Select matching option
        for (let i = 0; i < targetSelect.options.length; i++) {
          if (targetSelect.options[i].text.toLowerCase().includes(data.title.toLowerCase().split(' ')[0])) {
            targetSelect.selectedIndex = i;
            break;
          }
        }
        localStorage.setItem('nexora_target_career', targetSelect.value);
      }

      // Close modal
      const modalInstance = bootstrap.Modal.getInstance(modalEl);
      if (modalInstance) modalInstance.hide();

      // Smooth scroll to analyzer and run
      const analyzerSection = document.getElementById('gap-analyzer');
      if (analyzerSection) {
        analyzerSection.scrollIntoView({ behavior: 'smooth' });
      }

      showToast(`Selected "${data.title}" as Target Career!`);
      setTimeout(() => {
        runSkillGapAnalysis();
      }, 500);
    });
  }
}

/* ==========================================================================
   8. INTERACTIVE 6-STAGE ROADMAP
   ========================================================================== */
const roadmapStages = [
  {
    step: '01',
    name: 'START',
    title: 'Self-Discovery & Orientation',
    icon: 'bi-compass',
    skills: ['Computational Logic Basics', 'Git & GitHub Fundamentals', 'Command Line Navigation', 'Career Archetype Profiling'],
    projects: ['Personal Developer Setup with dotfiles', 'Markdown Technical Journal & Goal Tracker'],
    practice: ['Daily LeetCode Easy Logic (1 problem/day)', 'CS50 Lecture 0 & 1 Review'],
    milestone: 'Verified Developer Environment & Career Archetype Report'
  },
  {
    step: '02',
    name: 'FOUNDATION',
    title: 'Core Computer Science',
    icon: 'bi-cpu',
    skills: ['Data Structures (Arrays, Linked Lists, Trees)', 'Object-Oriented Programming (Java/Python)', 'Big-O Complexity Analysis'],
    projects: ['Custom Memory Cache implementation', 'Text-Based Interactive Algorithm Simulator'],
    practice: ['30 LeetCode Fundamentals (Binary Search, HashMaps)', 'Stanford CS106B Problem Sets'],
    milestone: 'CS Fundamentals Mastery Certificate & Data Structure Benchmarking Repo'
  },
  {
    step: '03',
    name: 'SKILL BUILDING',
    title: 'Modern Specialized Frameworks',
    icon: 'bi-code-slash',
    skills: ['Modern TypeScript & React Ecosystem', 'RESTful & GraphQL API Design', 'PostgreSQL / Relational Data Modeling'],
    projects: ['Multi-tenant SaaS Dashboard with Authentication', 'Real-Time WebSocket Collaborative Canvas'],
    practice: ['Frontend Mentor Advanced Challenges', 'Building API endpoints with rate limiting & JWT verification'],
    milestone: 'Two Full-Stack Repositories with 90%+ Unit Test Coverage'
  },
  {
    step: '04',
    name: 'PROJECTS',
    title: 'Production-Grade Deployments',
    icon: 'bi-kanban',
    skills: ['Docker Multi-Stage Builds', 'Cloud Deployment (AWS/GCP)', 'CI/CD Pipeline Automation', 'Observability & Monitoring'],
    projects: ['AI-Augmented Student Productivity System (Live on Cloud)', 'Distributed Queue Task Worker with Redis'],
    practice: ['Simulate production outages & zero-downtime rollbacks', 'Conduct peer code reviews via Pull Requests'],
    milestone: 'Public Live URL with Custom Domain & Automated Continuous Deployment'
  },
  {
    step: '05',
    name: 'INTERNSHIP',
    title: 'Industry Team Collaboration',
    icon: 'bi-people',
    skills: ['Agile / Scrum Sprint Cadence', 'Cross-Functional Communication', 'Enterprise Codebase Navigation', 'RFC & Technical Specs'],
    projects: ['Production Bug Remediation in High-Scale Service', 'Feature Branch shipped to Staging and Production'],
    practice: ['Daily Standup updates with clear blocker communication', 'Reviewing senior engineer PRs for architecture insights'],
    milestone: 'Verified Industry Recommendation Letter & Production Git Commits'
  },
  {
    step: '06',
    name: 'JOB READY',
    title: 'Offer Negotiation & System Design',
    icon: 'bi-award',
    skills: ['High-Level System Design (Microservices, Caching)', 'Behavioral STAR Interview Storytelling', 'Technical Compensation Negotiation'],
    projects: ['Design document for Global Video Streaming Architecture', 'Polished Portfolio Site with Case Studies'],
    practice: ['Pramp & interviewing.io Mock System Design Sessions', 'Blind 75 Algorithm Review Sprint'],
    milestone: 'First Full-Time Technical Offer Letter Secured 🚀'
  }
];

function initInteractiveRoadmap() {
  const nodes = document.querySelectorAll('.roadmap-stage-node');
  const lineProgress = document.getElementById('roadmap-line-progress');
  const revealContainer = document.getElementById('stage-reveal-container');

  if (!nodes.length || !revealContainer) return;

  function renderStage(index) {
    const data = roadmapStages[index];
    if (!data) return;

    // Update active node styling
    nodes.forEach((node, i) => {
      if (i === index) node.classList.add('active');
      else node.classList.remove('active');
    });

    // Update connecting line width percentage
    if (lineProgress) {
      const percentage = (index / (roadmapStages.length - 1)) * 100;
      lineProgress.style.width = `${Math.max(percentage, 15)}%`;
    }

    // Render detailed reveal card
    revealContainer.innerHTML = `
      <div class="stage-reveal-card">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 1.25rem;">
          <div>
            <span class="section-kicker">STAGE ${data.step} · ${data.name}</span>
            <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin: 0;">${data.title}</h3>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; background: rgba(0, 242, 254, 0.1); border: 1px solid var(--border-glow-cyan); padding: 0.45rem 1rem; border-radius: var(--radius-full);">
            <i class="bi bi-clock-history" style="color: var(--accent-cyan);"></i>
            <span style="font-size: 0.82rem; font-weight: 700; color: var(--accent-cyan); font-family: var(--font-mono);">Recommended Timeline: 6–8 Weeks</span>
          </div>
        </div>

        <div class="stage-detail-grid">
          <div class="stage-detail-col">
            <h5><i class="bi bi-lightbulb-fill"></i> Skills to Master</h5>
            <ul class="stage-checklist">
              ${data.skills.map(s => `<li><i class="bi bi-check2-circle"></i> <span>${s}</span></li>`).join('')}
            </ul>
          </div>

          <div class="stage-detail-col">
            <h5><i class="bi bi-rocket-takeoff-fill"></i> Projects to Build</h5>
            <ul class="stage-checklist">
              ${data.projects.map(p => `<li><i class="bi bi-terminal"></i> <span>${p}</span></li>`).join('')}
            </ul>
          </div>

          <div class="stage-detail-col">
            <h5><i class="bi bi-journal-code"></i> Recommended Practice</h5>
            <ul class="stage-checklist">
              ${data.practice.map(pr => `<li><i class="bi bi-arrow-repeat"></i> <span>${pr}</span></li>`).join('')}
            </ul>
          </div>

          <div class="stage-detail-col">
            <h5><i class="bi bi-trophy-fill"></i> Career Milestone</h5>
            <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem;">
              <span style="font-size: 0.76rem; text-transform: uppercase; color: var(--accent-emerald); font-weight: 700;">Verified Verification</span>
              <p style="font-size: 0.88rem; color: var(--text-primary); font-weight: 600; margin-top: 0.35rem; margin-bottom: 0;">
                ${data.milestone}
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  nodes.forEach((node, index) => {
    node.addEventListener('click', () => {
      renderStage(index);
    });
  });

  // Default to Stage 2 (Skill Building) on load
  renderStage(2);
}

/* ==========================================================================
   9. AI SKILL GAP ANALYZER (LocalStorage & Dynamic Match Breakdown)
   ========================================================================== */
const careerSkillRequirements = {
  'fullstack': {
    name: 'Full Stack Developer',
    essential: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'Git'],
    recommended: ['Tailwind CSS', 'Next.js', 'GraphQL', 'Redis', 'CI/CD']
  },
  'ai-engineer': {
    name: 'AI / Machine Learning Engineer',
    essential: ['Python', 'PyTorch', 'TensorFlow', 'Linear Algebra', 'Data Structures', 'Docker', 'Git'],
    recommended: ['LLM APIs', 'Vector Databases', 'CUDA', 'FastAPI', 'Pandas']
  },
  'data-scientist': {
    name: 'Data Scientist',
    essential: ['Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-Learn', 'Statistics', 'Git'],
    recommended: ['Tableau', 'Spark', 'Feature Engineering', 'AB Testing', 'Docker']
  },
  'cyber-analyst': {
    name: 'Cyber Security Analyst',
    essential: ['Networking (TCP/IP)', 'Linux', 'Python', 'Wireshark', 'Cryptography', 'Security Protocols'],
    recommended: ['SIEM', 'Splunk', 'Bash Scripting', 'Penetration Testing', 'Cloud Security']
  },
  'cloud-engineer': {
    name: 'Cloud & DevOps Engineer',
    essential: ['Linux', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Git'],
    recommended: ['Python/Bash', 'Prometheus', 'Grafana', 'Ansible', 'Networking']
  },
  'uiux-designer': {
    name: 'UI/UX Designer',
    essential: ['Figma', 'User Research', 'Wireframing', 'Design Systems', 'HTML/CSS Basics', 'Prototyping'],
    recommended: ['Interaction Design', 'Usability Testing', 'Typography', 'Framer', 'Micro-interactions']
  }
};

function initSkillGapAnalyzer() {
  const currentSkillsInput = document.getElementById('current-skills-input');
  const targetCareerSelect = document.getElementById('target-career-select');
  const analyzeBtn = document.getElementById('btn-analyze-gap');
  const quickPills = document.querySelectorAll('.quick-pill');
  const clearBtn = document.getElementById('btn-clear-skills');

  // Load saved state from LocalStorage
  const savedSkills = localStorage.getItem('nexora_skills_input');
  const savedCareer = localStorage.getItem('nexora_target_career');

  if (savedSkills && currentSkillsInput) {
    currentSkillsInput.value = savedSkills;
  } else if (currentSkillsInput) {
    // Default helpful starter skills
    currentSkillsInput.value = 'HTML, CSS, Java, Python';
  }

  if (savedCareer && targetCareerSelect) {
    targetCareerSelect.value = savedCareer;
  }

  // Quick skill pills click
  quickPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const skill = pill.getAttribute('data-skill');
      addSkillToAnalyzer(skill);
    });
  });

  if (clearBtn && currentSkillsInput) {
    clearBtn.addEventListener('click', () => {
      currentSkillsInput.value = '';
      localStorage.removeItem('nexora_skills_input');
      showToast('Cleared skills input');
      const resultsContainer = document.getElementById('gap-analysis-results');
      if (resultsContainer) resultsContainer.innerHTML = '';
    });
  }

  if (analyzeBtn) {
    analyzeBtn.addEventListener('click', () => {
      runSkillGapAnalysis();
    });
  }

  // Run initial analysis if skills present
  if (currentSkillsInput && currentSkillsInput.value.trim().length > 0) {
    runSkillGapAnalysis();
  }
}

function runSkillGapAnalysis() {
  const currentSkillsInput = document.getElementById('current-skills-input');
  const targetCareerSelect = document.getElementById('target-career-select');
  const resultsContainer = document.getElementById('gap-analysis-results');
  if (!currentSkillsInput || !targetCareerSelect || !resultsContainer) return;

  const userSkillsRaw = currentSkillsInput.value;
  const targetCareerKey = targetCareerSelect.value;

  // Persist to LocalStorage
  localStorage.setItem('nexora_skills_input', userSkillsRaw);
  localStorage.setItem('nexora_target_career', targetCareerKey);

  const careerData = careerSkillRequirements[targetCareerKey] || careerSkillRequirements['fullstack'];
  const userSkillsList = userSkillsRaw
    .split(',')
    .map(s => s.trim().toLowerCase())
    .filter(s => s.length > 0);

  if (userSkillsList.length === 0) {
    resultsContainer.innerHTML = `
      <div style="padding: 2rem; text-align: center; color: var(--text-muted); background: var(--bg-glass-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
        <i class="bi bi-info-circle" style="font-size: 1.5rem; color: var(--accent-cyan);"></i>
        <p style="margin-top: 0.5rem; margin-bottom: 0;">Please enter at least one skill or select from the quick-add pills above.</p>
      </div>
    `;
    return;
  }

  // Evaluation arrays
  const alreadyStrong = [];
  const needsImprovement = [];
  const recommendedNext = [];

  // Match against essential skills
  careerData.essential.forEach(skill => {
    const sLower = skill.toLowerCase();
    const hasSkill = userSkillsList.some(userS => userS === sLower || sLower.includes(userS) || userS.includes(sLower));

    if (hasSkill) {
      // Check if partially known or fully strong
      if (['javascript', 'react', 'python', 'docker'].includes(sLower) && userSkillsList.length < 5) {
        needsImprovement.push(skill);
      } else {
        alreadyStrong.push(skill);
      }
    } else {
      recommendedNext.push(skill);
    }
  });

  // Calculate readiness percentage
  const totalPoints = careerData.essential.length * 2;
  const earnedPoints = (alreadyStrong.length * 2) + (needsImprovement.length * 1);
  const readinessPercent = Math.min(Math.round((earnedPoints / totalPoints) * 100), 98);

  resultsContainer.innerHTML = `
    <div class="analysis-results-box">
      <!-- Readiness Summary Meter -->
      <div class="readiness-meter-wrapper">
        <div>
          <span class="section-kicker">ANALYSIS COMPLETE · ${careerData.name}</span>
          <h4 style="font-size: 1.4rem; font-weight: 800; color: var(--text-primary); margin: 0.2rem 0;">
            Role Readiness: <span style="color: var(--accent-cyan); font-family: var(--font-mono);">${readinessPercent}%</span>
          </h4>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0; max-width: 500px;">
            ${readinessPercent >= 75 
              ? 'Excellent alignment! You possess core prerequisites. Target the recommended gaps below to become interview-ready.' 
              : 'Solid foundational baseline. Focus on the high-priority skills highlighted in "Recommended Next" to rapidly accelerate.'}
          </p>
        </div>

        <div style="min-width: 180px; text-align: right;">
          <div style="font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; margin-bottom: 0.4rem;">
            Gap Bridge Index
          </div>
          <div class="skill-progress-bar" style="height: 12px;">
            <div class="skill-progress-fill" style="width: ${readinessPercent}%;"></div>
          </div>
          <div style="font-size: 0.76rem; color: var(--text-secondary); margin-top: 0.35rem; font-family: var(--font-mono);">
            ${recommendedNext.length} Critical Skills to Bridge
          </div>
        </div>
      </div>

      <!-- 3 Categorized Result Columns -->
      <div class="gap-columns-grid">
        <!-- 1. Already Strong -->
        <div class="gap-column-card">
          <div class="gap-col-header strong">
            <i class="bi bi-check-circle-fill"></i>
            <span>✓ Already Strong (${alreadyStrong.length})</span>
          </div>
          <div class="gap-skill-list">
            ${alreadyStrong.length > 0 
              ? alreadyStrong.map(s => `
                  <div class="gap-item" style="border-left: 3px solid var(--accent-emerald);">
                    <span style="font-weight: 600; color: var(--text-primary);">${s}</span>
                    <span style="font-size: 0.72rem; color: var(--accent-emerald); font-weight: 700; text-transform: uppercase;">Verified</span>
                  </div>
                `).join('')
              : '<div style="font-size: 0.82rem; color: var(--text-muted); padding: 0.5rem 0;">None identified yet.</div>'}
          </div>
        </div>

        <!-- 2. Needs Improvement -->
        <div class="gap-column-card">
          <div class="gap-col-header improve">
            <i class="bi bi-lightning-charge-fill"></i>
            <span>⚡ Needs Improvement (${needsImprovement.length})</span>
          </div>
          <div class="gap-skill-list">
            ${needsImprovement.length > 0
              ? needsImprovement.map(s => `
                  <div class="gap-item" style="border-left: 3px solid var(--accent-amber);">
                    <span style="font-weight: 600; color: var(--text-primary);">${s}</span>
                    <span style="font-size: 0.72rem; color: var(--accent-amber); font-weight: 700; text-transform: uppercase;">Deepen</span>
                  </div>
                `).join('')
              : '<div style="font-size: 0.82rem; color: var(--text-muted); padding: 0.5rem 0;">No partial overlaps flagged.</div>'}
          </div>
        </div>

        <!-- 3. Recommended Next -->
        <div class="gap-column-card">
          <div class="gap-col-header next">
            <i class="bi bi-rocket-takeoff-fill"></i>
            <span>🚀 Recommended Next (${recommendedNext.length})</span>
          </div>
          <div class="gap-skill-list">
            ${recommendedNext.length > 0
              ? recommendedNext.map((s, idx) => `
                  <div class="gap-item" style="border-left: 3px solid var(--accent-cyan);">
                    <span style="font-weight: 600; color: var(--text-primary);">${s}</span>
                    <span style="font-size: 0.72rem; color: var(--accent-cyan); font-weight: 700; text-transform: uppercase;">Priority #${idx + 1}</span>
                  </div>
                `).join('')
              : '<div style="font-size: 0.82rem; color: var(--accent-emerald); padding: 0.5rem 0;">All essential skills covered!</div>'}
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   10. FUTURISTIC STUDENT DASHBOARD PREVIEW
   ========================================================================== */
function initStudentDashboard() {
  const checkboxes = document.querySelectorAll('.sprint-task-checkbox');
  const readinessValEl = document.getElementById('dash-readiness-val');
  const circleProgressEl = document.getElementById('dash-circle-progress');
  const startLearningBtn = document.getElementById('btn-start-learning');

  let currentReadiness = 78;

  function updateDashboardScore() {
    let completedCount = 0;
    checkboxes.forEach(cb => {
      if (cb.checked) completedCount++;
    });

    // Each checked task modifies score
    const adjustedScore = 70 + (completedCount * 4);
    currentReadiness = adjustedScore;

    if (readinessValEl) {
      readinessValEl.textContent = `${currentReadiness}%`;
    }

    if (circleProgressEl) {
      // 377 is the perimeter of radius 60
      const offset = 377 - (377 * currentReadiness) / 100;
      circleProgressEl.style.strokeDashoffset = offset;
    }
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      updateDashboardScore();
      showToast(cb.checked ? 'Task marked as completed! (+4% Readiness)' : 'Task unchecked');
    });
  });

  if (startLearningBtn) {
    startLearningBtn.addEventListener('click', () => {
      showToast('Launching Interactive Learning Sandbox for DOM Manipulation...');
      setTimeout(() => {
        const skillsSection = document.getElementById('skills');
        if (skillsSection) skillsSection.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    });
  }

  updateDashboardScore();
}

/* ==========================================================================
   11. LIVE ACTIVITY NOTIFICATION STREAM (Simulated Demo Ticker)
   ========================================================================== */
const activityStream = [
  { student: 'Aarav P.', action: 'completed Python Automation Roadmap', time: '2m ago', icon: 'bi-check2-circle' },
  { student: 'Maya S.', action: 'generated AI Career Match: Cloud Architect (94%)', time: '4m ago', icon: 'bi-lightning' },
  { student: 'Dev K.', action: 'reached 85% Career Readiness in Full Stack', time: '7m ago', icon: 'bi-graph-up-arrow' },
  { student: 'Priya R.', action: 'unlocked Milestone: Neural Net Classifier Repo', time: '11m ago', icon: 'bi-trophy' },
  { student: 'Rohan N.', action: 'bridged 3 skill gaps in Data Engineering', time: '14m ago', icon: 'bi-puzzle' }
];

function initLiveActivityTicker() {
  const container = document.getElementById('live-activity-stream');
  if (!container) return;

  let currentIndex = 0;

  function showNextActivity() {
    const item = activityStream[currentIndex];
    container.style.opacity = '0';
    container.style.transform = 'translateY(6px)';

    setTimeout(() => {
      container.innerHTML = `
        <i class="bi ${item.icon}" style="color: var(--accent-cyan);"></i>
        <span><strong>${item.student}</strong> ${item.action}</span>
        <span class="activity-time">· ${item.time}</span>
      `;
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
      currentIndex = (currentIndex + 1) % activityStream.length;
    }, 300);
  }

  showNextActivity();
  setInterval(showNextActivity, 4000);
}

/* ==========================================================================
   12. 3D MICRO-TILT CARD PHYSICS
   ========================================================================== */
function initCardTiltPhysics() {
  // Only enable on desktop pointer devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const tiltCards = document.querySelectorAll('.tilt-card, .career-card, .glass-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* ==========================================================================
   13. VIEWPORT STAT COUNTER ANIMATION
   ========================================================================== */
function initViewportCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'), 10) || 0;
        animateCount(entry.target, target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(c => observer.observe(c));

  function animateCount(el, target) {
    let current = 0;
    const duration = 1200;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current);
      }
    }, stepTime);
  }
}

/* ==========================================================================
   14. TOAST NOTIFICATION UTILITY
   ========================================================================== */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'nexora-toast';
  toast.innerHTML = `
    <i class="bi bi-stars" style="color: var(--accent-cyan); font-size: 1.1rem;"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
