// Baratie Coffee - Grand Line Brews Menu Database
// Updated with real pirate assets and warm nautical palette
const MENU_DATA = [
  {
    id: "all-blue-coffee",
    name: "Кофе «All Blue»",
    japaneseName: "オールブルー・特製珈琲",
    category: "coffee",
    character: "Vinsmoke Sanji",
    bounty: "฿ 1,032,000,000",
    bountyRaw: 1032000000,
    priceRub: 390,
    tag: "ALL BLUE RESERVE",
    type: "Легендарный авторский бленд",
    description: "Бленд из отборных кофейных зёрен четырёх великих морей. Бархатистый богатый вкус с глубокими оттенками тёмного бельгийского шоколада, солёной морской карамели и благородного дыма.",
    image: "assets/all-blue-coffee.jpg",
    specs: {
      roast: "Тёмная All Blue (88%)",
      caffeine: "240 мг",
      origin: "All Blue Deep Current",
      flavorNotes: ["Тёмный шоколад", "Морская карамель", "Кедр"]
    },
    accentColor: "#dca338",
    glowColor: "rgba(220, 163, 56, 0.45)",
    badge: "Выбор Шефа"
  },
  {
    id: "black-leg-espresso",
    name: "Эспрессо «Черная Нога»",
    japaneseName: "黒足のエスプレッソ",
    category: "coffee",
    character: "Chef Sanji",
    bounty: "฿ 1,111,000,000",
    bountyRaw: 1111000000,
    priceRub: 320,
    tag: "DIABLE JAMBE STRIKE",
    type: "Экстра-плотный двойной шот",
    description: "Бескомпромиссный шот двойной крепости с огненной плотностью. Взрывной заряд концентрации, вдохновлённый техникой Diable Jambe. Густая тигровая крема и пряное благородное послевкусие.",
    image: "assets/black-leg-espresso.jpg",
    specs: {
      roast: "Огненная Diable (95%)",
      caffeine: "280 мг",
      origin: "Baratie Smokehouse Roast",
      flavorNotes: ["Кайенский перец", "Горький трюфель", "Какао 90%"]
    },
    accentColor: "#c85a17",
    glowColor: "rgba(200, 90, 23, 0.45)",
    badge: "Экстра-крепкий"
  },
  {
    id: "grand-line-cappuccino",
    name: "Капучино «Grand Line»",
    japaneseName: "グランドライン・カプチーノ",
    category: "coffee",
    character: "Straw Hat Crew",
    bounty: "฿ 1,500,000,000",
    bountyRaw: 1500000000,
    priceRub: 360,
    tag: "LOG POSE SIGNATURE",
    type: "Шелковистый сливочный капучино",
    description: "Нежнейший капучино на отборном фермерском молоке с глянцевой микропеной, присыпанной золотистой цейлонской корицей и тростниковым сахаром в виде розы ветров Лог-Поса.",
    image: "assets/grand-line-cappuccino.jpg",
    specs: {
      roast: "Золотистая средняя (70%)",
      caffeine: "160 мг",
      origin: "Alabasta Highlands Arabica",
      flavorNotes: ["Сливочная пенка", "Цейлонская корица", "Мускатный орех"]
    },
    accentColor: "#e6a73c",
    glowColor: "rgba(230, 167, 60, 0.45)",
    badge: "Хит Гранд Лайн"
  },
  {
    id: "devil-fruit-dessert",
    name: "Десерт «Дьявольский Фрукт»",
    japaneseName: "悪魔の実 ムースケーキ",
    category: "devil-fruits",
    character: "Monkey D. Luffy",
    bounty: "฿ 3,000,000,000",
    bountyRaw: 3000000000,
    priceRub: 450,
    tag: "GEAR 5 TRANSCENDENCE",
    type: "Фирменный муссовый торт",
    description: "Кулинарный триумф шефа Санджи в виде легендарного Дьявольского Плода: велюровый мусс из черной лесной смородины и шоколада с текучим центром из маракуйи и съедобной спиралью силы.",
    image: "assets/devil-fruit-dessert.jpg",
    specs: {
      roast: "Кондитерская камбуза Барати",
      caffeine: "0 мг (Сила Плода)",
      origin: "Grand Line Secret Recipe",
      flavorNotes: ["Чёрная смородина", "Маракуйя курд", "Тёмный велюр"]
    },
    accentColor: "#9d4edd",
    glowColor: "rgba(157, 78, 221, 0.45)",
    badge: "Bestseller"
  },
  {
    id: "baratie-croissant",
    name: "Круассан «Барати»",
    japaneseName: "バラティエ特製クロワッサン",
    category: "food",
    character: "Zeff & Sanji",
    bounty: "฿ 850,000,000",
    bountyRaw: 850000000,
    priceRub: 290,
    tag: "ZEFF MASTER BAKE",
    type: "Свежая слоёная выпечка",
    description: "Пышный слоёный круассан ручной лепки на фермерском сливочном масле 84%. Хрустящая золотистая корочка цвета дубовой палубы Барати и невесомые тающие соты внутри.",
    image: "assets/baratie-croissant.jpg",
    specs: {
      roast: "Свежая утренняя выпечка",
      caffeine: "0 мг",
      origin: "East Blue Maritime Recipe",
      flavorNotes: ["Фермерское масло 84%", "Миндальные лепестки", "Акациевый мёд"]
    },
    accentColor: "#d97706",
    glowColor: "rgba(217, 119, 6, 0.45)",
    badge: "Свежая выпечка"
  },
  {
    id: "mikan-citrus-latte",
    name: "Мандариновый Латте «Нами»",
    japaneseName: "ナミのみかんラテ",
    category: "specials",
    character: "Nami",
    bounty: "฿ 366,000,000",
    bountyRaw: 366000000,
    priceRub: 350,
    tag: "WEATHER MAGIC",
    type: "Цитрусовый нежный латте",
    description: "Экстракт сладких мандаринов из сада Бельмере, шелковистое овсяное молоко, легкий цветочный мед и золотистая корица. Каждая капля на вес золота.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=80",
    specs: {
      roast: "Светлая (Sunny Roast 65%)",
      caffeine: "120 мг",
      origin: "Cocoyasi Tangerine Grove",
      flavorNotes: ["Сладкий мандарин", "Овсяное молоко", "Ванильное облако"]
    },
    accentColor: "#fbbf24",
    glowColor: "rgba(251, 191, 36, 0.45)",
    badge: "Освежающий"
  },
  {
    id: "chopper-sakura-frappe",
    name: "Фраппе Чоппера «Сакура»",
    japaneseName: "チョッパー わたあめフラッпе",
    category: "specials",
    character: "Tony Tony Chopper",
    bounty: "฿ 1,000",
    bountyRaw: 1000,
    priceRub: 340,
    tag: "PET REWARD SPECIAL",
    type: "Фраппе с розовой ватой",
    description: "Нежнейший сливочный фраппе со вкусом сакуры и лесной земляники Острова Драм, укрытый настоящим облаком розовой сладкой ваты. Лечит любую усталость!",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=900&q=80",
    specs: {
      roast: "Без кофеина (0% Caffeine)",
      caffeine: "0 мг",
      origin: "Drum Kingdom Cherries",
      flavorNotes: ["Цветки сакуры", "Клубника со сливками", "Сахарная вата"]
    },
    accentColor: "#ec4899",
    glowColor: "rgba(236, 72, 153, 0.45)",
    badge: "Любимец команды"
  },
  {
    id: "baratie-salmon-brioche",
    name: "Бриошь с лососем Олл Блю",
    japaneseName: "サーモン・ブリオッシュ",
    category: "food",
    character: "Chef Sanji",
    bounty: "฿ 850,000,000",
    bountyRaw: 850000000,
    priceRub: 480,
    tag: "ZEFF'S RECIPE",
    type: "Сытный завтрак пирата",
    description: "Тёплая бриошь с диким лососем холодного копчения из Олл Блю, авокадо, яйцом пашот и секретным соусом на травах от шеф-повара Зеффа. Еда, которая спасает жизни в море.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
    specs: {
      roast: "Горячая кухня камбуза",
      caffeine: "0 мг",
      origin: "East Blue Baratie Deck",
      flavorNotes: ["Лосось холодного копчения", "Авокадо", "Дижонский айоли"]
    },
    accentColor: "#f43f5e",
    glowColor: "rgba(244, 63, 94, 0.45)",
    badge: "Сытно"
  }
];

