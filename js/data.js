// ==========================================
// Bilingual Content Data
// ==========================================

const FLASHCARD_DATA = {
  fruits: [
    { emoji: '🍎', zh: '苹果', en: 'Apple', pinyin: 'píng guǒ', phonetic: 'AP-uhl' },
    { emoji: '🍌', zh: '香蕉', en: 'Banana', pinyin: 'xiāng jiāo', phonetic: 'buh-NA-nuh' },
    { emoji: '🍊', zh: '橘子', en: 'Orange', pinyin: 'jú zi', phonetic: 'OR-inj' },
    { emoji: '🍇', zh: '葡萄', en: 'Grape', pinyin: 'pú tao', phonetic: 'GRAYP' },
    { emoji: '🍓', zh: '草莓', en: 'Strawberry', pinyin: 'cǎo méi', phonetic: 'STRAW-bair-ee' },
    { emoji: '🍉', zh: '西瓜', en: 'Watermelon', pinyin: 'xī guā', phonetic: 'WAW-tair-mel-uhn' },
    { emoji: '🍑', zh: '桃子', en: 'Peach', pinyin: 'táo zi', phonetic: 'PEECH' },
    { emoji: '🍒', zh: '樱桃', en: 'Cherry', pinyin: 'yīng tao', phonetic: 'CHAIR-ee' },
    { emoji: '🥝', zh: '猕猴桃', en: 'Kiwi', pinyin: 'mí hóu táo', phonetic: 'KEE-wee' },
    { emoji: '🍋', zh: '柠檬', en: 'Lemon', pinyin: 'níng méng', phonetic: 'LEM-uhn' },
  ],
  body: [
    { emoji: '👀', zh: '眼睛', en: 'Eyes', pinyin: 'yǎn jing', phonetic: 'YZ' },
    { emoji: '👃', zh: '鼻子', en: 'Nose', pinyin: 'bí zi', phonetic: 'NOHZ' },
    { emoji: '👄', zh: '嘴巴', en: 'Mouth', pinyin: 'zuǐ ba', phonetic: 'MOWTH' },
    { emoji: '👂', zh: '耳朵', en: 'Ears', pinyin: 'ěr duo', phonetic: 'EERZ' },
    { emoji: '🤚', zh: '手', en: 'Hand', pinyin: 'shǒu', phonetic: 'HAND' },
    { emoji: '🦶', zh: '脚', en: 'Foot', pinyin: 'jiǎo', phonetic: 'FUT' },
    { emoji: '🦷', zh: '牙齿', en: 'Teeth', pinyin: 'yá chǐ', phonetic: 'TEETH' },
    { emoji: '💆', zh: '头', en: 'Head', pinyin: 'tóu', phonetic: 'HED' },
    { emoji: '🫀', zh: '心脏', en: 'Heart', pinyin: 'xīn zàng', phonetic: 'HART' },
    { emoji: '🦴', zh: '骨头', en: 'Bone', pinyin: 'gǔ tou', phonetic: 'BOHN' },
  ],
  family: [
    { emoji: '👨', zh: '爸爸', en: 'Dad', pinyin: 'bà ba', phonetic: 'DAD' },
    { emoji: '👩', zh: '妈妈', en: 'Mom', pinyin: 'mā ma', phonetic: 'MOM' },
    { emoji: '👴', zh: '爷爷', en: 'Grandpa', pinyin: 'yé ye', phonetic: 'GRAN-pah' },
    { emoji: '👵', zh: '奶奶', en: 'Grandma', pinyin: 'nǎi nai', phonetic: 'GRAN-mah' },
    { emoji: '👦', zh: '哥哥', en: 'Brother', pinyin: 'gē ge', phonetic: 'BRUTH-er' },
    { emoji: '👧', zh: '姐姐', en: 'Sister', pinyin: 'jiě jie', phonetic: 'SIS-tair' },
    { emoji: '👶', zh: '宝宝', en: 'Baby', pinyin: 'bǎo bao', phonetic: 'BAY-bee' },
    { emoji: '👨‍👩‍👧‍👦', zh: '家庭', en: 'Family', pinyin: 'jiā tíng', phonetic: 'FAM-uh-lee' },
    { emoji: '👶🏻', zh: '弟弟', en: 'Little Brother', pinyin: 'dì di', phonetic: 'LID-uhl BRUTH-er' },
    { emoji: '👧🏻', zh: '妹妹', en: 'Little Sister', pinyin: 'mèi mei', phonetic: 'LID-uhl SIS-tair' },
  ],
  nature: [
    { emoji: '☀️', zh: '太阳', en: 'Sun', pinyin: 'tài yáng', phonetic: 'SUN' },
    { emoji: '🌙', zh: '月亮', en: 'Moon', pinyin: 'yuè liang', phonetic: 'MOON' },
    { emoji: '⭐', zh: '星星', en: 'Star', pinyin: 'xīng xing', phonetic: 'STAR' },
    { emoji: '🌈', zh: '彩虹', en: 'Rainbow', pinyin: 'cǎi hóng', phonetic: 'RAYN-boh' },
    { emoji: '🌊', zh: '海洋', en: 'Ocean', pinyin: 'hǎi yáng', phonetic: 'OH-shuhn' },
    { emoji: '⛰️', zh: '山', en: 'Mountain', pinyin: 'shān', phonetic: 'MOUN-tuhn' },
    { emoji: '🌧️', zh: '雨', en: 'Rain', pinyin: 'yǔ', phonetic: 'RAYN' },
    { emoji: '❄️', zh: '雪', en: 'Snow', pinyin: 'xuě', phonetic: 'SNOH' },
    { emoji: '🌸', zh: '花', en: 'Flower', pinyin: 'huā', phonetic: 'FLOW-air' },
    { emoji: '🌳', zh: '树', en: 'Tree', pinyin: 'shù', phonetic: 'TREE' },
  ],
  food: [
    { emoji: '🍚', zh: '米饭', en: 'Rice', pinyin: 'mǐ fàn', phonetic: 'RYS' },
    { emoji: '🍜', zh: '面条', en: 'Noodles', pinyin: 'miàn tiáo', phonetic: 'NOO-duhlz' },
    { emoji: '🥟', zh: '饺子', en: 'Dumpling', pinyin: 'jiǎo zi', phonetic: 'DUMP-ling' },
    { emoji: '🍞', zh: '面包', en: 'Bread', pinyin: 'miàn bāo', phonetic: 'BRED' },
    { emoji: '🥚', zh: '鸡蛋', en: 'Egg', pinyin: 'jī dàn', phonetic: 'EG' },
    { emoji: '🥛', zh: '牛奶', en: 'Milk', pinyin: 'niú nǎi', phonetic: 'MILK' },
    { emoji: '🍦', zh: '冰淇淋', en: 'Ice Cream', pinyin: 'bīng qí lín', phonetic: 'YS KREEM' },
    { emoji: '🍕', zh: '披萨', en: 'Pizza', pinyin: 'pī sà', phonetic: 'PEET-suh' },
    { emoji: '🥗', zh: '沙拉', en: 'Salad', pinyin: 'shā lā', phonetic: 'SAL-uhd' },
    { emoji: '🍵', zh: '茶', en: 'Tea', pinyin: 'chá', phonetic: 'TEE' },
  ],
};

const NUMBER_DATA = {
  1:  { zh: '一', en: 'One',   emoji: '🐻' },
  2:  { zh: '二', en: 'Two',   emoji: '🐥' },
  3:  { zh: '三', en: 'Three', emoji: '🐷' },
  4:  { zh: '四', en: 'Four',  emoji: '🐸' },
  5:  { zh: '五', en: 'Five',  emoji: '🐵' },
  6:  { zh: '六', en: 'Six',   emoji: '🐟' },
  7:  { zh: '七', en: 'Seven', emoji: '🐝' },
  8:  { zh: '八', en: 'Eight', emoji: '🐰' },
  9:  { zh: '九', en: 'Nine',  emoji: '🦋' },
  10: { zh: '十', en: 'Ten',   emoji: '🌟' },
};

const COLOR_DATA = [
  { zh: '红色', en: 'Red',    hex: '#E74C3C' },
  { zh: '橙色', en: 'Orange', hex: '#E67E22' },
  { zh: '黄色', en: 'Yellow', hex: '#F1C40F' },
  { zh: '绿色', en: 'Green',  hex: '#2ECC71' },
  { zh: '蓝色', en: 'Blue',   hex: '#3498DB' },
  { zh: '紫色', en: 'Purple', hex: '#9B59B6' },
  { zh: '粉色', en: 'Pink',   hex: '#E91E8C' },
  { zh: '棕色', en: 'Brown',  hex: '#8B6914' },
  { zh: '黑色', en: 'Black',  hex: '#2C3E50' },
  { zh: '白色', en: 'White',  hex: '#ECF0F1' },
  { zh: '灰色', en: 'Gray',   hex: '#95A5A6' },
  { zh: '金色', en: 'Gold',   hex: '#D4AC0D' },
];

