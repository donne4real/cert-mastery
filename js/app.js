// ============== Cert Mastery — App Logic ==============
(function () {
  'use strict';

  // ---- Cert definitions ----
  const CERTS = [
    {
      id: 'aws-ccp',
      name: 'AWS Cloud Practitioner',
      badge: 'CLF-C02',
      desc: 'Foundational AWS — services, billing, security, architecture.',
      color: '#ff9900',
      icon: '☁️'
    },
    {
      id: 'security-plus',
      name: 'CompTIA Security+',
      badge: 'SY0-701',
      desc: 'Core security concepts, threats, architecture, governance.',
      color: '#e20074',
      icon: '🔐'
    },
    {
      id: 'cissp',
      name: 'CISSP',
      badge: '(ISC)²',
      desc: 'Advanced cybersecurity — 8 domains of the (ISC)² CBK.',
      color: '#0070ad',
      icon: '🛡️'
    },
    {
      id: 'pmp',
      name: 'PMP',
      badge: 'PMI',
      desc: 'Project management — people, process, business environment.',
      color: '#005f87',
      icon: '📊'
    },
    {
      id: 'nce',
      name: 'NCE — National Counselor Exam',
      badge: 'NBCC',
      desc: 'LPC licensure — counseling theories, ethics, assessment, practice.',
      color: '#7c3aed',
      icon: '🧠'
    },
    {
      id: 'ncmhce',
      name: 'NCMHCE — Clinical Mental Health',
      badge: 'NBCC',
      desc: 'Clinical mental health counseling — case-study based exam.',
      color: '#0d9488',
      icon: '💚'
    }
  ];

  // ---- State ----
  const state = {
    currentCert: null,
    mode: null,        // 'practice' | 'test'
    questions: [],
    currentIdx: 0,
    answers: [],       // {questionId, selected, correct}
    score: 0,
    timerInterval: null,
    timeRemaining: 0,
    testConfig: null
  };

  // ---- LocalStorage ----
  const STORAGE_KEY = 'cert-mastery-progress-v1';

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : { tests: [] };
    } catch (e) {
      return { tests: [] };
    }
  }

  function saveProgress(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Failed to save progress', e);
    }
  }

  function recordTestResult(certId, score, total, duration) {
    const data = loadProgress();
    data.tests.push({
      certId,
      score,
      total,
      percent: Math.round((score / total) * 100),
      duration,
      timestamp: Date.now()
    });
    if (data.tests.length > 100) {
      data.tests = data.tests.slice(-100);
    }
    saveProgress(data);
  }

  // ---- DOM helpers ----
  const $ = (id) => document.getElementById(id);
  const screens = document.querySelectorAll('.screen');

  function showScreen(id) {
    screens.forEach(s => s.classList.remove('active'));
    $(id).classList.add('active');
    window.scrollTo(0, 0);
    updateBackButton();
  }

  function updateBackButton() {
    const back = $('backBtn');
    const homeVisible = $('homeScreen').classList.contains('active');
    back.classList.toggle('visible', !homeVisible);
  }

  function setTitle(t) {
    $('appTitle').textContent = t;
  }

  // ---- Home / Cert list ----
  function renderHome() {
    setTitle('Cert Mastery');
    const grid = $('certGrid');
    grid.innerHTML = '';

    CERTS.forEach(cert => {
      const qCount = (window.QUESTIONS_DATA[cert.id] || []).length;
      const btn = document.createElement('button');
      btn.className = 'cert-card';
      btn.style.borderLeft = `4px solid ${cert.color}`;
      btn.innerHTML = `
        <div class="cert-card-header">
          <div class="cert-name">${cert.icon} ${cert.name}</div>
          <div class="cert-badge" style="background:${cert.color}">${cert.badge}</div>
        </div>
        <div class="cert-desc">${cert.desc}</div>
        <div class="cert-meta">
          <span>📝 ${qCount} questions</span>
          <span>📚 Notes included</span>
        </div>
      `;
      btn.addEventListener('click', () => openCertMenu(cert));
      grid.appendChild(btn);
    });

    renderStats();
  }

  function renderStats() {
    const data = loadProgress();
    const totalTests = data.tests.length;
    const el = $('statsContent');

    if (totalTests === 0) {
      el.innerHTML = '<p class="muted">No tests taken yet. Start with a practice test!</p>';
      $('resetStatsBtn').hidden = true;
      return;
    }

    const totalCorrect = data.tests.reduce((s, t) => s + t.score, 0);
    const totalQuestions = data.tests.reduce((s, t) => s + t.total, 0);
    const avgPct = totalQuestions > 0
      ? Math.round((totalCorrect / totalQuestions) * 100)
      : 0;

    const byCert = {};
    CERTS.forEach(c => { byCert[c.id] = { name: c.name, tests: 0, pct: 0, total: 0, correct: 0 }; });
    data.tests.forEach(t => {
      if (!byCert[t.certId]) return;
      byCert[t.certId].tests++;
      byCert[t.certId].total += t.total;
      byCert[t.certId].correct += t.score;
    });
    Object.keys(byCert).forEach(k => {
      const b = byCert[k];
      b.pct = b.total > 0 ? Math.round((b.correct / b.total) * 100) : 0;
    });

    let html = `
      <div class="stat-row"><span class="stat-label">Total tests taken</span><span class="stat-value">${totalTests}</span></div>
      <div class="stat-row"><span class="stat-label">Overall accuracy</span><span class="stat-value">${avgPct}%</span></div>
    `;

    Object.keys(byCert).forEach(k => {
      const b = byCert[k];
      if (b.tests > 0) {
        html += `<div class="stat-row"><span class="stat-label">${b.name}</span><span class="stat-value">${b.tests} test${b.tests>1?'s':''} • ${b.pct}%</span></div>`;
      }
    });

    el.innerHTML = html;
    $('resetStatsBtn').hidden = false;
  }

  $('resetStatsBtn').addEventListener('click', () => {
    if (confirm('Reset all your test progress? This cannot be undone.')) {
      localStorage.removeItem(STORAGE_KEY);
      renderStats();
    }
  });

  // ---- Cert menu ----
  function openCertMenu(cert) {
    state.currentCert = cert;
    $('certMenuTitle').textContent = `${cert.icon} ${cert.name}`;
    $('certMenuDesc').textContent = cert.desc;
    renderCertStats();
    showScreen('certMenu');
    setTitle(cert.name);
  }

  function renderCertStats() {
    const data = loadProgress();
    const certId = state.currentCert.id;
    const tests = data.tests.filter(t => t.certId === certId);

    const el = $('certStats');
    if (tests.length === 0) {
      el.innerHTML = '<p class="muted">No tests taken for this cert yet.</p>';
      return;
    }

    const total = tests.reduce((s, t) => s + t.total, 0);
    const correct = tests.reduce((s, t) => s + t.score, 0);
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    const last = tests[tests.length - 1];

    el.innerHTML = `
      <h3 style="font-size:1rem;margin-bottom:12px;color:var(--text-2);text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Your Stats</h3>
      <div class="stat-row"><span class="stat-label">Tests taken</span><span class="stat-value">${tests.length}</span></div>
      <div class="stat-row"><span class="stat-label">Average score</span><span class="stat-value">${pct}%</span></div>
      <div class="stat-row"><span class="stat-label">Last test</span><span class="stat-value">${last.percent}%</span></div>
    `;
  }

  // ---- Notes ----
  function openNotes() {
    const notes = window.NOTES_DATA[state.currentCert.id];
    if (!notes) {
      alert('Notes not available for this cert yet.');
      return;
    }
    $('notesTitle').textContent = notes.title;
    $('notesDesc').textContent = notes.description;
    setTitle('Notes');

    const toc = $('notesToc');
    toc.innerHTML = '';
    notes.sections.forEach((sec, i) => {
      const link = document.createElement('button');
      link.className = 'toc-link';
      link.textContent = sec.title;
      link.addEventListener('click', () => {
        const target = document.getElementById(`note-section-${i}`);
        if (target) {
          const headerOffset = 320;
          const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          window.scrollTo({ top, behavior: 'smooth' });
          document.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
      toc.appendChild(link);
    });

    const content = $('notesContent');
    content.innerHTML = notes.sections.map((sec, i) => {
      // Convert simple markdown to HTML (basic)
      const html = sec.content
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/^### (.*$)/gim, '<h4>$1</h4>')
        .replace(/^## (.*$)/gim, '<h4>$1</h4>')
        .replace(/^# (.*$)/gim, '<h3>$1</h3>')
        .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
        .replace(/`([^`]+)`/gim, '<code>$1</code>')
        .replace(/^\s*[-*] (.*)$/gim, '<li>$1</li>')
        .replace(/(<li>.*<\/li>\n?)+/gim, (m) => `<ul>${m}</ul>`)
        .replace(/\n\n/g, '</p><p>')
        .replace(/^/, '<p>')
        .replace(/$/, '</p>')
        .replace(/<p><h/g, '<h')
        .replace(/<\/h(\d)><\/p>/g, '</h$1>')
        .replace(/<p><ul>/g, '<ul>')
        .replace(/<\/ul><\/p>/g, '</ul>')
        .replace(/<p><\/p>/g, '');

      return `<div class="notes-section" id="note-section-${i}"><h3>${sec.title}</h3>${html}</div>`;
    }).join('');

    showScreen('notesScreen');
  }

  // ---- Test setup ----
  function openTestSetup() {
    const total = (window.QUESTIONS_DATA[state.currentCert.id] || []).length;
    const slider = $('numQuestions');
    slider.max = Math.min(total, 100);
    if (parseInt(slider.value) > total) slider.value = total;
    $('numQuestionsVal').textContent = slider.value;
    $('questionCountInfo').textContent = `You have ${total} total questions for this cert.`;

    // Make sure default is reasonable
    if (parseInt(slider.value) < 5) slider.value = Math.min(5, total);

    showScreen('testSetup');
    setTitle('Configure Test');
  }

  $('numQuestions').addEventListener('input', (e) => {
    $('numQuestionsVal').textContent = e.target.value;
  });

  // ---- Start a test ----
  function startQuiz(mode) {
    const certId = state.currentCert.id;
    const all = window.QUESTIONS_DATA[certId] || [];
    if (all.length === 0) {
      alert('No questions available.');
      return;
    }

    let numQuestions = all.length;
    let enableTimer = false;
    let instant = true;
    let shuffle = true;

    if (mode === 'test') {
      numQuestions = parseInt($('numQuestions').value);
      enableTimer = $('enableTimer').checked;
      instant = $('showInstantFeedback').checked;
      shuffle = $('shuffleOrder').checked;
    } else {
      instant = true;
      shuffle = false;
      enableTimer = false;
    }

    let questions = [...all];
    if (shuffle) {
      for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
      }
    }
    questions = questions.slice(0, numQuestions);

    state.mode = mode;
    state.questions = questions;
    state.currentIdx = 0;
    state.answers = new Array(questions.length).fill(null);
    state.score = 0;
    state.testConfig = { numQuestions, enableTimer, instant, shuffle, startTime: Date.now() };

    if (enableTimer) {
      state.timeRemaining = numQuestions * 60;
      startTimer();
    }

    $('finishBtn').hidden = true;
    showScreen('questionScreen');
    setTitle(state.currentCert.name);
    renderQuestion();
  }

  // ---- Timer ----
  function startTimer() {
    const timerEl = $('timer');
    timerEl.hidden = false;
    updateTimerDisplay();

    state.timerInterval = setInterval(() => {
      state.timeRemaining--;
      updateTimerDisplay();
      if (state.timeRemaining <= 0) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
        finishTest();
      }
    }, 1000);
  }

  function stopTimer() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
    $('timer').hidden = true;
  }

  function updateTimerDisplay() {
    const m = Math.floor(state.timeRemaining / 60);
    const s = state.timeRemaining % 60;
    $('timerText').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

    const timerEl = $('timer');
    timerEl.classList.remove('warning', 'danger');
    if (state.timeRemaining <= 30) timerEl.classList.add('danger');
    else if (state.timeRemaining <= 60) timerEl.classList.add('warning');
  }

  // ---- Render question ----
  function renderQuestion() {
    const idx = state.currentIdx;
    const q = state.questions[idx];
    const isLast = idx === state.questions.length - 1;
    const showFeedback = state.answers[idx] !== null;

    $('progressText').textContent = `Question ${idx + 1} of ${state.questions.length}`;
    $('progressFill').style.width = `${((idx + 1) / state.questions.length) * 100}%`;

    $('questionText').textContent = q.q;

    const container = $('optionsContainer');
    container.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option';
      const letter = String.fromCharCode(65 + i);
      btn.innerHTML = `<span class="option-marker">${letter}</span><span>${opt}</span>`;

      if (showFeedback) {
        btn.disabled = true;
        if (i === q.answer) btn.classList.add('correct');
        else if (i === state.answers[idx].selected) btn.classList.add('incorrect');
      }

      btn.addEventListener('click', () => selectAnswer(i));
      container.appendChild(btn);
    });

    // Feedback
    const fb = $('feedback');
    if (showFeedback && state.testConfig.instant) {
      fb.hidden = false;
      const isCorrect = state.answers[idx].selected === q.answer;
      fb.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
      fb.innerHTML = `
        <div class="feedback-title">${isCorrect ? '✓ Correct!' : '✗ Not quite'}</div>
        <div class="feedback-text">${q.explanation}</div>
      `;
    } else if (showFeedback && !state.testConfig.instant) {
      fb.hidden = false;
      fb.className = 'feedback';
      fb.innerHTML = `<div class="feedback-title">Answer recorded</div><div class="feedback-text">Results will be shown at the end.</div>`;
    } else {
      fb.hidden = true;
    }

    // Buttons
    $('nextBtn').hidden = !showFeedback || isLast;
    $('finishBtn').hidden = !showFeedback || !isLast;
  }

  function selectAnswer(i) {
    if (state.answers[state.currentIdx] !== null) return;
    state.answers[state.currentIdx] = { selected: i };
    renderQuestion();
  }

  $('nextBtn').addEventListener('click', () => {
    if (state.currentIdx < state.questions.length - 1) {
      state.currentIdx++;
      renderQuestion();
    }
  });

  $('finishBtn').addEventListener('click', finishTest);

  // ---- Finish / Results ----
  function finishTest() {
    stopTimer();

    // Score
    let score = 0;
    state.questions.forEach((q, i) => {
      if (state.answers[i] && state.answers[i].selected === q.answer) {
        score++;
      }
    });
    state.score = score;

    const total = state.questions.length;
    const pct = Math.round((score / total) * 100);

    const duration = Math.round((Date.now() - state.testConfig.startTime) / 1000);
    recordTestResult(state.currentCert.id, score, total, duration);

    // Render
    $('scorePercent').textContent = `${pct}%`;
    $('scoreLabel').textContent = `${score} / ${total}`;
    const deg = (pct / 100) * 360;
    $('scoreCircle').style.background = `conic-gradient(var(--accent) ${deg}deg, var(--bg-3) ${deg}deg)`;

    let msg = '';
    if (pct >= 90) msg = '🎉 Outstanding! You\'re well prepared. Keep reviewing weak areas.';
    else if (pct >= 75) msg = '👏 Strong performance. A bit more practice and you\'ll be ready.';
    else if (pct >= 60) msg = '👍 Passing range, but you\'ll want to study the notes more.';
    else msg = '📚 Time to study the notes. Review the explanations and try again.';
    $('scoreMessage').textContent = msg;

    // Review
    const review = $('reviewContainer');
    review.innerHTML = '<h3 style="margin-bottom:14px;">Review</h3>';
    state.questions.forEach((q, i) => {
      const ans = state.answers[i];
      const isCorrect = ans && ans.selected === q.answer;
      const correctIdx = q.answer;
      const correctLetter = String.fromCharCode(65 + correctIdx);
      const userLetter = ans ? String.fromCharCode(65 + ans.selected) : '—';

      const div = document.createElement('div');
      div.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
      div.innerHTML = `
        <div class="review-item-header">
          <strong>Q${i + 1}</strong>
          <span>${isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>
        </div>
        <div class="q">${q.q}</div>
        <div class="ans your">Your answer: ${userLetter}. ${ans ? q.options[ans.selected] : 'No answer'}</div>
        ${!isCorrect ? `<div class="ans correct-ans">Correct: ${correctLetter}. ${q.options[correctIdx]}</div>` : ''}
        <div class="explanation">${q.explanation}</div>
      `;
      review.appendChild(div);
    });
    review.hidden = true;

    showScreen('resultsScreen');
    setTitle('Results');
  }

  $('reviewBtn').addEventListener('click', () => {
    const r = $('reviewContainer');
    r.hidden = !r.hidden;
    $('reviewBtn').textContent = r.hidden ? 'Review Answers' : 'Hide Review';
  });

  $('retakeBtn').addEventListener('click', () => {
    if (state.currentCert) {
      if (state.mode === 'test') openTestSetup();
      else startQuiz('practice');
    }
  });

  $('homeBtn').addEventListener('click', () => goHome());

  // ---- Navigation ----
  $('backBtn').addEventListener('click', () => {
    stopTimer();
    // Decide where back goes
    const cur = document.querySelector('.screen.active');
    if (!cur) return goHome();
    if (cur.id === 'questionScreen' || cur.id === 'resultsScreen' || cur.id === 'testSetup') {
      if (state.currentCert) return openCertMenu(state.currentCert);
    }
    goHome();
  });

  function goHome() {
    stopTimer();
    state.currentCert = null;
    showScreen('homeScreen');
    setTitle('Cert Mastery');
    renderHome();
  }

  // ---- Cert menu buttons ----
  $('goNotesBtn').addEventListener('click', openNotes);
  $('goPracticeBtn').addEventListener('click', () => {
    $('showInstantFeedback').checked = true;
    $('enableTimer').checked = false;
    $('shuffleOrder').checked = false;
    startQuiz('practice');
  });
  $('goTestBtn').addEventListener('click', openTestSetup);

  $('startTestBtn').addEventListener('click', () => startQuiz('test'));

  // ---- PWA Install ----
  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    $('installBanner').hidden = false;
  });

  $('installBtn').addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
    $('installBanner').hidden = true;
  });

  $('dismissInstallBtn').addEventListener('click', () => {
    $('installBanner').hidden = true;
  });

  // ---- Initial render ----
  renderHome();
})();
