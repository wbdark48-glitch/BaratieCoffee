// ==========================================================================
// BARATIE COFFEE - APP LOGIC (Inspired by Korsa Maximize UI/UX & One Piece)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // --- STATE ---
  let cart = [];
  let appliedDiscount = 0;
  let activeHeroIndex = 0;
  let activeCategory = "all";

  // Customizer State
  let customSelection = {
    base: CUSTOMIZER_OPTIONS.bases[0],
    milk: CUSTOMIZER_OPTIONS.milks[0],
    syrup: CUSTOMIZER_OPTIONS.devilSyrups[0],
    topping: CUSTOMIZER_OPTIONS.toppings[0]
  };

  // --- AUDIO SYNTHESIS (Web Audio API) ---
  let audioCtx = null;
  let isAudioPlaying = false;
  let oceanNode = null;
  let gainNode = null;

  function initAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  }

  // Ambient Ocean Waves Synthesizer (White/Pink noise + LFO Filter)
  function toggleAmbientSound() {
    initAudioContext();
    const btnAudio = document.getElementById("btn-audio");
    const btnText = document.getElementById("audio-btn-text");

    if (isAudioPlaying) {
      if (gainNode) {
        gainNode.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 1);
        setTimeout(() => {
          if (oceanNode) oceanNode.stop();
          oceanNode = null;
        }, 1000);
      }
      isAudioPlaying = false;
      btnAudio.classList.remove("playing");
      btnText.textContent = "Шум Моря";
    } else {
      // Create noise buffer
      const bufferSize = audioCtx.sampleRate * 4;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + (0.02 * white)) / 1.02; // Pinkish filter
        lastOut = data[i];
      }

      oceanNode = audioCtx.createBufferSource();
      oceanNode.buffer = buffer;
      oceanNode.loop = true;

      // Filter modulated with LFO (wave surging effect)
      const filter = audioCtx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 350;

      const lfo = audioCtx.createOscillator();
      lfo.frequency.value = 0.15; // 6-7 second wave cycle
      const lfoGain = audioCtx.createGain();
      lfoGain.gain.value = 250;
      lfo.connect(filter.frequency);
      lfo.start();

      gainNode = audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + 2); // pleasant soft background

      oceanNode.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oceanNode.start();
      isAudioPlaying = true;
      btnAudio.classList.add("playing");
      btnText.textContent = "Звук Вкл";
    }
  }

  // Gold Coin Chime Sound Effect for Cart Actions
  function playCoinSound() {
    try {
      initAudioContext();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(987.77, audioCtx.currentTime); // B5 note
      osc.frequency.exponentialRampToValueAtTime(1318.51, audioCtx.currentTime + 0.08); // E6

      gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.35);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  const audioToggleBtn = document.getElementById("btn-audio");
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener("click", toggleAmbientSound);
  }

  // --- STICKY HEADER BLUR ---
  const header = document.getElementById("site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // --- HERO 3D TILT & PRODUCT SWITCHER ---
  const heroFeaturedItems = [
    MENU_DATA.find(i => i.id === "gomu-gomu-nitro"),
    MENU_DATA.find(i => i.id === "santoryu-espresso"),
    MENU_DATA.find(i => i.id === "diable-jambe-mocha"),
    MENU_DATA.find(i => i.id === "mikan-citrus-latte")
  ];

  const heroCard = document.getElementById("hero-product-card");
  const heroAmbientGlow = document.getElementById("hero-ambient-glow");

  function updateHeroFeatured(index) {
    const item = heroFeaturedItems[index];
    if (!item) return;
    activeHeroIndex = index;

    // Update texts & values
    document.getElementById("hero-card-bounty").textContent = item.bounty;
    document.getElementById("hero-card-name").textContent = item.name;
    document.getElementById("hero-card-character").textContent = `${item.character} Edition`;
    document.getElementById("hero-card-price").textContent = `${item.priceRub} ₽`;
    document.getElementById("hero-card-roast").textContent = item.specs.roast;
    document.getElementById("hero-card-tag").textContent = item.tag;

    // Spec row updates
    document.getElementById("hero-spec-bounty").textContent = item.bounty;
    document.getElementById("hero-spec-caffeine").textContent = item.specs.caffeine;

    // Smooth image cross-fade
    const imgEl = document.getElementById("hero-product-img");
    imgEl.style.opacity = "0.2";
    imgEl.style.transform = "scale(0.9)";
    setTimeout(() => {
      imgEl.src = item.image;
      imgEl.style.opacity = "1";
      imgEl.style.transform = "scale(1)";
    }, 150);

    // Update ambient glow color
    heroAmbientGlow.style.background = `radial-gradient(circle, ${item.accentColor} 0%, transparent 70%)`;

    // Update switcher active states
    document.querySelectorAll(".stage-switch-btn").forEach((btn, idx) => {
      if (idx === index) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Re-initialize icons in pills
    if (window.lucide) window.lucide.createIcons();
  }

  // Switcher Click Handlers
  document.querySelectorAll(".stage-switch-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-index"), 10);
      updateHeroFeatured(idx);
    });
  });

  // 3D Parallax Tilt Effect on Hero Card
  if (heroCard) {
    heroCard.addEventListener("mousemove", (e) => {
      const rect = heroCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      heroCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    heroCard.addEventListener("mouseleave", () => {
      heroCard.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
  }

  // Quick Add from Hero
  const btnHeroAdd = document.getElementById("btn-hero-add-cart");
  if (btnHeroAdd) {
    btnHeroAdd.addEventListener("click", () => {
      const item = heroFeaturedItems[activeHeroIndex];
      if (item) {
        addToCart(item);
      }
    });
  }

  // --- RENDER MENU GRID ---
  const menuGrid = document.getElementById("menu-grid");

  function renderMenu(category = "all") {
    menuGrid.innerHTML = "";
    const filtered = category === "all" 
      ? MENU_DATA 
      : MENU_DATA.filter(item => item.category === category);

    filtered.forEach(item => {
      const card = document.createElement("div");
      card.className = "menu-card";
      card.innerHTML = `
        <div class="card-top-wanted-bar">
          <span class="card-wanted-title">DEAD OR ALIVE</span>
          <span class="card-badge-pill" style="border-color: ${item.accentColor}; color: ${item.accentColor}">${item.badge}</span>
        </div>

        <div class="card-media-wrap">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          <span class="card-char-tag">${item.character}</span>
        </div>

        <div class="card-info">
          <span class="card-kanji-sub">${item.japaneseName}</span>
          <h3 class="card-name">${item.name}</h3>
          <p class="card-desc">${item.description}</p>

          <div class="card-specs-row">
            <span class="card-spec-tag">${item.specs.caffeine}</span>
            <span class="card-spec-tag">${item.specs.roast}</span>
            ${item.specs.flavorNotes.map(note => `<span class="card-spec-tag">${note}</span>`).join("")}
          </div>
        </div>

        <div class="card-foot">
          <div class="card-bounty-box">
            <span class="card-bounty-beli">${item.bounty}</span>
            <span class="card-price-rub">${item.priceRub} ₽</span>
          </div>
          <div class="card-btn-group">
            <button class="btn-card-quick" data-id="${item.id}" title="Характеристики">
              <i data-lucide="eye" style="width: 16px; height: 16px;"></i>
            </button>
            <button class="btn-card-order" data-id="${item.id}">
              <i data-lucide="plus" style="width: 15px; height: 15px;"></i>
              <span>В Трюм</span>
            </button>
          </div>
        </div>
      `;

      menuGrid.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();

    // Attach click listeners to cards
    menuGrid.querySelectorAll(".btn-card-order").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const found = MENU_DATA.find(x => x.id === id);
        if (found) addToCart(found);
      });
    });

    menuGrid.querySelectorAll(".btn-card-quick").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const found = MENU_DATA.find(x => x.id === id);
        if (found) openQuickView(found);
      });
    });
  }

  // Category Filter Pill Buttons
  document.querySelectorAll(".btn-filter-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".btn-filter-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category");
      renderMenu(activeCategory);
    });
  });

  // --- DEVIL FRUIT CUSTOMIZER LOGIC ---
  function renderCustomizerOptions() {
    // 1. Bases
    const baseGrid = document.getElementById("custom-base-options");
    baseGrid.innerHTML = CUSTOMIZER_OPTIONS.bases.map(b => `
      <div class="custom-pill-btn ${b.id === customSelection.base.id ? 'active' : ''}" data-base="${b.id}">
        <span class="custom-pill-name">${b.name}</span>
        <span class="custom-pill-sub">${b.price} ₽ • ${b.caffeine}</span>
      </div>
    `).join("");

    // 2. Milks
    const milkGrid = document.getElementById("custom-milk-options");
    milkGrid.innerHTML = CUSTOMIZER_OPTIONS.milks.map(m => `
      <div class="custom-pill-btn ${m.id === customSelection.milk.id ? 'active' : ''}" data-milk="${m.id}">
        <span class="custom-pill-name">${m.icon} ${m.name}</span>
        <span class="custom-pill-sub">${m.price === 0 ? 'Включено' : `+${m.price} ₽`}</span>
      </div>
    `).join("");

    // 3. Syrups
    const syrupGrid = document.getElementById("custom-syrup-options");
    syrupGrid.innerHTML = CUSTOMIZER_OPTIONS.devilSyrups.map(s => `
      <div class="custom-pill-btn ${s.id === customSelection.syrup.id ? 'active' : ''}" data-syrup="${s.id}">
        <span class="custom-pill-name">${s.icon} ${s.name}</span>
        <span class="custom-pill-sub">+${s.price} ₽</span>
      </div>
    `).join("");

    // 4. Toppings
    const toppingGrid = document.getElementById("custom-topping-options");
    toppingGrid.innerHTML = CUSTOMIZER_OPTIONS.toppings.map(t => `
      <div class="custom-pill-btn ${t.id === customSelection.topping.id ? 'active' : ''}" data-topping="${t.id}">
        <span class="custom-pill-name">✨ ${t.name}</span>
        <span class="custom-pill-sub">+${t.price} ₽</span>
      </div>
    `).join("");

    // Attach Click Events
    baseGrid.querySelectorAll(".custom-pill-btn").forEach(el => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-base");
        customSelection.base = CUSTOMIZER_OPTIONS.bases.find(x => x.id === id);
        renderCustomizerOptions();
        updateWantedPosterPreview();
      });
    });

    milkGrid.querySelectorAll(".custom-pill-btn").forEach(el => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-milk");
        customSelection.milk = CUSTOMIZER_OPTIONS.milks.find(x => x.id === id);
        renderCustomizerOptions();
        updateWantedPosterPreview();
      });
    });

    syrupGrid.querySelectorAll(".custom-pill-btn").forEach(el => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-syrup");
        customSelection.syrup = CUSTOMIZER_OPTIONS.devilSyrups.find(x => x.id === id);
        renderCustomizerOptions();
        updateWantedPosterPreview();
      });
    });

    toppingGrid.querySelectorAll(".custom-pill-btn").forEach(el => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-topping");
        customSelection.topping = CUSTOMIZER_OPTIONS.toppings.find(x => x.id === id);
        renderCustomizerOptions();
        updateWantedPosterPreview();
      });
    });
  }

  function updateWantedPosterPreview() {
    const totalRub = customSelection.base.price + customSelection.milk.price + customSelection.syrup.price + customSelection.topping.price;
    const totalBounty = customSelection.base.bounty + (customSelection.syrup.price * 10000000);

    const drinkTitle = `${customSelection.syrup.name.split(" ")[0]} ${customSelection.base.name.split(" ")[0]}`.toUpperCase();
    
    document.getElementById("poster-drink-title").textContent = drinkTitle;
    document.getElementById("poster-bounty-display").textContent = `฿ ${totalBounty.toLocaleString()}`;
    document.getElementById("btn-custom-label").textContent = `Добавить в трюм (${totalRub} ₽)`;
    
    const iconEl = document.getElementById("poster-fruit-icon");
    iconEl.textContent = customSelection.syrup.icon;

    // Glowing aura behind poster photo slot
    const photoSlot = document.getElementById("poster-photo-slot");
    photoSlot.style.boxShadow = `inset 0 0 40px ${customSelection.syrup.color}`;
  }

  // Add Custom Drink to Cart
  const btnAddCustom = document.getElementById("btn-add-custom-drink");
  if (btnAddCustom) {
    btnAddCustom.addEventListener("click", () => {
      const totalRub = customSelection.base.price + customSelection.milk.price + customSelection.syrup.price + customSelection.topping.price;
      const totalBounty = customSelection.base.bounty + (customSelection.syrup.price * 10000000);
      const drinkTitle = `${customSelection.syrup.name.split(" ")[0]} ${customSelection.base.name.split(" ")[0]}`;

      const customDrinkItem = {
        id: `custom-${Date.now()}`,
        name: `Авторский: ${drinkTitle}`,
        japaneseName: "特製カスタム",
        priceRub: totalRub,
        bounty: `฿ ${totalBounty.toLocaleString()}`,
        bountyRaw: totalBounty,
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80",
        specs: {
          roast: customSelection.base.name,
          caffeine: customSelection.base.caffeine,
          flavorNotes: [customSelection.milk.name, customSelection.syrup.name, customSelection.topping.name]
        }
      };

      addToCart(customDrinkItem);
    });
  }

  // --- CART DRAWER & CHECKOUT LOGIC ---
  const cartDrawer = document.getElementById("cart-drawer");
  const btnOpenCart = document.getElementById("btn-open-cart");
  const btnCloseCart = document.getElementById("btn-close-cart");
  const cartItemsList = document.getElementById("cart-items-list");
  const cartCounter = document.getElementById("cart-counter");
  const subtotalBeliEl = document.getElementById("cart-subtotal-beli");
  const totalRubEl = document.getElementById("cart-total-rub");

  function openCart() {
    cartDrawer.classList.add("active");
  }

  function closeCart() {
    cartDrawer.classList.remove("active");
  }

  btnOpenCart.addEventListener("click", openCart);
  btnCloseCart.addEventListener("click", closeCart);
  cartDrawer.addEventListener("click", (e) => {
    if (e.target === cartDrawer) closeCart();
  });

  function addToCart(item) {
    playCoinSound();
    const existing = cart.find(x => x.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    updateCartUI();
    openCart();
  }

  function updateCartUI() {
    // Total count badge
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCounter.textContent = totalCount;
    cartCounter.style.transform = "scale(1.3)";
    setTimeout(() => {
      cartCounter.style.transform = "scale(1)";
    }, 200);

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="cart-empty-state">
          <i data-lucide="anchor" style="width: 48px; height: 48px;"></i>
          <p>Трюм пока пуст, капитан!</p>
          <span style="font-size: 0.8rem; color: var(--text-dim);">Добавьте кофе или десерты из меню</span>
        </div>
      `;
      subtotalBeliEl.textContent = "฿ 0";
      totalRubEl.textContent = "0 ₽";
      document.getElementById("discount-row").style.display = "none";
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    // Render items
    cartItemsList.innerHTML = cart.map(item => `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-bounty">${item.bounty} • ${item.priceRub} ₽</div>
        </div>
        <div class="cart-item-stepper">
          <button class="btn-step btn-step-minus" data-id="${item.id}">-</button>
          <span style="font-weight: 700; min-width: 16px; text-align: center;">${item.quantity}</span>
          <button class="btn-step btn-step-plus" data-id="${item.id}">+</button>
        </div>
      </div>
    `).join("");

    // Calculate totals
    const rawBeli = cart.reduce((acc, i) => acc + (i.bountyRaw || 500000000) * i.quantity, 0);
    const subtotalRub = cart.reduce((acc, i) => acc + i.priceRub * i.quantity, 0);
    const discountRub = Math.round(subtotalRub * appliedDiscount);
    const finalRub = subtotalRub - discountRub;

    subtotalBeliEl.textContent = `฿ ${rawBeli.toLocaleString()}`;
    totalRubEl.textContent = `${finalRub} ₽`;

    if (appliedDiscount > 0) {
      const discountRow = document.getElementById("discount-row");
      discountRow.style.display = "flex";
      document.getElementById("discount-amount").textContent = `-${discountRub} ₽ (${Math.round(appliedDiscount * 100)}%)`;
    }

    // Stepper listeners
    cartItemsList.querySelectorAll(".btn-step-plus").forEach(b => {
      b.addEventListener("click", () => {
        const id = b.getAttribute("data-id");
        const itm = cart.find(x => x.id === id);
        if (itm) {
          itm.quantity += 1;
          playCoinSound();
          updateCartUI();
        }
      });
    });

    cartItemsList.querySelectorAll(".btn-step-minus").forEach(b => {
      b.addEventListener("click", () => {
        const id = b.getAttribute("data-id");
        const idx = cart.findIndex(x => x.id === id);
        if (idx !== -1) {
          if (cart[idx].quantity > 1) {
            cart[idx].quantity -= 1;
          } else {
            cart.splice(idx, 1);
          }
          updateCartUI();
        }
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // Promo Code Handler
  const promoInput = document.getElementById("cart-promo-input");
  const promoBtn = document.getElementById("btn-apply-promo");
  if (promoBtn) {
    promoBtn.addEventListener("click", () => {
      const code = promoInput.value.trim().toUpperCase();
      if (code === "ONEPIECE") {
        appliedDiscount = 0.15;
        alert("🏴‍☠️ Промокод ONEPIECE применён! Скидка 15% на весь заказ.");
      } else if (code === "SANJI") {
        appliedDiscount = 0.20;
        alert("👨‍🍳 Шеф Санджи одобряет! Скидка 20% от плавучего ресторана.");
      } else if (code === "PIRATEKING") {
        appliedDiscount = 0.25;
        alert("👑 Золотой Роджер в восторге! Королевская скидка 25%.");
      } else {
        alert("⚠️ Морской Дозор сообщает: неверный пиратский пароль!");
        return;
      }
      updateCartUI();
    });
  }

  // Checkout Action
  const btnCheckout = document.getElementById("btn-checkout-order");
  const orderSuccessModal = document.getElementById("order-success-modal");
  const btnCloseSuccess = document.getElementById("btn-close-success");

  if (btnCheckout) {
    btnCheckout.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Ваш трюм пуст! Выберите кофе перед отплытием.");
        return;
      }
      playCoinSound();
      closeCart();
      const randomOrderId = `BAR-${Math.floor(1000 + Math.random() * 9000)}`;
      document.getElementById("success-order-id").textContent = randomOrderId;
      orderSuccessModal.classList.add("active");
      cart = [];
      appliedDiscount = 0;
      updateCartUI();
    });
  }

  if (btnCloseSuccess) {
    btnCloseSuccess.addEventListener("click", () => {
      orderSuccessModal.classList.remove("active");
    });
  }

  // --- QUICK VIEW MODAL ---
  const quickViewModal = document.getElementById("quick-view-modal");
  const quickViewBody = document.getElementById("quick-view-body");
  const btnCloseQuickView = document.getElementById("btn-close-quick-view");

  function openQuickView(item) {
    quickViewBody.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 24px; align-items: center;">
        <img src="${item.image}" alt="${item.name}" style="width: 100%; border-radius: 12px; object-fit: cover; aspect-ratio: 1; border: 2px solid rgba(212, 175, 55, 0.4);">
        <div>
          <span style="font-size: 0.72rem; letter-spacing: 0.2em; color: ${item.accentColor}; font-weight: 700; text-transform: uppercase;">${item.character}</span>
          <h3 style="font-family: var(--font-display); font-size: 1.4rem; color: #fff; margin: 6px 0 10px;">${item.name}</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">${item.description}</p>
          
          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 12px; margin-bottom: 20px;">
            <div style="font-size: 0.8rem; color: #fff; margin-bottom: 4px;"><strong>Обжарка:</strong> ${item.specs.roast}</div>
            <div style="font-size: 0.8rem; color: #fff; margin-bottom: 4px;"><strong>Кофеин:</strong> ${item.specs.caffeine}</div>
            <div style="font-size: 0.8rem; color: #fff;"><strong>Происхождение:</strong> ${item.specs.origin}</div>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div>
              <div style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 800; color: var(--gold-bright);">${item.bounty}</div>
              <div style="font-size: 0.85rem; color: var(--text-muted);">${item.priceRub} ₽</div>
            </div>
            <button class="btn-primary-glow" id="btn-quick-add" style="padding: 10px 20px;">
              <i data-lucide="shopping-bag" style="width: 16px; height: 16px;"></i>
              <span>В Трюм</span>
            </button>
          </div>
        </div>
      </div>
    `;

    quickViewModal.classList.add("active");
    if (window.lucide) window.lucide.createIcons();

    document.getElementById("btn-quick-add").addEventListener("click", () => {
      addToCart(item);
      quickViewModal.classList.remove("active");
    });
  }

  if (btnCloseQuickView) {
    btnCloseQuickView.addEventListener("click", () => {
      quickViewModal.classList.remove("active");
    });
  }

  quickViewModal.addEventListener("click", (e) => {
    if (e.target === quickViewModal) quickViewModal.classList.remove("active");
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById("mobile-toggle");
  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      const navLinks = document.querySelector(".nav-links");
      if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
      } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "70px";
        navLinks.style.left = "20px";
        navLinks.style.right = "20px";
        navLinks.style.background = "#140d09";
        navLinks.style.padding = "20px";
        navLinks.style.borderRadius = "16px";
        navLinks.style.border = "1px solid rgba(212, 175, 55, 0.3)";
      }
    });
  }

  // --- INITIAL RENDERING ---
  updateHeroFeatured(0);
  renderMenu("all");
  renderCustomizerOptions();
  updateWantedPosterPreview();
});