const ANIMAL_DATA = [
  { emoji: '🐱', zh: '猫',   en: 'Cat',   sound_zh: '喵喵', sound_en: 'Meow' },
  { emoji: '🐶', zh: '狗',   en: 'Dog',   sound_zh: '汪汪', sound_en: 'Woof' },
  { emoji: '🐮', zh: '牛',   en: 'Cow',   sound_zh: '哞哞', sound_en: 'Moo' },
  { emoji: '🐷', zh: '猪',   en: 'Pig',   sound_zh: '哼哼', sound_en: 'Oink' },
  { emoji: '🐔', zh: '鸡',   en: 'Chicken', sound_zh: '咯咯', sound_en: 'Cluck' },
  { emoji: '🐸', zh: '青蛙', en: 'Frog',  sound_zh: '呱呱', sound_en: 'Ribbit' },
  { emoji: '🦁', zh: '狮子', en: 'Lion',  sound_zh: '吼',  sound_en: 'Roar' },
  { emoji: '🐘', zh: '大象', en: 'Elephant', sound_zh: '(甩鼻子)', sound_en: 'Trumpet' },
  { emoji: '🐒', zh: '猴子', en: 'Monkey', sound_zh: '吱吱', sound_en: 'Ooh ooh' },
  { emoji: '🐰', zh: '兔子', en: 'Rabbit', sound_zh: '(蹦蹦跳)', sound_en: 'Hop hop' },
  { emoji: '🐟', zh: '鱼',   en: 'Fish',  sound_zh: '(吐泡泡)', sound_en: 'Blub blub' },
  { emoji: '🦋', zh: '蝴蝶', en: 'Butterfly', sound_zh: '(翩翩飞)', sound_en: 'Flutter' },
  { emoji: '🐢', zh: '乌龟', en: 'Turtle', sound_zh: '(慢吞吞)', sound_en: 'Slow and steady' },
  { emoji: '🐧', zh: '企鹅', en: 'Penguin', sound_zh: '(摇摇摆)', sound_en: 'Waddle waddle' },
  { emoji: '🦊', zh: '狐狸', en: 'Fox',   sound_zh: '(偷偷看)', sound_en: 'What does the fox say?' },
  { emoji: '🐼', zh: '熊猫', en: 'Panda', sound_zh: '(啃竹子)', sound_en: 'Nom nom' },
];

const SHAPE_DATA = [
  { zh: '圆形',   en: 'Circle',   svg: '<circle cx="60" cy="60" r="50" />' },
  { zh: '正方形', en: 'Square',   svg: '<rect x="10" y="10" width="100" height="100" />' },
  { zh: '三角形', en: 'Triangle', svg: '<polygon points="60,10 110,110 10,110" />' },
  { zh: '长方形', en: 'Rectangle', svg: '<rect x="5" y="25" width="110" height="70" />' },
  { zh: '菱形',   en: 'Diamond',  svg: '<polygon points="60,5 115,60 60,115 5,60" />' },
  { zh: '椭圆形', en: 'Oval',     svg: '<ellipse cx="60" cy="60" rx="55" ry="35" />' },
  { zh: '五角星', en: 'Star',     svg: '<polygon points="60,5 73,42 112,42 80,65 91,102 60,80 29,102 40,65 8,42 47,42" />' },
  { zh: '心形',   en: 'Heart',    svg: '<path d="M60,100 C10,60 0,20 30,20 C45,20 55,35 60,45 C65,35 75,20 90,20 C120,20 110,60 60,100Z" />' },
];

// ==========================================
// Picture Book Stories
// ==========================================

