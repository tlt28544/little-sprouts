// ==========================================
// Internationalization
// ==========================================

const I18N = {
  zh: {
    start: '开始学习',
    greeting: '你好！今天学什么？',
    mod_flashcards: '识字卡片',
    mod_numbers: '数字乐园',
    mod_colors: '颜色世界',
    mod_animals: '动物王国',
    mod_shapes: '形状认知',
    mod_quiz: '趣味问答',
    mod_stories: '绘本故事',
    tap_flip: '👆 点击翻转',
    cat_fruits: '水果',
    cat_body: '身体',
    cat_family: '家庭',
    cat_nature: '自然',
    cat_food: '食物',
    counting_game: '开始数数游戏',
    color_game: '颜色问答',
    back: '返回',
    back_to_list: '返回书架',
    pages: '页',
    well_done: '太棒了！',
    play_again: '再玩一次',
    quiz_question_count: '这里有几个{emoji}？',
    quiz_question_color: '这是什么颜色？',
    quiz_question_animal: '这是什么动物？',
    quiz_question_shape: '这是什么形状？',
    score_msg: '你答对了 {correct}/{total} 题！',
    correct: '✅ 答对了！',
    wrong: '❌ 再想想哦～',
    correct_answer: '正确答案是：{answer}',
    how_many: '几个？',
  },
  en: {
    start: 'Start Learning',
    greeting: "Hello! What shall we learn today?",
    mod_flashcards: 'Flashcards',
    mod_numbers: 'Numbers',
    mod_colors: 'Colors',
    mod_animals: 'Animals',
    mod_shapes: 'Shapes',
    mod_quiz: 'Quiz Time',
    mod_stories: 'Storybooks',
    tap_flip: '👆 Tap to flip',
    cat_fruits: 'Fruits',
    cat_body: 'Body',
    cat_family: 'Family',
    cat_nature: 'Nature',
    cat_food: 'Food',
    counting_game: 'Counting Game',
    color_game: 'Color Quiz',
    back: 'Back',
    back_to_list: 'Back to Bookshelf',
    pages: 'pages',
    well_done: 'Well done!',
    play_again: 'Play again',
    quiz_question_count: 'How many {emoji} do you see?',
    quiz_question_color: 'What color is this?',
    quiz_question_animal: 'What animal is this?',
    quiz_question_shape: 'What shape is this?',
    score_msg: 'You got {correct}/{total} correct!',
    correct: '✅ Correct!',
    wrong: '❌ Try again!',
    correct_answer: 'The answer is: {answer}',
    how_many: 'How many?',
  }
};

let currentLang = 'zh';

function t(key, replacements) {
  let str = I18N[currentLang][key] || I18N['en'][key] || key;
  if (replacements) {
    Object.keys(replacements).forEach(k => {
      str = str.replace(`{${k}}`, replacements[k]);
    });
  }
  return str;
}

function applyI18N() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[id^="lang-label"]').forEach(el => {
    el.textContent = currentLang === 'zh' ? 'EN' : '中文';
  });
}
