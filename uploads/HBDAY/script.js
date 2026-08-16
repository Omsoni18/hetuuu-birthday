/* ═══════════════════════════════════════════════════
   BIRTHDAY WEBSITE — Main Script
   ═══════════════════════════════════════════════════ */

(function() {
  'use strict';

  /* ── State ─────────────────────────────────── */
  let isUnlocked = false;
  let catClicks = 0;
  let heartClicks = 0;
  let musicPlaying = false;
  let audioEl = null;

  /* ── Preloader ─────────────────────────────── */
  function initPreloader() {
    const sp = document.getElementById('preloaderSparkles');
    const icons = ['✦','✧','⋆','˚','✩','♡','⊹'];
    for (let i = 0; i < 20; i++) {
      const s = document.createElement('i');
      s.textContent = icons[i % icons.length];
      s.style.left = Math.random() * 100 + '%';
      s.style.top = Math.random() * 100 + '%';
      s.style.animationDuration = (2 + Math.random() * 3) + 's';
      s.style.animationDelay = Math.random() * 2 + 's';
      sp.appendChild(s);
    }
    setTimeout(function() {
      document.getElementById('preloader').classList.add('hidden');
      initScrollObserver();
    }, 2800);
  }

  /* ── Custom Cursor ─────────────────────────── */
  function initCursor() {
    if (window.innerWidth < 640) return;
    const cur = document.getElementById('custom-cursor');
    const trail = document.getElementById('cursor-trail');
    let lastSparkle = 0;
    document.addEventListener('mousemove', function(e) {
      cur.style.left = e.clientX + 'px';
      cur.style.top = e.clientY + 'px';
      const now = Date.now();
      if (now - lastSparkle > 60) {
        lastSparkle = now;
        const dot = document.createElement('div');
        dot.className = 'sparkle-dot';
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
        const colors = ['#f9a8d4','#c4b5fd','#fde68a','#93c5fd','#f472b6'];
        dot.style.background = colors[Math.floor(Math.random()*colors.length)];
        dot.style.width = dot.style.height = (4 + Math.random()*4)+'px';
        trail.appendChild(dot);
        setTimeout(function() { dot.remove(); }, 600);
      }
    });
  }

  /* ── Animated Doodles ──────────────────────── */
  function initDoodles() {
    var layer = document.getElementById('doodles-layer');
    var doodles = [
      {e:'😺',x:5,y:10,anim:'doodle-float',dur:5},
      {e:'😸',x:88,y:20,anim:'doodle-sway',dur:6},
      {e:'🐱',x:15,y:45,anim:'doodle-float',dur:7},
      {e:'😻',x:82,y:60,anim:'doodle-sway',dur:5.5},
      {e:'🐈',x:50,y:85,anim:'doodle-float',dur:6},
      {e:'😽',x:92,y:80,anim:'doodle-sway',dur:7},
      {e:'⭐',x:20,y:8,anim:'doodle-twinkle',dur:3},
      {e:'✨',x:75,y:15,anim:'doodle-twinkle',dur:2.5},
      {e:'⭐',x:60,y:5,anim:'doodle-twinkle',dur:4},
      {e:'🌙',x:90,y:5,anim:'doodle-float',dur:8},
      {e:'☁️',x:10,y:25,anim:'doodle-sway',dur:10},
      {e:'☁️',x:70,y:12,anim:'doodle-sway',dur:12},
      {e:'🌸',x:25,y:70,anim:'doodle-sway',dur:5},
      {e:'🌷',x:80,y:40,anim:'doodle-sway',dur:6},
      {e:'🦋',x:35,y:30,anim:'doodle-float',dur:4},
      {e:'🦋',x:65,y:55,anim:'doodle-float',dur:5},
      {e:'🌈',x:45,y:8,anim:'doodle-float',dur:9},
      {e:'💕',x:55,y:75,anim:'doodle-twinkle',dur:3},
      {e:'✉️',x:8,y:60,anim:'doodle-sway',dur:7},
      {e:'📖',x:90,y:45,anim:'doodle-float',dur:6},
      {e:'☕',x:30,y:90,anim:'doodle-sway',dur:8},
      {e:'🌿',x:72,y:88,anim:'doodle-sway',dur:7},
      {e:'🪟',x:5,y:82,anim:'doodle-float',dur:9},
      {e:'✈️',x:42,y:18,anim:'doodle-float',dur:5}
    ];
    doodles.forEach(function(d) {
      var el = document.createElement('div');
      el.className = 'doodle ' + d.anim;
      el.textContent = d.e;
      el.style.left = d.x + '%';
      el.style.top = d.y + '%';
      el.style.animationDuration = d.dur + 's';
      el.style.animationDelay = (Math.random() * 3) + 's';
      layer.appendChild(el);
    });
  }

  /* ── Particles Canvas ──────────────────────── */
  function initParticles() {
    var canvas = document.getElementById('particles-canvas');
    var ctx = canvas.getContext('2d');
    var particles = [];
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function Particle() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedY = -Math.random() * 0.3 - 0.1;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.color = ['#f9a8d4','#c4b5fd','#fde68a','#93c5fd'][Math.floor(Math.random()*4)];
    }
    for (var i = 0; i < 40; i++) particles.push(new Particle());

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(function(p) {
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
        if (p.x < -10 || p.x > canvas.width + 10) p.x = Math.random() * canvas.width;
      });
      requestAnimationFrame(animate);
    }
    animate();
  }

  /* ── Populate Content from CONFIG ──────────── */
  function populateContent() {
    // Apology
    var apologyEl = document.getElementById('apologyText');
    CONFIG.apologyText.forEach(function(t) {
      var p = document.createElement('p');
      p.textContent = t;
      apologyEl.appendChild(p);
    });

    // Apology petals
    var petals = document.getElementById('apologyPetals');
    for (var i = 0; i < 8; i++) {
      var pe = document.createElement('span');
      pe.className = 'petal';
      pe.textContent = ['🌸','🌷','💮','🏵️'][i%4];
      pe.style.left = Math.random()*90 + '%';
      pe.style.animationDuration = (5 + Math.random()*5) + 's';
      pe.style.animationDelay = Math.random()*5 + 's';
      pe.style.fontSize = (14 + Math.random()*10) + 'px';
      petals.appendChild(pe);
    }

    // Encouragement cards
    var grid = document.getElementById('motivGrid');
    CONFIG.encouragementCards.forEach(function(t, i) {
      var card = document.createElement('article');
      card.className = 'motiv-card';
      card.textContent = t;
      card.style.animationDelay = (i * 0.1) + 's';
      grid.appendChild(card);
    });

    // Birthday letter
    var letterTextEl = document.getElementById('letterText');
    if (letterTextEl) letterTextEl.textContent = CONFIG.birthdayLetter;

    // Reasons amazing (flip cards)
    var rGrid = document.getElementById('reasonsGrid');
    var icons = ['😊','💛','🦁','💪','🌟','❤️','🔥','☀️'];
    CONFIG.reasonsAmazing.forEach(function(r, i) {
      var card = document.createElement('div');
      card.className = 'flip-card';
      card.innerHTML =
        '<div class="flip-inner">' +
          '<div class="flip-front">' +
            '<span class="card-icon">' + icons[i] + '</span>' +
            '<span class="card-title">' + r.title + '</span>' +
          '</div>' +
          '<div class="flip-back">' + r.text + '</div>' +
        '</div>';
      rGrid.appendChild(card);
    });

    // Photo gallery
    var gal = document.getElementById('galleryGrid');
    CONFIG.photos.forEach(function(p, i) {
      var pol = document.createElement('div');
      pol.className = 'polaroid';
      pol.style.setProperty('--rot', ((Math.random() - 0.5) * 6) + 'deg');
      pol.innerHTML = '<img src="' + p.src + '" alt="' + p.caption + '" loading="lazy"/>' +
                      '<div class="caption">' + p.caption + '</div>';
      pol.querySelector('img').addEventListener('click', function() {
        openLightbox(p.src);
      });
      gal.appendChild(pol);
    });

    // Scrapbook
    initScrapbook();

    // Videos
    var vidC = document.getElementById('videoContainer');
    CONFIG.videos.forEach(function(v) {
      var card = document.createElement('div');
      card.className = 'video-cinema';
      card.innerHTML =
        '<video controls playsinline poster="' + v.poster + '">' +
          '<source src="' + v.src + '" type="video/mp4"/>' +
        '</video>' +
        '<div class="vid-title">' + v.title + '</div>';
      vidC.appendChild(card);
    });

    // Wishes
    var wishEl = document.getElementById('wishList');
    CONFIG.finalWishes.forEach(function(w) {
      var p = document.createElement('p');
      p.className = 'handwritten';
      p.textContent = '✦ ' + w;
      p.style.marginBottom = '14px';
      wishEl.appendChild(p);
    });

    // Ending
    document.getElementById('endingTitle').textContent = CONFIG.endingMessage.title;
    var endLines = document.getElementById('endingLines');
    CONFIG.endingMessage.lines.forEach(function(l) {
      var p = document.createElement('p');
      p.className = 'ending-line';
      p.textContent = l;
      endLines.appendChild(p);
    });
    document.getElementById('endingSignoff').textContent = CONFIG.endingMessage.signoff;

    // Ending stars
    var eStars = document.getElementById('endingStars');
    for (var j = 0; j < 60; j++) {
      var st = document.createElement('i');
      st.style.left = Math.random()*100 + '%';
      st.style.top = Math.random()*100 + '%';
      st.style.animationDuration = (2 + Math.random()*3) + 's';
      st.style.animationDelay = Math.random()*3 + 's';
      st.style.width = st.style.height = (1 + Math.random()*3) + 'px';
      eStars.appendChild(st);
    }

    // Ending fireflies
    var ffC = document.getElementById('endingFireflies');
    for (var k = 0; k < 15; k++) {
      var ff = document.createElement('div');
      ff.className = 'firefly';
      ff.style.left = Math.random()*100 + '%';
      ff.style.top = Math.random()*100 + '%';
      ff.style.animationDuration = (5 + Math.random()*6) + 's';
      ff.style.animationDelay = Math.random()*4 + 's';
      ffC.appendChild(ff);
    }

    // Floating emojis on hero
    var fE = document.getElementById('floatingEmojis');
    var emojis = ['🎈','🎈','💕','💖','🎂','🎁','🌸','✨'];
    emojis.forEach(function(em, i) {
      var span = document.createElement('span');
      span.className = 'floating-emoji';
      span.textContent = em;
      span.style.left = (10 + Math.random()*80) + '%';
      span.style.top = (10 + Math.random()*80) + '%';
      span.style.animationDuration = (4 + Math.random()*4) + 's';
      span.style.animationDelay = (i * 0.5) + 's';
      fE.appendChild(span);
    });
  }

  /* ── Scroll Observer ───────────────────────── */
  function initScrollObserver() {
    var sections = document.querySelectorAll('.page-section');
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });
    sections.forEach(function(s) { observer.observe(s); });

    // Ending lines
    var endLines = document.querySelectorAll('.ending-line');
    var endObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry, i) {
        if (entry.isIntersecting) {
          setTimeout(function() {
            entry.target.classList.add('visible');
          }, 200);
        }
      });
    }, { threshold: 0.3 });
    endLines.forEach(function(l, i) {
      l.style.transitionDelay = (i * 0.15) + 's';
      endObs.observe(l);
    });
  }

  /* ── Nav Dots ──────────────────────────────── */
  function initNavDots() {
    var dotsEl = document.getElementById('navDots');
    var phase1Sections = document.querySelectorAll('.phase1');
    phase1Sections.forEach(function(sec, i) {
      var dot = document.createElement('button');
      dot.className = 'nav-dot';
      dot.title = 'Section ' + (i + 1);
      dot.addEventListener('click', function() {
        sec.scrollIntoView({ behavior: 'smooth' });
      });
      dotsEl.appendChild(dot);
    });

    // Active dot tracking
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var idx = Array.from(phase1Sections).indexOf(entry.target);
          document.querySelectorAll('.nav-dot').forEach(function(d, j) {
            d.classList.toggle('active', j === idx);
          });
        }
      });
    }, { threshold: 0.5 });
    phase1Sections.forEach(function(s) { observer.observe(s); });
  }

  /* ── Countdown ─────────────────────────────── */
  function startCountdown() {
    var target = new Date(CONFIG.birthdayDate).getTime();

    function update() {
      var now = Date.now();
      var diff = target - now;

      // Check URL override for testing (Only Omi knows this secret key)
      var params = new URLSearchParams(window.location.search);
      if (params.get('preview') === 'happy_birthday_hetu_omi_2026') {
        diff = -1;
      }

      if (diff <= 0) {
        document.getElementById('c-days').textContent = '00';
        document.getElementById('c-hours').textContent = '00';
        document.getElementById('c-mins').textContent = '00';
        document.getElementById('c-secs').textContent = '00';
        if (!isUnlocked) triggerUnlock();
        return;
      }

      var d = Math.floor(diff / 86400000);
      var h = Math.floor((diff % 86400000) / 3600000);
      var m = Math.floor((diff % 3600000) / 60000);
      var s = Math.floor((diff % 60000) / 1000);

      document.getElementById('c-days').textContent = String(d).padStart(2,'0');
      document.getElementById('c-hours').textContent = String(h).padStart(2,'0');
      document.getElementById('c-mins').textContent = String(m).padStart(2,'0');
      document.getElementById('c-secs').textContent = String(s).padStart(2,'0');

      requestAnimationFrame(update);
    }
    update();
    setInterval(update, 1000);
  }

  /* ── Unlock Trigger ────────────────────────── */
  function triggerUnlock() {
    if (isUnlocked) return;
    isUnlocked = true;

    // Hide phase 1 sections
    document.querySelectorAll('.phase1').forEach(function(s) {
      s.style.display = 'none';
    });
    document.getElementById('navDots').style.display = 'none';
    document.getElementById('peekBtn').style.display = 'none';

    // Show unlock overlay
    var overlay = document.getElementById('unlock-overlay');
    overlay.classList.add('active');

    // Create stars
    var starsC = document.getElementById('unlockStars');
    for (var i = 0; i < 80; i++) {
      var star = document.createElement('div');
      star.className = 'unlock-star';
      star.style.left = Math.random()*100 + '%';
      star.style.top = Math.random()*100 + '%';
      star.style.animationDelay = (Math.random()*2) + 's';
      starsC.appendChild(star);
    }

    // Heart burst
    var hBurst = document.getElementById('heartBurst');
    for (var j = 0; j < 30; j++) {
      var heart = document.createElement('span');
      heart.className = 'heart-particle';
      heart.textContent = '❤️';
      heart.style.left = '50%';
      heart.style.top = '50%';
      var angle = (j / 30) * Math.PI * 2;
      var dist = 100 + Math.random() * 200;
      heart.style.animationDelay = (0.5 + Math.random()*1) + 's';
      heart.style.setProperty('--tx', Math.cos(angle)*dist + 'px');
      heart.style.setProperty('--ty', Math.sin(angle)*dist + 'px');
      hBurst.appendChild(heart);
    }

    // Start music
    initMusic();

    // After animation, show phase 2
    setTimeout(function() {
      overlay.classList.add('fade-out');
      setTimeout(function() {
        overlay.style.display = 'none';
        document.getElementById('phase2').classList.add('unlocked');
        window.scrollTo(0, 0);
        // Re-observe new sections
        setTimeout(initScrollObserver, 200);
      }, 1000);
    }, 4500);
  }

  /* ── Music ─────────────────────────────────── */
  function initMusic() {
    if (!CONFIG.musicFile) return;
    audioEl = new Audio(CONFIG.musicFile);
    audioEl.loop = true;
    audioEl.volume = 0;
    audioEl.play().then(function() {
      document.getElementById('music-player').style.display = 'flex';
      musicPlaying = true;
      // Fade in
      var vol = 0;
      var fadeIn = setInterval(function() {
        vol += 0.01;
        if (vol >= CONFIG.musicVolume) { vol = CONFIG.musicVolume; clearInterval(fadeIn); }
        audioEl.volume = vol;
      }, 50);
    }).catch(function() {
      // Auto-play blocked; show player for manual start
      document.getElementById('music-player').style.display = 'flex';
      document.getElementById('musicToggle').textContent = '▶️';
    });
  }

  window.toggleMusic = function() {
    if (!audioEl) {
      if (!CONFIG.musicFile) return;
      audioEl = new Audio(CONFIG.musicFile);
      audioEl.loop = true;
      audioEl.volume = CONFIG.musicVolume;
    }
    if (musicPlaying) {
      audioEl.pause();
      musicPlaying = false;
      document.getElementById('musicToggle').textContent = '▶️';
    } else {
      audioEl.play();
      musicPlaying = true;
      document.getElementById('musicToggle').textContent = '🎵';
    }
  };

  window.toggleMute = function() {
    if (!audioEl) return;
    audioEl.muted = !audioEl.muted;
    document.getElementById('muteToggle').textContent = audioEl.muted ? '🔇' : '🔊';
  };

  window.setVolume = function(val) {
    if (!audioEl) return;
    audioEl.volume = val / 100;
  };

  /* ── Lock Popup ────────────────────────────── */
  window.showLockPopup = function() {
    if (isUnlocked) return;
    document.getElementById('lockPopup').classList.add('show');
  };
  window.closeLockPopup = function() {
    document.getElementById('lockPopup').classList.remove('show');
  };

  /* ── Lightbox ──────────────────────────────── */
  window.openLightbox = function(src) {
    document.getElementById('lightboxImg').src = src;
    document.getElementById('lightbox').classList.add('open');
  };
  window.closeLightbox = function() {
    document.getElementById('lightbox').classList.remove('open');
  };

  /* ── Smooth Scroll Helper ──────────────────── */
  window.scrollToSection = function(id) {
    document.getElementById(id).scrollIntoView({ behavior:'smooth' });
  };

  /* ── Easter Eggs ───────────────────────────── */
  function initEasterEggs() {
    // Cat click
    var apologyCat = document.getElementById('apologyCat');
    if (apologyCat) {
      apologyCat.style.cursor = 'none';
      apologyCat.style.pointerEvents = 'auto';
      apologyCat.addEventListener('click', function() {
        catClicks++;
        if (catClicks >= 5) {
          showEasterPopup('Meow ❤️ 🐱');
          catClicks = 0;
        }
      });
    }

    // Heart click
    var heartEgg = document.getElementById('heartEgg');
    if (heartEgg) {
      heartEgg.style.cursor = 'none';
      heartEgg.style.pointerEvents = 'auto';
      heartEgg.addEventListener('click', function() {
        heartClicks++;
        if (heartClicks >= 10) {
          showEasterPopup("You'll always be someone incredibly special to me ❤️");
          heartClicks = 0;
        }
      });
    }

    // Moon click
    var moon = document.getElementById('moonEgg');
    if (moon) {
      moon.style.cursor = 'none';
      moon.style.pointerEvents = 'auto';
      moon.addEventListener('click', function() {
        var sky = document.getElementById('endingStars');
        for (var i = 0; i < 100; i++) {
          var st = document.createElement('i');
          st.style.left = Math.random()*100 + '%';
          st.style.top = Math.random()*100 + '%';
          st.style.animationDuration = (1 + Math.random()*2) + 's';
          st.style.animationDelay = (Math.random()*1) + 's';
          st.style.width = st.style.height = (2 + Math.random()*3) + 'px';
          sky.appendChild(st);
        }
        showEasterPopup('✨ The sky lights up for you ✨');
      });
    }
  }

  function showEasterPopup(msg) {
    var popup = document.getElementById('easterPopup');
    popup.textContent = msg;
    popup.classList.add('show');
    setTimeout(function() { popup.classList.remove('show'); }, 3000);
  }

  /* ── Interactive Scrapbook Generator ───────── */
  function initScrapbook() {
    var book = document.getElementById('scrapbook');
    var prevBtn = document.getElementById('prevPageBtn');
    var nextBtn = document.getElementById('nextPageBtn');
    var progress = document.getElementById('pageProgress');

    var sheetsData = [];
    
    // Cover page sheet
    sheetsData.push({
      front: {
        isCover: true,
        emoji: "🧸",
        title: "Hetuuu & Omi's Scrapbook 🌸",
        text: "Flip to open the book of our special memories."
      },
      back: {
        isIntro: true,
        emoji: "💤",
        text: "A collection of the sweetest moments we've shared. Every single one is a treasure.",
        cats: "🐈🐾"
      }
    });

    // Memory sheets
    var pages = CONFIG.scrapbookPages;
    for (var i = 0; i < pages.length; i += 2) {
      var itemFront = pages[i];
      var itemBack = pages[i+1] || null;
      
      sheetsData.push({
        front: {
          isMemory: true,
          photo: itemFront.photo,
          caption: itemFront.caption,
          date: itemFront.date,
          sticker: itemFront.sticker,
          num: (i + 1)
        },
        back: itemBack ? {
          isMemory: true,
          photo: itemBack.photo,
          caption: itemBack.caption,
          date: itemBack.date,
          sticker: itemBack.sticker,
          num: (i + 2)
        } : {
          isEndNote: true,
          text: "More beautiful pages to be written in the future... ✨",
          emoji: "😴",
          num: (i + 2)
        }
      });
    }

    // Final Sheet: Back Cover
    sheetsData.push({
      front: {
        isTextOnly: true,
        title: "With Love ❤️",
        text: "Every memory tells a story of happiness. Let's make many more.",
        emoji: "🌸",
        num: (pages.length + 3)
      },
      back: {
        isBackCover: true,
        title: "Book of Memories 📖",
        num: (pages.length + 4)
      }
    });

    var sheetsDOM = [];
    sheetsData.forEach(function(sData, index) {
      var sheet = document.createElement('div');
      sheet.className = 'book-sheet';
      sheet.style.zIndex = (sheetsData.length - index);

      var fPage = document.createElement('div');
      fPage.className = 'page-side front';
      fillPageContent(fPage, sData.front);

      var bPage = document.createElement('div');
      bPage.className = 'page-side back';
      fillPageContent(bPage, sData.back);

      sheet.appendChild(fPage);
      sheet.appendChild(bPage);
      book.appendChild(sheet);
      sheetsDOM.push(sheet);
    });

    let currentSheetIndex = 0;

    function updateNavProgress() {
      progress.textContent = (currentSheetIndex + 1) + ' / ' + sheetsDOM.length;
      prevBtn.disabled = (currentSheetIndex === 0);
      nextBtn.disabled = (currentSheetIndex === sheetsDOM.length - 1);
    }

    function flipNext() {
      if (currentSheetIndex < sheetsDOM.length) {
        sheetsDOM[currentSheetIndex].classList.add('flipped');
        sheetsDOM[currentSheetIndex].style.zIndex = currentSheetIndex + 1;
        currentSheetIndex++;
        updateNavProgress();
      }
    }

    function flipPrev() {
      if (currentSheetIndex > 0) {
        currentSheetIndex--;
        sheetsDOM[currentSheetIndex].classList.remove('flipped');
        sheetsDOM[currentSheetIndex].style.zIndex = sheetsData.length - currentSheetIndex;
        updateNavProgress();
      }
    }

    // Sheet click triggers turning
    sheetsDOM.forEach(function(sheet, index) {
      sheet.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'IMG') return;
        if (index === currentSheetIndex) {
          flipNext();
        } else if (index === currentSheetIndex - 1) {
          flipPrev();
        }
      });
      // also allow clicking images inside the scrapbook to trigger lightbox zoom
      var img = sheet.querySelectorAll('img');
      img.forEach(function(im){
        im.addEventListener('click', function(e){
          openLightbox(im.src);
          e.stopPropagation();
        });
      });
    });

    prevBtn.addEventListener('click', flipPrev);
    nextBtn.addEventListener('click', flipNext);
    updateNavProgress();
  }

  function fillPageContent(el, data) {
    if (!data) return;

    // Flowers decoration
    var fl1 = document.createElement('span');
    fl1.className = 'page-flower fl-1';
    fl1.textContent = '🌸';
    var fl2 = document.createElement('span');
    fl2.className = 'page-flower fl-2';
    fl2.textContent = '🌼';
    el.appendChild(fl1);
    el.appendChild(fl2);

    // Washi Tape decors
    var t1 = document.createElement('div');
    t1.className = 'washi-tape t-1';
    t1.textContent = '💕 Memory 💕';
    el.appendChild(t1);

    if (Math.random() > 0.4) {
      var t2 = document.createElement('div');
      t2.className = 'washi-tape t-2';
      el.appendChild(t2);
    }
    if (Math.random() > 0.5) {
      var t3 = document.createElement('div');
      t3.className = 'washi-tape t-3';
      el.appendChild(t3);
    }

    if (data.isCover) {
      el.innerHTML += 
        '<div class="scrap-content-wrapper" style="height: 100%; justify-content: center;">' +
          '<div style="font-size: 50px; margin-bottom: 20px;">' + data.emoji + '</div>' +
          '<h3 class="scrap-title-text" style="font-size: 1.5rem; color: var(--rose);">' + data.title + '</h3>' +
          '<p class="scrap-caption-text" style="font-size: 1.15rem; margin-top: 15px;">' + data.text + '</p>' +
        '</div>';
    } 
    else if (data.isIntro) {
      el.innerHTML +=
        '<div class="scrap-content-wrapper" style="height: 100%; justify-content: center;">' +
          '<div class="scrapbook-cat-pocket">' + data.emoji + '</div>' +
          '<p class="scrap-caption-text" style="font-size: 1.25rem; margin-top: 20px; font-weight: 500;">' + data.text + '</p>' +
          '<div style="font-size: 20px; margin-top: 15px;">' + data.cats + '</div>' +
        '</div>';
    }
    else if (data.isMemory) {
      el.innerHTML +=
        '<div class="scrap-img-wrapper">' +
          '<img src="' + data.photo + '" alt="memory" loading="lazy" style="cursor:none;"/>' +
        '</div>' +
        '<div class="scrap-content-wrapper">' +
          '<p class="scrap-caption-text">' + data.caption + '</p>' +
          '<span class="scrap-date-text">' + data.date + '</span>' +
          '<div class="scrapbook-cat-pocket">😴</div>' +
        '</div>';
    }
    else if (data.isEndNote) {
      el.innerHTML +=
        '<div class="scrap-content-wrapper" style="height: 100%; justify-content: center;">' +
          '<div class="scrapbook-cat-pocket">' + data.emoji + '</div>' +
          '<p class="scrap-caption-text" style="font-size: 1.3rem; margin-top: 20px;">' + data.text + '</p>' +
        '</div>';
    }
    else if (data.isTextOnly) {
      el.innerHTML +=
        '<div class="scrap-content-wrapper" style="height: 100%; justify-content: center;">' +
          '<h3 class="scrap-title-text" style="color: var(--rose);">' + data.title + '</h3>' +
          '<p class="scrap-caption-text" style="font-size: 1.25rem; margin-top: 15px;">' + data.text + '</p>' +
          '<div style="font-size: 40px; margin-top: 20px;">' + data.emoji + '</div>' +
        '</div>';
    }
    else if (data.isBackCover) {
      el.innerHTML +=
        '<div class="scrap-content-wrapper" style="height: 100%; justify-content: center;">' +
          '<div style="font-size: 50px; margin-bottom: 20px;">📖</div>' +
          '<h3 class="scrap-title-text">' + data.title + '</h3>' +
        '</div>';
    }

    if (data.num !== undefined) {
      var numEl = document.createElement('span');
      numEl.className = 'page-number';
      numEl.textContent = 'Page ' + data.num;
      el.appendChild(numEl);
    }
  }

  /* ── Heart particle fix for explosion ──────── */
  // Override the CSS with JS-driven positions
  var style = document.createElement('style');
  style.textContent = '.heart-particle{animation:none!important;transition:all 2s ease-out;}';

  /* ── Initialize ────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function() {
    populateContent();
    initPreloader();
    initCursor();
    initDoodles();
    initParticles();
    initNavDots();
    startCountdown();
    initEasterEggs();

    // Fix heart burst: use JS transforms
    document.head.appendChild(style);
  });

  // Override heart-particle animation in unlock with JS
  var origTrigger = triggerUnlock;

})();
