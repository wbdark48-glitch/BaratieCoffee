// Baratie Coffee - Grand Line Brews Menu Database
const MENU_DATA = [
  {
    id: "gomu-gomu-nitro",
    name: "Gomu Gomu Nitro Cold Brew",
    japaneseName: "ゴムゴムのニトロ",
    category: "devil-fruits",
    character: "Monkey D. Luffy",
    bounty: "฿ 3,000,000,000",
    bountyRaw: 3000000000,
    priceRub: 390,
    tag: "GEAR 5 ENERGY",
    type: "Дьявольский Колд Брю",
    description: "Взрывной нитро колд-брю тройной фильтрации с бархатной шапкой из фиолетовой ягодной пены и карамелью с морской солью. Заряжает энергией на целый переход через Гранд Лайн.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=80",
    specs: {
      roast: "Темная (Dark Roast)",
      caffeine: "320 мг (Gear 5)",
      origin: "Dawn Island High Mountain",
      flavorNotes: ["Черника", "Темный шоколад", "Морская карамель"]
    },
    accentColor: "#a855f7",
    glowColor: "rgba(168, 85, 247, 0.45)",
    badge: "Bestseller"
  },
  {
    id: "santoryu-espresso",
    name: "Santoryu Triple Espresso",
    japaneseName: "三刀流 エスプレッソ",
    category: "coffee",
    character: "Roronoa Zoro",
    bounty: "฿ 1,111,000,000",
    bountyRaw: 1111000000,
    priceRub: 340,
    tag: "THREE-BLADE INTENSITY",
    type: "Плотный тройной шот",
    description: "Три бескомпромиссных шота эспрессо из высокогорной арабики Страны Вано, увенчанные микропеной японской матчи высшего грейда. Острота и концентрация самурая.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
    specs: {
      roast: "Сверхтемная (Enma Grade)",
      caffeine: "290 мг",
      origin: "Wano / Kuri Highlands",
      flavorNotes: ["Горький трюфель", "Матча", "Дубовая бочка"]
    },
    accentColor: "#10b981",
    glowColor: "rgba(16, 185, 129, 0.45)",
    badge: "Крепкий"
  },
  {
    id: "diable-jambe-mocha",
    name: "Diable Jambe Flame Mocha",
    japaneseName: "悪魔風脚 フレイムモカ",
    category: "coffee",
    character: "Vinsmoke Sanji",
    bounty: "฿ 1,032,000,000",
    bountyRaw: 1032000000,
    priceRub: 410,
    tag: "CHEF'S PASSION",
    type: "Огненный авторский мокка",
    description: "Бельгийский черный шоколад 80%, фламбированная цедра апельсина с ромом и щепотка кайенского перца. Обжигает рецепторы страстью главного шефа ресторана Барати.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=80",
    specs: {
      roast: "Средняя (All Blue Roast)",
      caffeine: "190 мг",
      origin: "All Blue Reserve",
      flavorNotes: ["Кайенский перец", "Шоколад 80%", "Апельсиновый фламбе"]
    },
    accentColor: "#f97316",
    glowColor: "rgba(249, 115, 22, 0.45)",
    badge: "Выбор Шефа"
  },
  {
    id: "mikan-citrus-latte",
    name: "Mikan Citrus Cloud Latte",
    japaneseName: "みかん クラウドラテ",
    category: "specials",
    character: "Nami",
    bounty: "฿ 366,000,000",
    bountyRaw: 366000000,
    priceRub: 360,
    tag: "WEATHER MAGIC",
    type: "Цитрусовый нежный латте",
    description: "Экстракт сладких мандаринов из сада Бельмере, шелковистое овсяное молоко, легкий цветочный мед и золотистая корица. Каждая капля на вес золота.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=80",
    specs: {
      roast: "Светлая (Sunny Roast)",
      caffeine: "110 мг",
      origin: "Cocoyasi Tangerine Grove",
      flavorNotes: ["Мандарин", "Цветочный мед", "Ванильное облако"]
    },
    accentColor: "#fbbf24",
    glowColor: "rgba(251, 191, 36, 0.45)",
    badge: "Освежающий"
  },
  {
    id: "mera-mera-spicy-drip",
    name: "Mera Mera Fire Drip",
    japaneseName: "メラメラ ファイアドリップ",
    category: "devil-fruits",
    character: "Portgas D. Ace",
    bounty: "฿ 550,000,000",
    bountyRaw: 550000000,
    priceRub: 420,
    tag: "LOGIA FIRE",
    type: "Копченый фильтр-кофе",
    description: "Кофе пуровер на копченых кофейных зернах, настоянный на стручковой ванили, карамелизированном имбире и пламенной корице. Пламя, согревающее сердце в шторм.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    specs: {
      roast: "Смоки-дарк (Fire Extracted)",
      caffeine: "240 мг",
      origin: "Mt. Colubo Smoked Beans",
      flavorNotes: ["Копченая карамель", "Корица", "Имбирный огонь"]
    },
    accentColor: "#ef4444",
    glowColor: "rgba(239, 68, 68, 0.45)",
    badge: "Легенда"
  },
  {
    id: "soul-king-affogato",
    name: "Soul King Black Affogato",
    japaneseName: "ソウルキング アフォガート",
    category: "specials",
    character: "Brook",
    bounty: "฿ 383,000,000",
    bountyRaw: 383000000,
    priceRub: 380,
    tag: "SOUL SOLID",
    type: "Ледяной десертный кофе",
    description: "Шарик черного ванильного джелато с кокосовым углем, заливаемый кипящим двойным шотом ристретто. Взрывная карамель с треском, как аккорды скрипки Брука. Йо-хо-хо!",
    image: "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?auto=format&fit=crop&w=900&q=80",
    specs: {
      roast: "Итальянская обжарка",
      caffeine: "160 мг",
      origin: "Florian Triangle Reserve",
      flavorNotes: ["Черная ваниль", "Эспрессо", "Кристаллы карамели"]
    },
    accentColor: "#38bdf8",
    glowColor: "rgba(56, 189, 248, 0.45)",
    badge: "Десертный"
  },
  {
    id: "chopper-sakura-frappe",
    name: "Chopper's Cotton Candy Frappe",
    japaneseName: "チョッパー わたあめフラッペ",
    category: "specials",
    character: "Tony Tony Chopper",
    bounty: "฿ 1,000",
    bountyRaw: 1000,
    priceRub: 350,
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
    badge: "Без кофеина"
  },
  {
    id: "ope-ope-matcha-tonic",
    name: "Ope Ope Room Matcha Tonic",
    japaneseName: "オペオペ ルーム抹茶",
    category: "devil-fruits",
    character: "Trafalgar D. Water Law",
    bounty: "฿ 3,000,000,000",
    bountyRaw: 3000000000,
    priceRub: 430,
    tag: "SURGEON'S PRECISION",
    type: "Церемониальный тоник",
    description: "Хирургически выверенный баланс: церемониальная матча из Удзи, сухой тоник с экстрактом юдзу и кубики ледяного алоэ. Вкус переносит вас прямо в купол ROOM.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=900&q=80",
    specs: {
      roast: "Церемониальный чайный сбор",
      caffeine: "140 мг (Clean Energy)",
      origin: "North Blue Flevance",
      flavorNotes: ["Матча Удзи", "Юдзу", "Хрустящий тоник"]
    },
    accentColor: "#06b6d4",
    glowColor: "rgba(6, 182, 212, 0.45)",
    badge: "Премиум"
  },
  {
    id: "sunny-mane-croissant",
    name: "Thousand Sunny Golden Croissant",
    japaneseName: "サニー号 黄金クロワッサン",
    category: "food",
    character: "Franky / Sunny",
    bounty: "฿ 394,000,000",
    bountyRaw: 394000000,
    priceRub: 290,
    tag: "SUUUUPER CRISP",
    type: "Свежая пиратская выпечка",
    description: "Хрустящий круассан на фермерском сливочном масле в форме лучей гривы Таузенд Санни с кремом из манго и маракуйи. SUUUUPER заряд к утреннему кофе!",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80",
    specs: {
      roast: "Выпечка шефа",
      caffeine: "0 мг",
      origin: "Water 7 Bakery Style",
      flavorNotes: ["Французское масло", "Маракуйя", "Манго курд"]
    },
    accentColor: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.45)",
    badge: "Свежая выпечка"
  },
  {
    id: "baratie-brioche-sandwich",
    name: "Baratie Smokehouse Salmon Brioche",
    japaneseName: "バラティエ サーモンブリオッシュ",
    category: "food",
    character: "Sanji & Zeff",
    bounty: "฿ 850,000,000",
    bountyRaw: 850000000,
    priceRub: 490,
    tag: "ZEFF'S RECIPE",
    type: "Сытный завтрак пирата",
    description: "Теплая бриошь с копченым лососем из Олл Блю, авокадо, яйцом пашот и секретным соусом на травах от шеф-повара Зеффа. Еда, которая спасает жизни в море.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
    specs: {
      roast: "Горячая кухня",
      caffeine: "0 мг",
      origin: "East Blue Baratie Deck",
      flavorNotes: ["Лосось холодного копчения", "Авокадо", "Дижонский айоли"]
    },
    accentColor: "#f43f5e",
    glowColor: "rgba(244, 63, 94, 0.45)",
    badge: "Сытно"
  },
  {
    id: "straw-hat-pancakes",
    name: "Luffy's Straw Hat Fluffy Pancakes",
    japaneseName: "麦わら スフレパンケーキ",
    category: "food",
    character: "Monkey D. Luffy",
    bounty: "฿ 1,500,000,000",
    bountyRaw: 1500000000,
    priceRub: 420,
    tag: "MEAT LOVER SWEET",
    type: "Воздушные суфле-панкейки",
    description: "Высокие пышные японские суфле-панкейки с кленовым сиропом, ягодами и съедобной лентой из клубничной пастилы, стилизованные под шляпу Мугивары.",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=900&q=80",
    specs: {
      roast: "Камбуз Барати",
      caffeine: "0 мг",
      origin: "Foosha Village Memories",
      flavorNotes: ["Суфле", "Кленовый сироп", "Свежая малина"]
    },
    accentColor: "#e11d48",
    glowColor: "rgba(225, 29, 72, 0.45)",
    badge: "Хит"
  },
  {
    id: "all-blue-ocean-tea",
    name: "All Blue Deep Sea Butterfly Tea",
    japaneseName: "オールブルー バタフライティー",
    category: "specials",
    character: "Jinbe & Sanji",
    bounty: "฿ 1,100,000,000",
    bountyRaw: 1100000000,
    priceRub: 320,
    tag: "KNIGHT OF THE SEA",
    type: "Меняющий цвет травяной чай",
    description: "Настой цветов анчана цвета глубоких вод Олл Блю с лемонграссом. При добавлении капель лаймового сока меняет цвет от глубокого океанического индиго до фиолетового заката.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=80",
    specs: {
      roast: "Травяной сбор",
      caffeine: "0 мг",
      origin: "Fish-Man Island Currents",
      flavorNotes: ["Цветы анчана", "Лемонграсс", "Лаймовый градиент"]
    },
    accentColor: "#3b82f6",
    glowColor: "rgba(59, 130, 246, 0.45)",
    badge: "Магия цвета"
  }
];