// SVG illustration helper — rich composed scenes
const SCENE = {
  // Pipi Bear Birthday
  'birthday-1': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <!-- Room -->
      <rect x="0" y="0" width="400" height="260" fill="#E8F5E9" rx="16"/>
      <rect x="0" y="180" width="400" height="80" fill="#A5D6A7" rx="0"/>
      <!-- Window -->
      <rect x="260" y="30" width="100" height="80" fill="#B3E5FC" rx="8" stroke="#8D6E63" stroke-width="4"/>
      <line x1="310" y1="30" x2="310" y2="110" stroke="#8D6E63" stroke-width="3"/>
      <line x1="260" y1="70" x2="360" y2="70" stroke="#8D6E63" stroke-width="3"/>
      <!-- Sun rays -->
      <circle cx="340" cy="50" r="18" fill="#FDD835" opacity="0.8"/>
      <line x1="260" y1="80" x2="220" y2="100" stroke="#FDD835" stroke-width="2" opacity="0.5"/>
      <line x1="280" y1="90" x2="240" y2="120" stroke="#FDD835" stroke-width="2" opacity="0.5"/>
      <!-- Bed -->
      <rect x="20" y="120" width="160" height="60" fill="#F8BBD0" rx="8"/>
      <rect x="20" y="110" width="50" height="40" fill="#F48FB1" rx="8"/>
      <!-- Bear -->
      <circle cx="120" cy="95" r="28" fill="#8D6E63"/>
      <circle cx="120" cy="100" r="20" fill="#A1887F"/>
      <circle cx="112" cy="90" r="5" fill="#3E2723"/>
      <circle cx="128" cy="90" r="5" fill="#3E2723"/>
      <ellipse cx="120" cy="98" rx="6" ry="4" fill="#3E2723"/>
      <path d="M115 103 Q120 108 125 103" stroke="#3E2723" fill="none" stroke-width="2"/>
      <!-- Ears -->
      <circle cx="96" cy="78" r="10" fill="#8D6E63"/>
      <circle cx="144" cy="78" r="10" fill="#8D6E63"/>
      <circle cx="96" cy="78" r="6" fill="#A1887F"/>
      <circle cx="144" cy="78" r="6" fill="#A1887F"/>
      <!-- Sparkles -->
      <text x="180" y="80" font-size="20">✨</text>
      <text x="200" y="60" font-size="16">✨</text>
      <!-- Calendar on wall -->
      <rect x="30" y="30" width="40" height="50" fill="#fff" rx="4" stroke="#ccc"/>
      <rect x="30" y="30" width="40" height="15" fill="#E53935" rx="4"/>
      <text x="50" y="62" text-anchor="middle" font-size="12" fill="#333" font-weight="bold">🎁</text>
    </svg>`,

  'birthday-2': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#E3F2FD" rx="16"/>
      <rect x="0" y="180" width="400" height="80" fill="#90CAF9"/>
      <!-- Bear holding letter -->
      <circle cx="200" cy="120" r="40" fill="#8D6E63"/>
      <circle cx="200" cy="128" r="28" fill="#A1887F"/>
      <circle cx="188" cy="110" r="7" fill="#3E2723"/>
      <circle cx="212" cy="110" r="7" fill="#3E2723"/>
      <ellipse cx="200" cy="122" rx="8" ry="5" fill="#3E2723"/>
      <path d="M192 130 Q200 138 208 130" stroke="#3E2723" fill="none" stroke-width="2.5"/>
      <circle cx="170" cy="92" r="14" fill="#8D6E63"/>
      <circle cx="230" cy="92" r="14" fill="#8D6E63"/>
      <circle cx="170" cy="92" r="8" fill="#A1887F"/>
      <circle cx="230" cy="92" r="8" fill="#A1887F"/>
      <!-- Body -->
      <ellipse cx="200" cy="180" rx="35" ry="25" fill="#8D6E63"/>
      <!-- Envelope -->
      <rect x="240" y="130" width="50" height="35" fill="#FFF9C4" rx="4" stroke="#F9A825" stroke-width="2"/>
      <polygon points="240,130 265,150 290,130" fill="#FFE082" stroke="#F9A825" stroke-width="2"/>
      <text x="265" y="155" font-size="14" text-anchor="middle">Invite</text>
      <!-- Sparkles -->
      <text x="80" y="80" font-size="24">✨</text>
      <text x="300" y="70" font-size="20">✨</text>
      <text x="140" y="50" font-size="18">💌</text>
      <text x="280" y="50" font-size="18">💌</text>
    </svg>`,

  'birthday-3': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#FFF8E1" rx="16"/>
      <rect x="0" y="180" width="400" height="80" fill="#C8E6C9"/>
      <!-- Trees -->
      <circle cx="50" cy="100" r="35" fill="#66BB6A"/>
      <rect x="45" y="130" width="10" height="50" fill="#795548"/>
      <circle cx="350" cy="100" r="35" fill="#66BB6A"/>
      <rect x="345" y="130" width="10" height="50" fill="#795548"/>
      <!-- Path -->
      <ellipse cx="200" cy="220" rx="120" ry="15" fill="#D7CCC8"/>
      <!-- Bear -->
      <circle cx="130" cy="140" r="22" fill="#8D6E63"/>
      <circle cx="130" cy="146" r="15" fill="#A1887F"/>
      <circle cx="123" cy="135" r="4" fill="#3E2723"/>
      <circle cx="137" cy="135" r="4" fill="#3E2723"/>
      <ellipse cx="130" cy="143" rx="5" ry="3" fill="#3E2723"/>
      <circle cx="113" cy="125" r="7" fill="#8D6E63"/>
      <circle cx="147" cy="125" r="7" fill="#8D6E63"/>
      <!-- Frog -->
      <circle cx="200" cy="155" r="18" fill="#4CAF50"/>
      <circle cx="200" cy="150" r="13" fill="#66BB6A"/>
      <circle cx="193" cy="146" r="5" fill="#fff"/>
      <circle cx="207" cy="146" r="5" fill="#fff"/>
      <circle cx="193" cy="146" r="3" fill="#333"/>
      <circle cx="207" cy="146" r="3" fill="#333"/>
      <path d="M190 155 Q200 162 210 155" stroke="#333" fill="none" stroke-width="1.5"/>
      <!-- Rabbit -->
      <circle cx="270" cy="155" r="18" fill="#F5F5F5"/>
      <ellipse cx="263" cy="130" rx="5" ry="16" fill="#F5F5F5"/>
      <ellipse cx="277" cy="130" rx="5" ry="16" fill="#F5F5F5"/>
      <ellipse cx="263" cy="130" rx="3" ry="12" fill="#F8BBD0"/>
      <ellipse cx="277" cy="130" rx="3" ry="12" fill="#F8BBD0"/>
      <circle cx="264" cy="151" r="4" fill="#333"/>
      <circle cx="276" cy="151" r="4" fill="#333"/>
      <ellipse cx="270" cy="158" rx="4" ry="2.5" fill="#F8BBD0"/>
      <!-- Fox -->
      <circle cx="340" cy="155" r="18" fill="#FF8A65"/>
      <circle cx="340" cy="160" r="12" fill="#FFCC80"/>
      <polygon points="330,138 333,155 340,148 347,155 350,138" fill="#FF8A65"/>
      <circle cx="334" cy="155" r="3" fill="#333"/>
      <circle cx="346" cy="155" r="3" fill="#333"/>
      <!-- Speech bubble -->
      <rect x="60" y="40" width="130" height="45" fill="#fff" rx="20" stroke="#8D6E63" stroke-width="2"/>
      <polygon points="120,85 130,95 140,85" fill="#fff" stroke="#8D6E63" stroke-width="2"/>
      <text x="125" y="68" text-anchor="middle" font-size="16" fill="#8D6E63">Party! 🎉</text>
    </svg>`,

  'birthday-4': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#FCE4EC" rx="16"/>
      <rect x="0" y="180" width="400" height="80" fill="#F8BBD0"/>
      <!-- Banner -->
      <rect x="30" y="20" width="340" height="30" fill="#E91E63" rx="4"/>
      <text x="200" y="42" text-anchor="middle" font-size="16" fill="#fff" font-weight="bold">🎂 HAPPY BIRTHDAY 🎂</text>
      <!-- Balloons -->
      <ellipse cx="60" cy="90" rx="18" ry="22" fill="#E53935" opacity="0.85"/>
      <line x1="60" y1="112" x2="60" y2="140" stroke="#888" stroke-width="1"/>
      <ellipse cx="100" cy="80" rx="18" ry="22" fill="#2196F3" opacity="0.85"/>
      <line x1="100" y1="102" x2="100" y2="140" stroke="#888" stroke-width="1"/>
      <ellipse cx="300" cy="85" rx="18" ry="22" fill="#4CAF50" opacity="0.85"/>
      <line x1="300" y1="107" x2="300" y2="140" stroke="#888" stroke-width="1"/>
      <ellipse cx="340" cy="75" rx="18" ry="22" fill="#FF9800" opacity="0.85"/>
      <line x1="340" y1="97" x2="340" y2="140" stroke="#888" stroke-width="1"/>
      <!-- Table -->
      <rect x="100" y="170" width="200" height="10" fill="#8D6E63" rx="4"/>
      <rect x="120" y="180" width="8" height="50" fill="#795548"/>
      <rect x="272" y="180" width="8" height="50" fill="#795548"/>
      <!-- Cake -->
      <rect x="170" y="130" width="60" height="40" fill="#FFCC80" rx="6"/>
      <rect x="165" y="125" width="70" height="12" fill="#E91E63" rx="4"/>
      <rect x="180" y="115" width="40" height="15" fill="#FFCC80" rx="4"/>
      <rect x="176" y="110" width="48" height="10" fill="#7B1FA2" rx="4"/>
      <!-- Candles -->
      <rect x="195" y="95" width="3" height="18" fill="#FDD835"/>
      <ellipse cx="196" cy="92" rx="5" ry="7" fill="#FF6F00" opacity="0.8"/>
      <rect x="203" y="95" width="3" height="18" fill="#FDD835"/>
      <ellipse cx="204" cy="92" rx="5" ry="7" fill="#FF6F00" opacity="0.8"/>
      <!-- Gifts -->
      <rect x="110" y="145" width="30" height="25" fill="#7B1FA2" rx="3"/>
      <rect x="110" y="155" width="30" height="4" fill="#FDD835"/>
      <rect x="122" y="145" width="4" height="25" fill="#FDD835"/>
      <rect x="260" y="148" width="25" height="22" fill="#00BCD4" rx="3"/>
      <rect x="260" y="156" width="25" height="4" fill="#F44336"/>
      <rect x="270" y="148" width="4" height="22" fill="#F44336"/>
      <!-- Bear -->
      <circle cx="200" cy="210" r="20" fill="#8D6E63"/>
      <circle cx="200" cy="215" r="14" fill="#A1887F"/>
      <circle cx="194" cy="207" r="3.5" fill="#3E2723"/>
      <circle cx="206" cy="207" r="3.5" fill="#3E2723"/>
      <ellipse cx="200" cy="213" rx="4" ry="2.5" fill="#3E2723"/>
    </svg>`,

  'birthday-5': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#F3E5F5" rx="16"/>
      <rect x="0" y="180" width="400" height="80" fill="#E1BEE7"/>
      <!-- Confetti -->
      ${Array.from({length:20},(_,i)=>{const x=20+i*19;const c=['#E53935','#2196F3','#4CAF50','#FF9800','#9C27B0','#FDD835'][i%6];return`<rect x="${x}" y="${10+Math.sin(i)*15}" width="6" height="6" fill="${c}" transform="rotate(${i*30} ${x+3} ${13+Math.sin(i)*15})" opacity="0.7"/>`}).join('')}
      <!-- Animals in a row -->
      <!-- Bear -->
      <circle cx="100" cy="140" r="20" fill="#8D6E63"/>
      <circle cx="100" cy="146" r="14" fill="#A1887F"/>
      <circle cx="94" cy="136" r="3" fill="#3E2723"/><circle cx="106" cy="136" r="3" fill="#3E2723"/>
      <circle cx="85" cy="125" r="6" fill="#8D6E63"/><circle cx="115" cy="125" r="6" fill="#8D6E63"/>
      <!-- Cat -->
      <circle cx="160" cy="145" r="17" fill="#FF8A65"/>
      <polygon points="148,130 152,145 156,130" fill="#FF8A65"/>
      <polygon points="164,130 168,145 172,130" fill="#FF8A65"/>
      <circle cx="155" cy="142" r="2.5" fill="#333"/><circle cx="165" cy="142" r="2.5" fill="#333"/>
      <!-- Dog -->
      <circle cx="220" cy="145" r="18" fill="#A1887F"/>
      <ellipse cx="210" cy="130" rx="8" ry="12" fill="#A1887F"/>
      <ellipse cx="230" cy="130" rx="8" ry="12" fill="#A1887F"/>
      <circle cx="214" cy="142" r="3" fill="#333"/><circle cx="226" cy="142" r="3" fill="#333"/>
      <ellipse cx="220" cy="150" rx="5" ry="3" fill="#3E2723"/>
      <!-- Frog -->
      <circle cx="280" cy="150" r="16" fill="#4CAF50"/>
      <circle cx="273" cy="144" r="5" fill="#fff"/><circle cx="287" cy="144" r="5" fill="#fff"/>
      <circle cx="273" cy="144" r="3" fill="#333"/><circle cx="287" cy="144" r="3" fill="#333"/>
      <!-- Fox -->
      <circle cx="340" cy="148" r="16" fill="#FF7043"/>
      <polygon points="330,132 334,148 340,142 346,148 350,132" fill="#FF7043"/>
      <circle cx="334" cy="145" r="2.5" fill="#333"/><circle cx="346" cy="145" r="2.5" fill="#333"/>
      <!-- Party hat on bear -->
      <polygon points="85,108 100,80 115,108" fill="#E53935"/>
      <circle cx="100" cy="80" r="4" fill="#FDD835"/>
      <!-- Banner -->
      <rect x="50" y="195" width="300" height="35" fill="#fff" rx="18" opacity="0.9"/>
      <text x="200" y="218" text-anchor="middle" font-size="18" fill="#7B1FA2" font-weight="bold">🎉 Happy Birthday! 🎉</text>
    </svg>`,

  'birthday-6': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#E8F5E9" rx="16"/>
      <rect x="0" y="180" width="400" height="80" fill="#A5D6A7"/>
      <!-- Big heart group -->
      <text x="200" y="80" text-anchor="middle" font-size="60">❤️</text>
      <!-- Bear center -->
      <circle cx="200" cy="140" r="30" fill="#8D6E63"/>
      <circle cx="200" cy="148" r="22" fill="#A1887F"/>
      <circle cx="190" cy="135" r="5" fill="#3E2723"/>
      <circle cx="210" cy="135" r="5" fill="#3E2723"/>
      <ellipse cx="200" cy="145" rx="6" ry="4" fill="#3E2723"/>
      <path d="M190 152 Q200 160 210 152" stroke="#3E2723" fill="none" stroke-width="2.5"/>
      <circle cx="175" cy="115" r="10" fill="#8D6E63"/>
      <circle cx="225" cy="115" r="10" fill="#8D6E63"/>
      <!-- Small friends around -->
      <text x="80" y="130" font-size="30">🐸</text>
      <text x="310" y="130" font-size="30">🐰</text>
      <text x="120" y="200" font-size="30">🦊</text>
      <text x="260" y="200" font-size="30">🐱</text>
      <text x="190" y="230" font-size="30">🐶</text>
      <!-- Sparkles -->
      <text x="50" y="50" font-size="20">✨</text>
      <text x="340" y="50" font-size="20">✨</text>
      <text x="350" y="200" font-size="16">✨</text>
      <text x="30" y="200" font-size="16">✨</text>
    </svg>`,

  // Rain story
  'rain-1': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#B0BEC5" rx="16"/>
      <!-- Clouds -->
      <circle cx="100" cy="50" r="35" fill="#78909C"/>
      <circle cx="140" cy="45" r="40" fill="#78909C"/>
      <circle cx="180" cy="55" r="30" fill="#78909C"/>
      <circle cx="280" cy="40" r="35" fill="#78909C"/>
      <circle cx="320" cy="50" r="30" fill="#78909C"/>
      <!-- Rain -->
      ${Array.from({length:15},(_,i)=>{const x=30+i*25;const y=90+Math.sin(i*2)*20;return`<line x1="${x}" y1="${y}" x2="${x-5}" y2="${y+18}" stroke="#42A5F5" stroke-width="2" opacity="0.7"/>`}).join('')}
      <!-- House -->
      <rect x="130" y="140" width="140" height="90" fill="#BCAAA4" rx="4"/>
      <polygon points="120,140 200,80 280,140" fill="#8D6E63"/>
      <!-- Door -->
      <rect x="180" y="180" width="40" height="50" fill="#5D4037" rx="4"/>
      <circle cx="212" cy="205" r="3" fill="#FDD835"/>
      <!-- Window -->
      <rect x="148" y="155" width="25" height="25" fill="#B3E5FC" rx="2" stroke="#5D4037" stroke-width="2"/>
      <rect x="227" y="155" width="25" height="25" fill="#B3E5FC" rx="2" stroke="#5D4037" stroke-width="2"/>
      <!-- Bear at door -->
      <circle cx="200" cy="210" r="16" fill="#8D6E63"/>
      <circle cx="200" cy="215" r="11" fill="#A1887F"/>
      <circle cx="195" cy="207" r="3" fill="#3E2723"/>
      <circle cx="205" cy="207" r="3" fill="#3E2723"/>
      <!-- Puddle -->
      <ellipse cx="100" cy="245" rx="25" ry="6" fill="#64B5F6" opacity="0.5"/>
      <ellipse cx="320" cy="250" rx="20" ry="5" fill="#64B5F6" opacity="0.5"/>
    </svg>`,

  'rain-2': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#C5CAE9" rx="16"/>
      <!-- Thought bubble -->
      <ellipse cx="260" cy="70" rx="80" ry="45" fill="#fff" opacity="0.9"/>
      <circle cx="220" cy="110" r="8" fill="#fff" opacity="0.9"/>
      <circle cx="210" cy="125" r="5" fill="#fff" opacity="0.9"/>
      <!-- Inside thought: sad bird in cage -->
      <text x="240" y="65" font-size="24">🐦</text>
      <text x="280" y="80" font-size="18">😢</text>
      <!-- Sad flower -->
      <line x1="230" y1="95" x2="230" y2="80" stroke="#4CAF50" stroke-width="2"/>
      <circle cx="230" cy="76" r="6" fill="#7986CB"/>
      <text x="260" y="55" font-size="14">💧</text>
      <!-- Bear sitting -->
      <circle cx="140" cy="150" r="30" fill="#8D6E63"/>
      <circle cx="140" cy="158" r="22" fill="#A1887F"/>
      <circle cx="130" cy="145" r="5" fill="#3E2723"/>
      <circle cx="150" cy="145" r="5" fill="#3E2723"/>
      <ellipse cx="140" cy="155" rx="6" ry="3" fill="#3E2723"/>
      <!-- Sad mouth -->
      <path d="M130 165 Q140 160 150 165" stroke="#3E2723" fill="none" stroke-width="2"/>
      <circle cx="118" cy="125" r="10" fill="#8D6E63"/>
      <circle cx="162" cy="125" r="10" fill="#8D6E63"/>
      <circle cx="115" cy="125" r="6" fill="#A1887F"/>
      <circle cx="165" cy="125" r="6" fill="#A1887F"/>
      <!-- Body -->
      <ellipse cx="140" cy="195" rx="30" ry="20" fill="#8D6E63"/>
    </svg>`,

  'rain-3': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#B2EBF2" rx="16"/>
      <!-- Frog with umbrella -->
      <circle cx="200" cy="130" r="28" fill="#4CAF50"/>
      <circle cx="200" cy="125" r="20" fill="#66BB6A"/>
      <circle cx="191" cy="120" r="6" fill="#fff"/>
      <circle cx="209" cy="120" r="6" fill="#fff"/>
      <circle cx="191" cy="120" r="4" fill="#333"/>
      <circle cx="209" cy="120" r="4" fill="#333"/>
      <path d="M190 130 Q200 138 210 130" stroke="#333" fill="none" stroke-width="2"/>
      <!-- Big smile -->
      <ellipse cx="200" cy="138" rx="8" ry="5" fill="#4CAF50" stroke="#333" stroke-width="1.5"/>
      <!-- Umbrella -->
      <path d="M140,90 Q200,40 260,90 Z" fill="#E53935" stroke="#C62828" stroke-width="2"/>
      <line x1="200" y1="60" x2="200" y2="95" stroke="#5D4037" stroke-width="3"/>
      <path d="M200,95 Q210,100 215,95" fill="none" stroke="#5D4037" stroke-width="2"/>
      <!-- Music notes -->
      <text x="70" y="80" font-size="28" opacity="0.7">🎵</text>
      <text x="300" y="70" font-size="24" opacity="0.7">🎶</text>
      <text x="110" y="50" font-size="20" opacity="0.5">♪</text>
      <text x="280" y="100" font-size="22" opacity="0.5">♫</text>
      <!-- Speech bubble -->
      <rect x="50" y="160" width="120" height="40" fill="#fff" rx="16" stroke="#4CAF50" stroke-width="2"/>
      <text x="110" y="185" text-anchor="middle" font-size="16" fill="#4CAF50">Drip drop!</text>
    </svg>`,

  'rain-4': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#B3E5FC" rx="16"/>
      <!-- Closed eyes bear -->
      <circle cx="200" cy="120" r="35" fill="#8D6E63"/>
      <circle cx="200" cy="128" r="25" fill="#A1887F"/>
      <!-- Closed eyes -->
      <path d="M185,115 Q190,112 195,115" stroke="#3E2723" fill="none" stroke-width="2.5"/>
      <path d="M205,115 Q210,112 215,115" stroke="#3E2723" fill="none" stroke-width="2.5"/>
      <ellipse cx="200" cy="125" rx="5" ry="3" fill="#3E2723"/>
      <path d="M192 133 Q200 139 208 133" stroke="#3E2723" fill="none" stroke-width="2"/>
      <circle cx="170" cy="95" r="12" fill="#8D6E63"/>
      <circle cx="230" cy="95" r="12" fill="#8D6E63"/>
      <!-- Musical rain drops around -->
      ${Array.from({length:8},(_,i)=>{const x=40+i*45;const y=40+Math.sin(i)*20;return`<text x="${x}" y="${y}" font-size="18" opacity="0.6">💧</text><text x="${x+10}" y="${y+15}" font-size="12" opacity="0.5">♪</text>`}).join('')}
      <!-- Frog nearby -->
      <circle cx="80" cy="190" r="16" fill="#4CAF50"/>
      <circle cx="73" cy="185" r="4" fill="#fff"/><circle cx="87" cy="185" r="4" fill="#fff"/>
      <circle cx="73" cy="185" r="2.5" fill="#333"/><circle cx="87" cy="185" r="2.5" fill="#333"/>
      <!-- Zzz / listening -->
      <text x="260" y="85" font-size="16" opacity="0.6">💭</text>
      <text x="280" y="70" font-size="24">🎵</text>
    </svg>`,

  'rain-5': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#F1F8E9" rx="16"/>
      <!-- Rainbow -->
      <path d="M30,180 Q200,-40 370,180" fill="none" stroke="#E53935" stroke-width="12"/>
      <path d="M45,180 Q200,-25 355,180" fill="none" stroke="#FF9800" stroke-width="12"/>
      <path d="M60,180 Q200,-10 340,180" fill="none" stroke="#FDD835" stroke-width="12"/>
      <path d="M75,180 Q200,5 325,180" fill="none" stroke="#4CAF50" stroke-width="12"/>
      <path d="M90,180 Q200,20 310,180" fill="none" stroke="#2196F3" stroke-width="12"/>
      <path d="M105,180 Q200,35 295,180" fill="none" stroke="#3F51B5" stroke-width="12"/>
      <path d="M120,180 Q200,50 280,180" fill="none" stroke="#9C27B0" stroke-width="12"/>
      <!-- Puddles -->
      <ellipse cx="120" cy="240" rx="30" ry="8" fill="#90CAF9" opacity="0.5"/>
      <ellipse cx="280" cy="245" rx="25" ry="6" fill="#90CAF9" opacity="0.5"/>
      <!-- Animals jumping -->
      <text x="90" y="200" font-size="32">🐻</text>
      <text x="170" y="190" font-size="28">🐸</text>
      <text x="240" y="195" font-size="28">🦊</text>
      <text x="300" y="200" font-size="28">🐰</text>
      <!-- Splash effects -->
      <text x="80" y="225" font-size="14" opacity="0.6">💦</text>
      <text x="180" y="225" font-size="14" opacity="0.6">💦</text>
      <text x="280" y="225" font-size="14" opacity="0.6">💦</text>
    </svg>`,

  'rain-6': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#FFF8E1" rx="16"/>
      <rect x="0" y="180" width="400" height="80" fill="#FFF9C4"/>
      <!-- Bear hugging frog -->
      <circle cx="180" cy="120" r="32" fill="#8D6E63"/>
      <circle cx="180" cy="128" r="24" fill="#A1887F"/>
      <circle cx="170" cy="118" r="5" fill="#3E2723"/>
      <circle cx="190" cy="118" r="5" fill="#3E2723"/>
      <ellipse cx="180" cy="126" rx="6" ry="3" fill="#3E2723"/>
      <path d="M170 135 Q180 143 190 135" stroke="#3E2723" fill="none" stroke-width="2.5"/>
      <circle cx="155" cy="95" r="11" fill="#8D6E63"/>
      <circle cx="205" cy="95" r="11" fill="#8D6E63"/>
      <!-- Frog being hugged -->
      <circle cx="240" cy="135" r="22" fill="#4CAF50"/>
      <circle cx="233" cy="128" r="5" fill="#fff"/><circle cx="247" cy="128" r="5" fill="#fff"/>
      <circle cx="233" cy="128" r="3" fill="#333"/><circle cx="247" cy="128" r="3" fill="#333"/>
      <path d="M233 140 Q240 148 247 140" stroke="#333" fill="none" stroke-width="2"/>
      <!-- Hearts -->
      <text x="140" y="70" font-size="24">❤️</text>
      <text x="220" y="60" font-size="20">❤️</text>
      <text x="180" y="50" font-size="28">❤️</text>
      <!-- Sun coming out -->
      <circle cx="340" cy="50" r="25" fill="#FDD835" opacity="0.8"/>
      <line x1="340" y1="20" x2="340" y2="10" stroke="#FDD835" stroke-width="2" opacity="0.6"/>
      <line x1="365" y1="35" x2="375" y2="28" stroke="#FDD835" stroke-width="2" opacity="0.6"/>
      <line x1="370" y1="55" x2="380" y2="55" stroke="#FDD835" stroke-width="2" opacity="0.6"/>
    </svg>`,

  // Share story
  'share-1': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#FFF3E0" rx="16"/>
      <rect x="0" y="180" width="400" height="80" fill="#FFE0B2"/>
      <!-- Kitchen background -->
      <rect x="20" y="20" width="360" height="140" fill="#FFCC80" rx="8" opacity="0.3"/>
      <!-- Oven -->
      <rect x="60" y="60" width="120" height="100" fill="#8D6E63" rx="6"/>
      <rect x="70" y="70" width="100" height="60" fill="#5D4037" rx="4"/>
      <!-- Cookies inside oven -->
      <circle cx="95" cy="100" r="10" fill="#FFCC80"/>
      <circle cx="120" cy="95" r="10" fill="#FFCC80"/>
      <circle cx="145" cy="100" r="10" fill="#FFCC80"/>
      <!-- Steam -->
      <path d="M90,60 Q85,45 95,35" stroke="#BDBDBD" fill="none" stroke-width="2" opacity="0.5"/>
      <path d="M120,55 Q115,40 125,30" stroke="#BDBDBD" fill="none" stroke-width="2" opacity="0.5"/>
      <path d="M150,60 Q145,45 155,35" stroke="#BDBDBD" fill="none" stroke-width="2" opacity="0.5"/>
      <!-- Mama Bear -->
      <circle cx="280" cy="120" r="28" fill="#8D6E63"/>
      <circle cx="280" cy="128" r="20" fill="#A1887F"/>
      <circle cx="272" cy="120" r="4" fill="#3E2723"/>
      <circle cx="288" cy="120" r="4" fill="#3E2723"/>
      <path d="M272 135 Q280 142 288 135" stroke="#3E2723" fill="none" stroke-width="2"/>
      <!-- Apron -->
      <path d="M260,155 L300,155 L295,200 L265,200 Z" fill="#F8BBD0"/>
      <circle cx="260" cy="100" r="10" fill="#8D6E63"/>
      <circle cx="300" cy="100" r="10" fill="#8D6E63"/>
      <!-- Cookie tray -->
      <rect x="230" y="165" width="100" height="8" fill="#9E9E9E" rx="2"/>
      <circle cx="250" cy="162" r="8" fill="#FFCC80"/>
      <circle cx="270" cy="162" r="8" fill="#FFCC80"/>
      <circle cx="290" cy="162" r="8" fill="#FFCC80"/>
      <circle cx="310" cy="162" r="8" fill="#FFCC80"/>
      <!-- Small bear running in -->
      <circle cx="80" cy="200" r="16" fill="#8D6E63"/>
      <circle cx="80" cy="205" r="11" fill="#A1887F"/>
      <circle cx="75" cy="198" r="3" fill="#3E2723"/>
      <circle cx="85" cy="198" r="3" fill="#3E2723"/>
      <text x="60" y="225" font-size="14">💨</text>
    </svg>`,

  'share-2': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#FBE9E7" rx="16"/>
      <!-- Bear hugging all cookies -->
      <circle cx="200" cy="110" r="35" fill="#8D6E63"/>
      <circle cx="200" cy="118" r="26" fill="#A1887F"/>
      <circle cx="190" cy="108" r="5" fill="#3E2723"/>
      <circle cx="210" cy="108" r="5" fill="#3E2723"/>
      <ellipse cx="200" cy="116" rx="6" ry="3" fill="#3E2723"/>
      <!-- Greedy smile -->
      <path d="M188 126 Q200 136 212 126" stroke="#3E2723" fill="#A1887F" stroke-width="2"/>
      <circle cx="170" cy="85" r="12" fill="#8D6E63"/>
      <circle cx="230" cy="85" r="12" fill="#8D6E63"/>
      <!-- Arms around cookies -->
      <path d="M165,130 Q140,140 150,160" stroke="#8D6E63" stroke-width="10" fill="none" stroke-linecap="round"/>
      <path d="M235,130 Q260,140 250,160" stroke="#8D6E63" stroke-width="10" fill="none" stroke-linecap="round"/>
      <!-- Pile of cookies -->
      <circle cx="190" cy="160" r="12" fill="#FFCC80" stroke="#D4A44C" stroke-width="1.5"/>
      <circle cx="210" cy="158" r="12" fill="#FFCC80" stroke="#D4A44C" stroke-width="1.5"/>
      <circle cx="200" cy="148" r="12" fill="#FFCC80" stroke="#D4A44C" stroke-width="1.5"/>
      <circle cx="175" cy="168" r="10" fill="#FFCC80" stroke="#D4A44C" stroke-width="1.5"/>
      <circle cx="225" cy="165" r="10" fill="#FFCC80" stroke="#D4A44C" stroke-width="1.5"/>
      <!-- Chocolate chips -->
      <circle cx="192" cy="158" r="2" fill="#5D4037"/>
      <circle cx="205" cy="162" r="2" fill="#5D4037"/>
      <circle cx="198" cy="146" r="2" fill="#5D4037"/>
      <!-- Sparkle eyes -->
      <text x="245" y="80" font-size="16">😋</text>
    </svg>`,

  'share-3': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#E8F5E9" rx="16"/>
      <rect x="0" y="180" width="400" height="80" fill="#C8E6C9"/>
      <!-- Door frame -->
      <rect x="230" y="60" width="100" height="140" fill="#8D6E63" rx="4"/>
      <rect x="236" y="66" width="88" height="128" fill="#D7CCC8" rx="2"/>
      <!-- Door handle -->
      <circle cx="310" cy="135" r="4" fill="#FDD835"/>
      <!-- Rabbit at door -->
      <circle cx="280" cy="130" r="20" fill="#F5F5F5"/>
      <ellipse cx="272" cy="105" rx="6" ry="18" fill="#F5F5F5"/>
      <ellipse cx="288" cy="105" rx="6" ry="18" fill="#F5F5F5"/>
      <ellipse cx="272" cy="105" rx="4" ry="14" fill="#F8BBD0"/>
      <ellipse cx="288" cy="105" rx="4" ry="14" fill="#F8BBD0"/>
      <circle cx="274" cy="126" r="4" fill="#333"/>
      <circle cx="286" cy="126" r="4" fill="#333"/>
      <ellipse cx="280" cy="135" rx="4" ry="2.5" fill="#F8BBD0"/>
      <!-- Sad eyes -->
      <path d="M274,126 Q276,124 278,126" stroke="#333" fill="none" stroke-width="1"/>
      <path d="M282,126 Q284,124 286,126" stroke="#333" fill="none" stroke-width="1"/>
      <!-- Tummy rumble -->
      <text x="310" y="165" font-size="16">〰️</text>
      <text x="300" y="180" font-size="12">*咕噜*</text>
      <!-- Bear inside with cookies -->
      <circle cx="150" cy="130" r="25" fill="#8D6E63"/>
      <circle cx="150" cy="138" r="18" fill="#A1887F"/>
      <circle cx="142" cy="130" r="4" fill="#3E2723"/>
      <circle cx="158" cy="130" r="4" fill="#3E2723"/>
      <!-- Cookies -->
      <circle cx="140" cy="165" r="8" fill="#FFCC80"/>
      <circle cx="158" cy="163" r="8" fill="#FFCC80"/>
    </svg>`,

  'share-4': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#F3E5F5" rx="16"/>
      <!-- Bear thinking -->
      <circle cx="200" cy="130" r="35" fill="#8D6E63"/>
      <circle cx="200" cy="138" r="26" fill="#A1887F"/>
      <circle cx="190" cy="128" r="5" fill="#3E2723"/>
      <circle cx="210" cy="128" r="5" fill="#3E2723"/>
      <ellipse cx="200" cy="136" rx="6" ry="3" fill="#3E2723"/>
      <!-- Thinking mouth -->
      <path d="M193 146 Q200 143 207 146" stroke="#3E2723" fill="none" stroke-width="2"/>
      <circle cx="170" cy="100" r="12" fill="#8D6E63"/>
      <circle cx="230" cy="100" r="12" fill="#8D6E63"/>
      <!-- Thought bubble left: cookies -->
      <ellipse cx="100" cy="60" rx="40" ry="25" fill="#fff" stroke="#ddd" stroke-width="1.5"/>
      <circle cx="85" cy="60" r="8" fill="#FFCC80"/>
      <circle cx="105" cy="58" r="8" fill="#FFCC80"/>
      <circle cx="95" cy="48" r="8" fill="#FFCC80"/>
      <!-- Thought bubble right: rabbit -->
      <ellipse cx="310" cy="55" rx="35" ry="25" fill="#fff" stroke="#ddd" stroke-width="1.5"/>
      <circle cx="310" cy="50" r="12" fill="#F5F5F5"/>
      <ellipse cx="305" cy="36" rx="4" ry="10" fill="#F5F5F5"/>
      <ellipse cx="315" cy="36" rx="4" ry="10" fill="#F5F5F5"/>
      <text x="305" y="55" font-size="10">👀</text>
      <!-- Question marks -->
      <text x="150" y="80" font-size="24" fill="#9C27B0" opacity="0.6">?</text>
      <text x="250" y="85" font-size="18" fill="#9C27B0" opacity="0.4">?</text>
    </svg>`,

  'share-5': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#FFFDE7" rx="16"/>
      <!-- Bear offering cookie -->
      <circle cx="150" cy="120" r="30" fill="#8D6E63"/>
      <circle cx="150" cy="128" r="22" fill="#A1887F"/>
      <circle cx="140" cy="118" r="5" fill="#3E2723"/>
      <circle cx="160" cy="118" r="5" fill="#3E2723"/>
      <path d="M140 136 Q150 145 160 136" stroke="#3E2723" fill="none" stroke-width="2.5"/>
      <circle cx="125" cy="95" r="10" fill="#8D6E63"/>
      <circle cx="175" cy="95" r="10" fill="#8D6E63"/>
      <!-- Arm reaching out -->
      <path d="M180,135 Q210,130 225,125" stroke="#8D6E63" stroke-width="10" fill="none" stroke-linecap="round"/>
      <!-- Cookie in hand -->
      <circle cx="235" cy="120" r="12" fill="#FFCC80" stroke="#D4A44C" stroke-width="1.5"/>
      <circle cx="232" cy="118" r="2" fill="#5D4037"/>
      <circle cx="238" cy="122" r="2" fill="#5D4037"/>
      <!-- Rabbit happy -->
      <circle cx="300" cy="125" r="22" fill="#F5F5F5"/>
      <ellipse cx="292" cy="100" rx="6" ry="16" fill="#F5F5F5"/>
      <ellipse cx="308" cy="100" rx="6" ry="16" fill="#F5F5F5"/>
      <ellipse cx="292" cy="100" rx="4" ry="12" fill="#F8BBD0"/>
      <ellipse cx="308" cy="100" rx="4" ry="12" fill="#F8BBD0"/>
      <circle cx="293" cy="122" r="4" fill="#333"/>
      <circle cx="307" cy="122" r="4" fill="#333"/>
      <path d="M293 133 Q300 140 307 133" stroke="#333" fill="none" stroke-width="2"/>
      <!-- Hearts between -->
      <text x="245" y="85" font-size="18">❤️</text>
      <text x="255" y="60" font-size="14">💛</text>
    </svg>`,

  'share-6': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#E8F5E9" rx="16"/>
      <rect x="0" y="180" width="400" height="80" fill="#A5D6A7"/>
      <!-- Circle of friends -->
      <circle cx="200" cy="130" r="20" fill="#8D6E63"/>
      <circle cx="200" cy="135" r="14" fill="#A1887F"/>
      <path d="M192 142 Q200 149 208 142" stroke="#3E2723" fill="none" stroke-width="2"/>
      <!-- Surrounding animals -->
      <text x="80" y="120" font-size="30">🐰</text>
      <text x="120" y="190" font-size="26">🐸</text>
      <text x="260" y="190" font-size="26">🦊</text>
      <text x="300" y="120" font-size="28">🐱</text>
      <text x="190" y="230" font-size="26">🐶</text>
      <!-- Cookies being shared (center) -->
      <circle cx="170" cy="160" r="7" fill="#FFCC80"/>
      <circle cx="190" cy="158" r="7" fill="#FFCC80"/>
      <circle cx="210" cy="158" r="7" fill="#FFCC80"/>
      <circle cx="230" cy="160" r="7" fill="#FFCC80"/>
      <!-- Hearts and sparkles -->
      <text x="100" y="70" font-size="22">❤️</text>
      <text x="300" y="70" font-size="22">💛</text>
      <text x="200" y="40" font-size="26">✨</text>
      <text x="50" y="180" font-size="16">💚</text>
      <text x="350" y="180" font-size="16">💜</text>
    </svg>`,

  // Brave story
  'brave-1': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#C8E6C9" rx="16"/>
      <!-- Dark path -->
      <rect x="160" y="80" width="80" height="180" fill="#37474F" rx="8"/>
      <!-- Trees -->
      <circle cx="50" cy="80" r="40" fill="#388E3C"/>
      <rect x="45" y="115" width="10" height="50" fill="#4E342E"/>
      <circle cx="350" cy="80" r="40" fill="#388E3C"/>
      <rect x="345" y="115" width="10" height="50" fill="#4E342E"/>
      <!-- Spooky eyes in dark path -->
      <circle cx="190" cy="120" r="4" fill="#FDD835" opacity="0.6"/>
      <circle cx="210" cy="120" r="4" fill="#FDD835" opacity="0.6"/>
      <circle cx="185" cy="180" r="3" fill="#FDD835" opacity="0.4"/>
      <circle cx="215" cy="180" r="3" fill="#FDD835" opacity="0.4"/>
      <!-- Bear trembling -->
      <circle cx="120" cy="160" r="25" fill="#8D6E63"/>
      <circle cx="120" cy="166" r="18" fill="#A1887F"/>
      <circle cx="112" cy="158" r="4" fill="#3E2723"/>
      <circle cx="128" cy="158" r="4" fill="#3E2723"/>
      <!-- Worried mouth -->
      <path d="M112 174 Q120 170 128 174" stroke="#3E2723" fill="none" stroke-width="2"/>
      <!-- Sweat drop -->
      <ellipse cx="140" cy="148" rx="4" ry="6" fill="#42A5F5" opacity="0.7"/>
      <!-- Tremble lines -->
      <path d="M90,155 L85,152 M90,165 L85,168 M92,175 L87,178" stroke="#8D6E63" stroke-width="1.5" opacity="0.5"/>
      <circle cx="100" cy="140" r="9" fill="#8D6E63"/>
      <circle cx="140" cy="140" r="9" fill="#8D6E63"/>
    </svg>`,

  'brave-2': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#D1C4E9" rx="16"/>
      <!-- Bear with imagination -->
      <circle cx="140" cy="140" r="30" fill="#8D6E63"/>
      <circle cx="140" cy="148" r="22" fill="#A1887F"/>
      <circle cx="130" cy="138" r="5" fill="#3E2723"/>
      <circle cx="150" cy="138" r="5" fill="#3E2723"/>
      <!-- Scared face -->
      <ellipse cx="140" cy="148" rx="5" ry="7" fill="#3E2723"/>
      <path d="M130 158 Q140 154 150 158" stroke="#3E2723" fill="none" stroke-width="2"/>
      <circle cx="115" cy="115" r="10" fill="#8D6E63"/>
      <circle cx="165" cy="115" r="10" fill="#8D6E63"/>
      <!-- Thought bubble: monster -->
      <ellipse cx="290" cy="80" rx="60" ry="40" fill="#fff" stroke="#B39DDB" stroke-width="2"/>
      <circle cx="290" cy="80" r="25" fill="#4A148C" opacity="0.3"/>
      <circle cx="280" cy="72" r="6" fill="#F44336"/>
      <circle cx="300" cy="72" r="6" fill="#F44336"/>
      <path d="M275 92 Q290 102 305 92" stroke="#333" fill="#333" stroke-width="2"/>
      <!-- Horns -->
      <path d="M270,55 L265,35 L280,50" fill="#4A148C"/>
      <path d="M310,55 L315,35 L300,50" fill="#4A148C"/>
      <text x="270" y="110" font-size="14">❓❓❓</text>
      <!-- Connecting dots -->
      <circle cx="200" cy="110" r="6" fill="#fff" opacity="0.6"/>
      <circle cx="230" cy="95" r="4" fill="#fff" opacity="0.6"/>
    </svg>`,

  'brave-3': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#FFF8E1" rx="16"/>
      <!-- Fox -->
      <circle cx="280" cy="120" r="28" fill="#FF7043"/>
      <circle cx="280" cy="128" r="20" fill="#FFCC80"/>
      <polygon points="265,95 270,115 280,105 290,115 295,95" fill="#FF7043"/>
      <circle cx="272" cy="123" r="4" fill="#333"/>
      <circle cx="288" cy="123" r="4" fill="#333"/>
      <path d="M272 135 Q280 142 288 135" stroke="#333" fill="none" stroke-width="2"/>
      <!-- Encouraging gesture -->
      <path d="M255,140 Q240,130 235,120" stroke="#FF7043" stroke-width="8" fill="none" stroke-linecap="round"/>
      <!-- Lightbulb -->
      <circle cx="235" cy="100" r="15" fill="#FDD835" opacity="0.8"/>
      <text x="228" y="106" font-size="18">💡</text>
      <!-- Bear listening -->
      <circle cx="120" cy="140" r="25" fill="#8D6E63"/>
      <circle cx="120" cy="148" r="18" fill="#A1887F"/>
      <circle cx="112" cy="140" r="4" fill="#3E2723"/>
      <circle cx="128" cy="140" r="4" fill="#3E2723"/>
      <!-- Hopeful expression -->
      <path d="M112 155 Q120 160 128 155" stroke="#3E2723" fill="none" stroke-width="2"/>
      <!-- Speech bubble -->
      <rect x="50" y="55" width="160" height="40" fill="#fff" rx="16" stroke="#FF7043" stroke-width="2"/>
      <polygon points="180,95 195,85 185,80" fill="#fff" stroke="#FF7043" stroke-width="2"/>
      <text x="130" y="80" text-anchor="middle" font-size="14" fill="#FF7043">🎵 Sing a song! 🎵</text>
    </svg>`,

  'brave-4': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#B3E5FC" rx="16"/>
      <!-- Dark path with light -->
      <rect x="140" y="60" width="120" height="200" fill="#37474F" rx="8"/>
      <!-- Light from bear -->
      <circle cx="200" cy="140" r="60" fill="#FDD835" opacity="0.15"/>
      <circle cx="200" cy="140" r="40" fill="#FDD835" opacity="0.2"/>
      <!-- Bear walking confidently -->
      <circle cx="200" cy="120" r="28" fill="#8D6E63"/>
      <circle cx="200" cy="128" r="20" fill="#A1887F"/>
      <circle cx="190" cy="120" r="5" fill="#3E2723"/>
      <circle cx="210" cy="120" r="5" fill="#3E2723"/>
      <!-- Determined smile -->
      <path d="M190 136 Q200 144 210 136" stroke="#3E2723" fill="none" stroke-width="2.5"/>
      <circle cx="175" cy="98" r="10" fill="#8D6E63"/>
      <circle cx="225" cy="98" r="10" fill="#8D6E63"/>
      <!-- Music notes floating up -->
      <text x="240" y="60" font-size="22" opacity="0.8">🎵</text>
      <text x="130" y="50" font-size="18" opacity="0.6">🎶</text>
      <text x="270" y="80" font-size="16" opacity="0.5">♪</text>
      <text x="110" y="90" font-size="20" opacity="0.7">♫</text>
      <!-- Stars in light -->
      <text x="175" y="90" font-size="12" opacity="0.6">✨</text>
      <text x="220" y="85" font-size="12" opacity="0.6">✨</text>
    </svg>`,

  'brave-5': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#E8F5E9" rx="16"/>
      <!-- Beautiful garden -->
      <!-- Flowers -->
      <circle cx="60" cy="140" r="12" fill="#E91E63"/>
      <circle cx="60" cy="140" r="6" fill="#FDD835"/>
      <line x1="60" y1="152" x2="60" y2="200" stroke="#4CAF50" stroke-width="3"/>
      <circle cx="340" cy="130" r="12" fill="#9C27B0"/>
      <circle cx="340" cy="130" r="6" fill="#FDD835"/>
      <line x1="340" y1="142" x2="340" y2="200" stroke="#4CAF50" stroke-width="3"/>
      <circle cx="120" cy="150" r="10" fill="#FF9800"/>
      <circle cx="120" cy="150" r="5" fill="#FDD835"/>
      <line x1="120" y1="160" x2="120" y2="200" stroke="#4CAF50" stroke-width="2"/>
      <circle cx="280" cy="145" r="10" fill="#2196F3"/>
      <circle cx="280" cy="145" r="5" fill="#FDD835"/>
      <line x1="280" y1="155" x2="280" y2="200" stroke="#4CAF50" stroke-width="2"/>
      <!-- Fireflies (glowing dots) -->
      ${Array.from({length:10},(_,i)=>{const x=80+i*28;const y=60+Math.sin(i*3)*30;return`<circle cx="${x}" cy="${y}" r="4" fill="#FFEB3B" opacity="0.8"/><circle cx="${x}" cy="${y}" r="8" fill="#FFEB3B" opacity="0.2"/>`}).join('')}
      <!-- Bear amazed -->
      <circle cx="200" cy="180" r="22" fill="#8D6E63"/>
      <circle cx="200" cy="186" r="16" fill="#A1887F"/>
      <circle cx="192" cy="178" r="4" fill="#3E2723"/>
      <circle cx="208" cy="178" r="4" fill="#3E2723"/>
      <!-- Amazed O mouth -->
      <ellipse cx="200" cy="190" rx="5" ry="6" fill="#3E2723"/>
      <circle cx="182" cy="162" r="8" fill="#8D6E63"/>
      <circle cx="218" cy="162" r="8" fill="#8D6E63"/>
    </svg>`,

  'brave-6': () => `
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="260" fill="#FFF3E0" rx="16"/>
      <rect x="0" y="180" width="400" height="80" fill="#FFE0B2"/>
      <!-- Bear triumphant on hill -->
      <ellipse cx="200" cy="160" rx="100" ry="30" fill="#A5D6A7"/>
      <!-- Bear standing tall -->
      <circle cx="200" cy="100" r="32" fill="#8D6E63"/>
      <circle cx="200" cy="108" r="24" fill="#A1887F"/>
      <circle cx="190" cy="100" r="5" fill="#3E2723"/>
      <circle cx="210" cy="100" r="5" fill="#3E2723"/>
      <!-- Big proud smile -->
      <path d="M188 116 Q200 128 212 116" stroke="#3E2723" fill="#A1887F" stroke-width="2.5"/>
      <circle cx="173" cy="78" r="11" fill="#8D6E63"/>
      <circle cx="227" cy="78" r="11" fill="#8D6E63"/>
      <!-- Arms raised -->
      <path d="M170,120 Q155,90 150,70" stroke="#8D6E63" stroke-width="10" fill="none" stroke-linecap="round"/>
      <path d="M230,120 Q245,90 250,70" stroke="#8D6E63" stroke-width="10" fill="none" stroke-linecap="round"/>
      <!-- Star on chest -->
      <text x="192" y="142" font-size="20">⭐</text>
      <!-- Sparkles and stars -->
      <text x="100" y="50" font-size="24">✨</text>
      <text x="280" y="40" font-size="24">🌟</text>
      <text x="50" y="100" font-size="18">⭐</text>
      <text x="340" y="90" font-size="18">⭐</text>
      <text x="150" y="30" font-size="16">✨</text>
      <text x="250" y="25" font-size="16">✨</text>
    </svg>`,
};

// Map story pages to scene keys
const STORY_SCENES = {
  'pipi-bear-birthday': ['birthday-1','birthday-2','birthday-3','birthday-4','birthday-5','birthday-6'],
  'pipi-bear-rain':    ['rain-1','rain-2','rain-3','rain-4','rain-5','rain-6'],
  'pipi-bear-share':   ['share-1','share-2','share-3','share-4','share-5','share-6'],
  'pipi-bear-brave':   ['brave-1','brave-2','brave-3','brave-4','brave-5','brave-6'],
};

const STORY_DATA = [
  {
    id: 'pipi-bear-birthday',
    cover: '🐻',
    coverBg: '#FFF3E0',
    title_zh: '皮皮熊的生日派对',
    title_en: 'Pipi Bear\'s Birthday Party',
    pages: [
      {
        scene: '🏠☀️🐻',
        bg: '#E8F5E9',
        speaker_zh: '旁白',
        speaker_en: 'Narrator',
        text_zh: '今天是皮皮熊的生日！阳光照进小窗户，皮皮熊开心地醒了过来。',
        text_en: "Today is Pipi Bear's birthday! Sunshine comes through the little window. Pipi Bear wakes up happily.",
      },
      {
        scene: '🐻💌✨',
        bg: '#E3F2FD',
        speaker_zh: '皮皮熊',
        speaker_en: 'Pipi Bear',
        text_zh: '"太好了！我要邀请所有的朋友来参加我的生日派对！"',
        text_en: '"Yay! I want to invite all my friends to my birthday party!"',
      },
      {
        scene: '🐻🐸🐰🦊',
        bg: '#FFF8E1',
        speaker_zh: '旁白',
        speaker_en: 'Narrator',
        text_zh: '皮皮熊去找小青蛙、小兔子和小狐狸。「明天来参加我的派对吧！」大家高兴地答应了。',
        text_en: 'Pipi Bear went to find Little Frog, Little Rabbit, and Little Fox. "Come to my party tomorrow!" Everyone said yes happily.',
      },
      {
        scene: '🐻🎈🎂🎁',
        bg: '#FCE4EC',
        speaker_zh: '旁白',
        speaker_en: 'Narrator',
        text_zh: '皮皮熊忙着布置房间——挂上彩色气球，摆好大蛋糕，还准备了好多礼物。',
        text_en: 'Pipi Bear was busy decorating — hanging colorful balloons, setting up a big cake, and preparing many gifts.',
      },
      {
        scene: '🐸🐰🦊🐱🐶🎉',
        bg: '#F3E5F5',
        speaker_zh: '大家一起喊',
        speaker_en: 'Everyone shouted',
        text_zh: '"生日快乐，皮皮熊！" 朋友们都来了，带着礼物和笑容。',
        text_en: '"Happy Birthday, Pipi Bear!" All the friends arrived with gifts and big smiles.',
      },
      {
        scene: '🐻❤️friends❤️🐻',
        bg: '#E8F5E9',
        speaker_zh: '皮皮熊',
        speaker_en: 'Pipi Bear',
        text_zh: '"谢谢你们！有朋友一起过生日，是最幸福的事情！"',
        text_en: '"Thank you everyone! Celebrating with friends is the happiest thing in the world!"',
      },
    ],
  },
  {
    id: 'pipi-bear-rain',
    cover: '🌧️',
    coverBg: '#E3F2FD',
    title_zh: '皮皮熊和下雨天',
    title_en: 'Pipi Bear and the Rainy Day',
    pages: [
      {
        scene: '☁️🌧️🐻',
        bg: '#ECEFF1',
        speaker_zh: '旁白',
        speaker_en: 'Narrator',
        text_zh: '天灰灰的，下起了大雨。皮皮熊站在家门口，看着雨滴一滴一滴地落下来。',
        text_en: 'The sky was gray and heavy rain began to fall. Pipi Bear stood at the door, watching raindrops fall one by one.',
      },
      {
        scene: '🐻💭🌸',
        bg: '#E8EAF6',
        speaker_zh: '皮皮熊',
        speaker_en: 'Pipi Bear',
        text_zh: '"下雨天好无聊啊……小鸟不能出来唱歌，花儿也被淋湿了。"',
        text_en: '"Rainy days are so boring... Birds can\'t come out to sing, and the flowers are all wet."',
      },
      {
        scene: '🐸☔🎵',
        bg: '#E0F7FA',
        speaker_zh: '小青蛙',
        speaker_en: 'Little Frog',
        text_zh: '"皮皮熊，你知道吗？下雨天其实很好玩！你听，雨滴在唱歌呢——滴答滴答！"',
        text_en: '"Pipi Bear, did you know? Rainy days are actually really fun! Listen, the raindrops are singing — drip drop!"',
      },
      {
        scene: '🐻🐸💧🎶',
        bg: '#E1F5FE',
        speaker_zh: '旁白',
        speaker_en: 'Narrator',
        text_zh: '皮皮熊闭上眼睛仔细听。真的呢！雨滴打在树叶上、屋顶上、水洼里，就像一首美妙的歌。',
        text_en: 'Pipi Bear closed his eyes and listened carefully. It\'s true! Raindrops hit the leaves, the roof, and the puddles, like a beautiful song.',
      },
      {
        scene: '🐻🐸🦊🐰🌈',
        bg: '#F1F8E9',
        speaker_zh: '旁白',
        speaker_en: 'Narrator',
        text_zh: '雨停了！天边出现了一道美丽的彩虹。皮皮熊和小伙伴们跑出家门，在水洼里蹦蹦跳跳。',
        text_en: 'The rain stopped! A beautiful rainbow appeared in the sky. Pipi Bear and friends ran outside, jumping in puddles.',
      },
      {
        scene: '🌈🐻❤️',
        bg: '#FFF8E1',
        speaker_zh: '皮皮熊',
        speaker_en: 'Pipi Bear',
        text_zh: '"原来下雨天也可以很开心！谢谢小青蛙教我发现雨天的美。"',
        text_en: '"Rainy days can be happy too! Thank you Little Frog for helping me see the beauty of rain."',
      },
    ],
  },
  {
    id: 'pipi-bear-share',
    cover: '🧁',
    coverBg: '#FCE4EC',
    title_zh: '皮皮熊学会分享',
    title_en: 'Pipi Bear Learns to Share',
    pages: [
      {
        scene: '🐻🍪✨',
        bg: '#FFF3E0',
        speaker_zh: '旁白',
        speaker_en: 'Narrator',
        text_zh: '熊妈妈烤了一大盘香喷喷的饼干。皮皮熊闻到香味，立刻跑了过来。',
        text_en: 'Mama Bear baked a big tray of yummy cookies. Pipi Bear smelled them and ran right over.',
      },
      {
        scene: '🐻🍪😋',
        bg: '#FBE9E7',
        speaker_zh: '皮皮熊',
        speaker_en: 'Pipi Bear',
        text_zh: '"哇！全都是我的！我要一个人把这些饼干全吃掉！"',
        text_en: '"Wow! They\'re all mine! I\'m going to eat all these cookies by myself!"',
      },
      {
        scene: '🐰👀🚪',
        bg: '#E8F5E9',
        speaker_zh: '旁白',
        speaker_en: 'Narrator',
        text_zh: '这时，小兔子来到了门口。「皮皮熊，我闻到了好香的饼干味……」小兔子的肚子咕噜咕噜地叫了起来。',
        text_en: 'Just then, Little Rabbit came to the door. "Pipi Bear, I smell something delicious..." Little Rabbit\'s tummy rumbled.',
      },
      {
        scene: '🐻🤔🍪',
        bg: '#F3E5F5',
        speaker_zh: '旁白',
        speaker_en: 'Narrator',
        text_zh: '皮皮熊看看饼干，又看看小兔子。一个人吃虽然开心，但是……',
        text_en: 'Pipi Bear looked at the cookies, then at Little Rabbit. Eating alone is nice, but...',
      },
      {
        scene: '🐻🐰🍪😊',
        bg: '#FFFDE7',
        speaker_zh: '皮皮熊',
        speaker_en: 'Pipi Bear',
        text_zh: '"小兔子，来和我一起吃吧！妈妈做的饼干最好吃了！"',
        text_en: '"Little Rabbit, come eat with me! Mama\'s cookies are the best!"',
      },
      {
        scene: '🐻🐰🐸🦊🐱🍪🥰',
        bg: '#E8F5E9',
        speaker_zh: '旁白',
        speaker_en: 'Narrator',
        text_zh: '后来小青蛙、小狐狸和小猫也来了。大家一起分享饼干，觉得比一个人吃的时候更香、更甜！',
        text_en: 'Then Little Frog, Little Fox, and Little Cat came too. They all shared the cookies together. The cookies tasted even better when shared with friends!',
      },
    ],
  },
  {
    id: 'pipi-bear-brave',
    cover: '🌟',
    coverBg: '#E8EAF6',
    title_zh: '皮皮熊变得勇敢了',
    title_en: 'Pipi Bear Becomes Brave',
    pages: [
      {
        scene: '🐻🌳😟',
        bg: '#E8F5E9',
        speaker_zh: '旁白',
        speaker_en: 'Narrator',
        text_zh: '森林里有一条黑黑的小路。皮皮熊每次经过那里，都会害怕得发抖。',
        text_en: 'There was a dark little path in the forest. Every time Pipi Bear passed by, he would tremble with fear.',
      },
      {
        scene: '🐻❓😟',
        bg: '#EDE7F6',
        speaker_zh: '皮皮熊',
        speaker_en: 'Pipi Bear',
        text_zh: '"那里好黑好可怕……万一有大怪兽怎么办？"',
        text_en: '"It\'s so dark and scary there... What if there\'s a big monster?"',
      },
      {
        scene: '🦊💡🐻',
        bg: '#FFF8E1',
        speaker_zh: '小狐狸',
        speaker_en: 'Little Fox',
        text_zh: '"皮皮熊，你有没有试过唱歌？我害怕的时候就会大声唱歌，就不怕了！"',
        text_en: '"Pipi Bear, have you tried singing? When I\'m scared, I sing out loud, and then I\'m not afraid anymore!"',
      },
      {
        scene: '🐻🎵🎶💫',
        bg: '#E1F5FE',
        speaker_zh: '旁白',
        speaker_en: 'Narrator',
        text_zh: '皮皮熊鼓起勇气，走进了小路。他大声唱着歌：「我是一个勇敢的小熊～」',
        text_en: 'Pipi Bear gathered his courage and walked into the dark path. He sang loudly: "I am a brave little bear~"',
      },
      {
        scene: '🐻🌸🦋✨',
        bg: '#F1F8E9',
        speaker_zh: '旁白',
        speaker_en: 'Narrator',
        text_zh: '走着走着，皮皮熊发现小路尽头原来是一片美丽的花园！萤火虫在花丛中飞舞，美极了。',
        text_en: 'As he walked, Pipi Bear discovered that the end of the path was a beautiful garden! Fireflies danced among the flowers.',
      },
      {
        scene: '🐻💪🌟😊',
        bg: '#FFF3E0',
        speaker_zh: '皮皮熊',
        speaker_en: 'Pipi Bear',
        text_zh: '"原来黑黑的地方也藏着美好的东西！只要勇敢往前走，就能发现惊喜！"',
        text_en: '"There are beautiful things hiding in dark places! If you\'re brave and keep walking, you\'ll find surprises!"',
      },
    ],
  },
]