// Customizer Options
const CUSTOMIZER_OPTIONS = {
  bases: [
    { id: "allblue", name: "Кофе «All Blue» Special", price: 260, bounty: 1032000000, caffeine: "240 мг", desc: "Смесь четырёх океанов, насыщенный вкус" },
    { id: "blackleg", name: "Эспрессо «Чёрная Нога»", price: 230, bounty: 1111000000, caffeine: "280 мг", desc: "Двойной плотный шот Diable Jambe" },
    { id: "grandline", name: "Капучино «Grand Line»", price: 250, bounty: 1500000000, caffeine: "160 мг", desc: "Шелковистая микропена с корицей" },
    { id: "matcha", name: "Церемониальная Матча Опе-Опе", price: 270, bounty: 950000000, caffeine: "110 мг", desc: "Японская матча премиум грейда" }
  ],
  milks: [
    { id: "oat", name: "Овсяное Бариста", price: 60, icon: "🌾" },
    { id: "coconut", name: "Кокосовое Островов Курагана", price: 70, icon: "🥥" },
    { id: "almond", name: "Миндальное Дрессрозы", price: 70, icon: "🌰" },
    { id: "cow", name: "Классическое цельное фермерское", price: 0, icon: "🥛" }
  ],
  devilSyrups: [
    { id: "mera", name: "Мера-Мера Острый Чили-Карамель", price: 50, icon: "🔥", color: "#f97316" },
    { id: "gomu", name: "Гому-Гому Дикая Черника & Ваниль", price: 50, icon: "🟣", color: "#9d4edd" },
    { id: "mikan", name: "Мандарины Нами & Золотой Мед", price: 50, icon: "🍊", color: "#f59e0b" },
    { id: "darkness", name: "Ями-Ями Горький Шоколад 85%", price: 50, icon: "🌑", color: "#64748b" }
  ],
  toppings: [
    { id: "cotton", name: "Облако сладкой ваты Чоппера", price: 60 },
    { id: "sea-salt", name: "Морская соль Олл Блю", price: 30 },
    { id: "gold-flakes", name: "Золотая пыльца Нами", price: 80 },
    { id: "cinnamon", name: "Цейлонская корица Роза Ветров", price: 40 }
  ]
};