// Customizer Options
const CUSTOMIZER_OPTIONS = {
  bases: [
    { id: "nitro", name: "Nitro Cold Brew Гранд Лайн", price: 250, bounty: 800000000, caffeine: "250 мг", desc: "Экстракция 18 часов, азотная крема-пена" },
    { id: "espresso", name: "Triple Espresso Вано", price: 220, bounty: 700000000, caffeine: "220 мг", desc: "Крепкий тройной шот арабики" },
    { id: "latte", name: "Шелковистый Латте Барати", price: 240, bounty: 600000000, caffeine: "120 мг", desc: "Мягкий бархатный эспрессо с молоком" },
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
    { id: "gomu", name: "Гому-Гому Дикая Черника & Ваниль", price: 50, icon: "🟣", color: "#a855f7" },
    { id: "mikan", name: "Мандарины Нами & Золотой Мед", price: 50, icon: "🍊", color: "#fbbf24" },
    { id: "darkness", name: "Ями-Ями Горький Шоколад 85%", price: 50, icon: "🌑", color: "#64748b" }
  ],
  toppings: [
    { id: "cotton", name: "Облако сладкой ваты Чоппера", price: 60 },
    { id: "sea-salt", name: "Морская соль Олл Блю", price: 30 },
    { id: "matcha-dust", name: "Матча пыль клинка Зоро", price: 40 },
    { id: "gold-flakes", name: "Золотая пыльца Нами", price: 80 }
  ]
};
