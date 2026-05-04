// ==========================================
// App Controller
// ==========================================

const app = {
  currentScreen: 'splash',
  currentCategory: 'fruits',
  currentCardIndex: 0,
  cardFlipped: false,
  quizScore: 0,
  quizTotal: 0,
  quizQuestions: [],
  quizIndex: 0,
  currentNumber: 1,

  enter() {
    this.go('home');
  },

  go(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screen + '-screen').classList.add('active');
    this.currentScreen = screen;

    // Init modules
    if (screen === 'flashcards') this.initFlashcards();
    if (screen === 'numbers') this.showNumber(1);
    if (screen === 'colors') this.initColors();
    if (screen === 'animals') this.initAnimals();
    if (screen === 'shapes') this.initShapes();
    if (screen === 'quiz') this.startQuiz();
    if (screen === 'home') applyI18N();
  },

  toggleLang() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    applyI18N();
    // Refresh current module
    if (this.currentScreen === 'flashcards') this.renderCard();
    if (this.currentScreen === 'numbers') this.showNumber(this.currentNumber);
    if (this.currentScreen === 'colors') this.initColors();
    if (this.currentScreen === 'shapes') this.initShapes();
  },

  // ---- Flashcards ----
  initFlashcards() {
    this.currentCardIndex = 0;
    this.cardFlipped = false;
    this.renderCard();
  },

  setCategory(cat, btn) {
    this.currentCategory = cat;
    this.currentCardIndex = 0;
    this.cardFlipped = false;
    document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    this.renderCard();
  },

  renderCard() {
    const cards = FLASHCARD_DATA[this.currentCategory];
    if (!cards || !cards.length) return;
    const card = cards[this.currentCardIndex];
    const fc = document.getElementById('flashcard');
    fc.classList.remove('flipped');
    this.cardFlipped = false;

    document.getElementById('fc-emoji').textContent = card.emoji;
    document.getElementById('fc-word').textContent = currentLang === 'zh' ? card.zh : card.en;
    document.getElementById('fc-emoji-back').textContent = card.emoji;
    document.getElementById('fc-word-back').textContent = currentLang === 'zh' ? card.en : card.zh;
    document.getElementById('fc-phonetic').textContent =
      currentLang === 'zh' ? `/${card.phonetic}/` : card.pinyin;
    document.getElementById('fc-progress').textContent =
      `${this.currentCardIndex + 1} / ${cards.length}`;
  },

  flipCard() {
    const fc = document.getElementById('flashcard');
    this.cardFlipped = !this.cardFlipped;
    fc.classList.toggle('flipped');
  },

  nextCard() {
    const cards = FLASHCARD_DATA[this.currentCategory];
    this.currentCardIndex = (this.currentCardIndex + 1) % cards.length;
    this.renderCard();
  },

  prevCard() {
    const cards = FLASHCARD_DATA[this.currentCategory];
    this.currentCardIndex = (this.currentCardIndex - 1 + cards.length) % cards.length;
    this.renderCard();
  },

  // ---- Numbers ----
  showNumber(n) {
    this.currentNumber = n;
    const data = NUMBER_DATA[n];
    document.getElementById('big-number').textContent = n;
    document.getElementById('number-word').textContent =
      `${data.zh} / ${data.en}`;

    const dotsContainer = document.getElementById('number-dots');
    dotsContainer.innerHTML = '';
    for (let i = 0; i < n; i++) {
      const span = document.createElement('span');
      span.className = 'dot';
      span.textContent = data.emoji;
      dotsContainer.appendChild(span);
    }

    document.querySelectorAll('.num-btn').forEach(b => {
      b.classList.toggle('active-num', parseInt(b.textContent) === n);
    });
  },

  startCounting() {
    const count = Math.floor(Math.random() * 8) + 2;
    const emoji = ['🍎', '🌟', '🐱', '🌸', '🐠', '🦋', '🍬', '🎈', '🍕', '🎵'][Math.floor(Math.random() * 10)];
    let html = `<div class="count-emoji-row">${emoji.repeat(count)}</div>`;
    html += `<div class="count-question">${t('how_many')}</div>`;
    html += `<div class="quiz-options">`;
    const options = this._uniqueRandom(count, 4, 1, 10);
    options.forEach(opt => {
      html += `<button class="quiz-opt" onclick="app.checkCount(${opt}, ${count}, this)">${opt}</button>`;
    });
    html += `</div>`;
    document.querySelector('.counting-game').innerHTML = html;
  },

  checkCount(answer, correct, btn) {
    const btns = document.querySelectorAll('.counting-game .quiz-opt');
    btns.forEach(b => b.disabled = true);
    if (answer === correct) {
      btn.classList.add('correct-opt');
    } else {
      btn.classList.add('wrong-opt');
      btns.forEach(b => { if (parseInt(b.textContent) === correct) b.classList.add('correct-opt'); });
    }
    setTimeout(() => this.startCounting(), 1500);
  },

  _uniqueRandom(answer, count, min, max) {
    const set = new Set([answer]);
    while (set.size < count) {
      set.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return Array.from(set).sort(() => Math.random() - 0.5);
  },

  // ---- Colors ----
  initColors() {
    const grid = document.getElementById('color-grid');
    grid.innerHTML = '';
    COLOR_DATA.forEach((c, i) => {
      const btn = document.createElement('button');
      btn.className = 'color-swatch';
      btn.style.background = c.hex;
      if (c.en === 'White') btn.style.border = '2px solid #ccc';
      btn.onclick = () => this.showColor(i);
      grid.appendChild(btn);
    });
    this.showColor(0);
  },

  showColor(index) {
    const c = COLOR_DATA[index];
    document.getElementById('color-circle').style.background = c.hex;
    document.getElementById('color-name').textContent =
      `${c.zh} / ${c.en}`;
  },

  startColorQuiz() {
    const idx = Math.floor(Math.random() * COLOR_DATA.length);
    const correct = COLOR_DATA[idx];
    document.getElementById('color-circle').style.background = correct.hex;
    document.getElementById('color-name').textContent = '❓';

    const options = this._pickRandom(COLOR_DATA, idx, 3);
    const grid = document.getElementById('color-grid');
    grid.innerHTML = '';
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'color-swatch quiz-color-opt';
      btn.textContent = currentLang === 'zh' ? opt.zh : opt.en;
      btn.style.background = opt.hex;
      if (opt.en === 'White') btn.style.color = '#333';
      btn.onclick = () => {
        const allBtns = grid.querySelectorAll('.color-swatch');
        allBtns.forEach(b => b.disabled = true);
        if (opt === correct) {
          btn.classList.add('correct-opt');
          document.getElementById('color-name').textContent = `${correct.zh} / ${correct.en}`;
        } else {
          btn.classList.add('wrong-opt');
        }
        setTimeout(() => this.initColors(), 1500);
      };
      grid.appendChild(btn);
    });
  },

  _pickRandom(arr, correctIdx, count) {
    const correct = arr[correctIdx];
    const others = arr.filter((_, i) => i !== correctIdx);
    const shuffled = others.sort(() => Math.random() - 0.5).slice(0, count - 1);
    return [correct, ...shuffled].sort(() => Math.random() - 0.5);
  },

  // ---- Animals ----
  initAnimals() {
    const grid = document.getElementById('animal-grid');
    grid.innerHTML = '';
    document.getElementById('animal-detail').classList.add('hidden');
    ANIMAL_DATA.forEach((a, i) => {
      const btn = document.createElement('button');
      btn.className = 'animal-card';
      btn.innerHTML = `<span class="animal-emoji">${a.emoji}</span><span class="animal-name">${currentLang === 'zh' ? a.zh : a.en}</span>`;
      btn.onclick = () => this.showAnimal(i);
      grid.appendChild(btn);
    });
  },

  showAnimal(index) {
    const a = ANIMAL_DATA[index];
    document.getElementById('animal-grid').classList.add('hidden');
    const detail = document.getElementById('animal-detail');
    detail.classList.remove('hidden');
    document.getElementById('animal-big-emoji').textContent = a.emoji;
    document.getElementById('animal-detail-name').textContent =
      `${a.zh} / ${a.en}`;
    document.getElementById('animal-sound').textContent =
      `${currentLang === 'zh' ? a.sound_zh : a.sound_en}`;
  },

  hideAnimalDetail() {
    document.getElementById('animal-detail').classList.add('hidden');
    document.getElementById('animal-grid').classList.remove('hidden');
  },

  // ---- Shapes ----
  initShapes() {
    const grid = document.getElementById('shape-grid');
    grid.innerHTML = '';
    SHAPE_DATA.forEach((s, i) => {
      const btn = document.createElement('button');
      btn.className = 'shape-btn';
      btn.innerHTML = `<svg width="50" height="50" viewBox="0 0 120 120" fill="#6C5CE7" stroke="#fff" stroke-width="2">${s.svg}</svg><br><small>${currentLang === 'zh' ? s.zh : s.en}</small>`;
      btn.onclick = () => this.showShape(i);
      grid.appendChild(btn);
    });
    this.showShape(0);
  },

  showShape(index) {
    const s = SHAPE_DATA[index];
    document.getElementById('big-shape').innerHTML =
      `<svg width="140" height="140" viewBox="0 0 120 120" fill="#6C5CE7" stroke="#fff" stroke-width="3">${s.svg}</svg>`;
    document.getElementById('shape-name').textContent = `${s.zh} / ${s.en}`;
  },

  // ---- Quiz ----
  startQuiz() {
    this.quizScore = 0;
    this.quizTotal = 8;
    this.quizIndex = 0;
    this.quizQuestions = this._generateQuizQuestions(this.quizTotal);
    document.getElementById('quiz-area').classList.remove('hidden');
    document.getElementById('quiz-complete').classList.add('hidden');
    document.getElementById('quiz-score').textContent = '0';
    this._showQuizQuestion();
  },

  _generateQuizQuestions(n) {
    const types = ['count', 'animal', 'color', 'shape'];
    const questions = [];
    for (let i = 0; i < n; i++) {
      const type = types[i % types.length];
      questions.push(this._makeQuestion(type));
    }
    return questions.sort(() => Math.random() - 0.5);
  },

  _makeQuestion(type) {
    if (type === 'count') {
      const count = Math.floor(Math.random() * 6) + 2;
      const emoji = ['🍎', '🌟', '🐱', '🌸', '🐠'][Math.floor(Math.random() * 5)];
      const options = this._uniqueRandom(count, 4, 1, 9);
      return {
        type: 'count',
        question: t('quiz_question_count', { emoji }),
        visual: emoji.repeat(count),
        options: options.map(String),
        answer: String(count),
      };
    }
    if (type === 'animal') {
      const idx = Math.floor(Math.random() * ANIMAL_DATA.length);
      const animal = ANIMAL_DATA[idx];
      const others = ANIMAL_DATA.filter((_, i) => i !== idx).sort(() => Math.random() - 0.5).slice(0, 3);
      const options = [animal, ...others].sort(() => Math.random() - 0.5);
      return {
        type: 'animal',
        question: t('quiz_question_animal'),
        visual: animal.emoji,
        options: options.map(a => currentLang === 'zh' ? a.zh : a.en),
        answer: currentLang === 'zh' ? animal.zh : animal.en,
      };
    }
    if (type === 'color') {
      const idx = Math.floor(Math.random() * COLOR_DATA.length);
      const color = COLOR_DATA[idx];
      const others = COLOR_DATA.filter((_, i) => i !== idx).sort(() => Math.random() - 0.5).slice(0, 3);
      const options = [color, ...others].sort(() => Math.random() - 0.5);
      return {
        type: 'color',
        question: t('quiz_question_color'),
        visual: `<div style="width:80px;height:80px;border-radius:50%;background:${color.hex};margin:0 auto;border:3px solid #fff"></div>`,
        options: options.map(c => currentLang === 'zh' ? c.zh : c.en),
        answer: currentLang === 'zh' ? color.zh : color.en,
      };
    }
    if (type === 'shape') {
      const idx = Math.floor(Math.random() * SHAPE_DATA.length);
      const shape = SHAPE_DATA[idx];
      const others = SHAPE_DATA.filter((_, i) => i !== idx).sort(() => Math.random() - 0.5).slice(0, 3);
      const options = [shape, ...others].sort(() => Math.random() - 0.5);
      return {
        type: 'shape',
        question: t('quiz_question_shape'),
        visual: `<svg width="80" height="80" viewBox="0 0 120 120" fill="#6C5CE7">${shape.svg}</svg>`,
        options: options.map(s => currentLang === 'zh' ? s.zh : s.en),
        answer: currentLang === 'zh' ? shape.zh : shape.en,
      };
    }
  },

  _showQuizQuestion() {
    if (this.quizIndex >= this.quizQuestions.length) {
      this._endQuiz();
      return;
    }
    const q = this.quizQuestions[this.quizIndex];
    document.getElementById('quiz-question').textContent = q.question;
    if (q.type === 'count' || q.type === 'animal') {
      document.getElementById('quiz-emoji').textContent = q.visual;
      document.getElementById('quiz-emoji').innerHTML = q.visual;
    } else {
      document.getElementById('quiz-emoji').innerHTML = q.visual;
    }
    const optsEl = document.getElementById('quiz-options');
    optsEl.innerHTML = '';
    document.getElementById('quiz-feedback').classList.add('hidden');

    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt';
      btn.textContent = opt;
      btn.onclick = () => this._answerQuiz(opt, q.answer, btn);
      optsEl.appendChild(btn);
    });
  },

  _answerQuiz(chosen, answer, btn) {
    const btns = document.querySelectorAll('#quiz-options .quiz-opt');
    btns.forEach(b => b.disabled = true);
    const feedback = document.getElementById('quiz-feedback');
    feedback.classList.remove('hidden');

    if (chosen === answer) {
      btn.classList.add('correct-opt');
      feedback.textContent = t('correct');
      this.quizScore++;
      document.getElementById('quiz-score').textContent = this.quizScore;
    } else {
      btn.classList.add('wrong-opt');
      btns.forEach(b => { if (b.textContent === answer) b.classList.add('correct-opt'); });
      feedback.textContent = t('correct_answer', { answer });
    }

    this.quizIndex++;
    setTimeout(() => this._showQuizQuestion(), 1800);
  },

  _endQuiz() {
    document.getElementById('quiz-area').classList.add('hidden');
    document.getElementById('quiz-complete').classList.remove('hidden');
    document.getElementById('quiz-result-text').textContent =
      t('score_msg', { correct: this.quizScore, total: this.quizTotal });
  },
};
