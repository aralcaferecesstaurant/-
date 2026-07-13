// ARAL CAFE RECESSTAURANT — menu data + interactions

// Always open fresh at the top of the page — don't let the browser
// jump to whatever section/hash was last scrolled to.
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
if (window.location.hash) {
  history.replaceState(null, "", window.location.pathname + window.location.search);
}
window.scrollTo(0, 0);

const MENU = {
  appetizers: {
    label: "Appetizers",
    eyebrow: "Period 1",
    items: [
      { name: "Attendance Bites", price: "₱183", desc: "Crispy chicken bites seasoned with special spices, served with honey mustard dip." },
      { name: "First Bell Fries", price: "₱166", desc: "Golden crispy fries topped with cheese sauce and bacon bits." },
      { name: "Recess Nachos", price: "₱166", desc: "Loaded tortilla chips with melted cheese, salsa, sour cream, and jalapeños." },
      { name: "Honor Roll Rings", price: "₱176", desc: "Crispy golden onion rings served with smoky BBQ sauce." },
      { name: "Classmate Calamares", price: "₱196", desc: "Crispy squid rings with tangy vinegar garlic dip." },
      { name: "Seatmate Siomai", price: "₱100", desc: "Steamed pork and shrimp dumplings with chili garlic sauce." },
      { name: "Star Student Lumpiang Shanghai", price: "₱116", desc: "Crispy spring rolls stuffed with seasoned ground pork and vegetables." },
      { name: "Perfect Score Poppers", price: "₱180", desc: "Cream cheese-filled jalapeño poppers with ranch dip." },
      { name: "Baon Platter", price: "₱600", desc: "A shareable combo of all our best appetizers for the whole barkada." }
    ]
  },
  mains: {
    label: "Main Course",
    eyebrow: "Period 2",
    items: [
      { name: "Campus Chicken Steak", price: "₱199", desc: "Grilled chicken served with rich mushroom gravy and steamed rice." },
      { name: "Class President Beef Tapa", price: "₱219", desc: "Marinated beef served with garlic rice and a fried egg." },
      { name: "Homeroom Pork Sisig", price: "₱209", desc: "Crispy pork sisig served on a sizzling plate with rice." },
      { name: "Achievement Garlic Butter Shrimp", price: "₱249", desc: "Shrimp sautéed in garlic butter, served with steamed rice." },
      { name: "Library Carbonara", price: "₱189", desc: "Pasta in a creamy sauce with bacon and parmesan cheese." },
      { name: "Study Break Chicken Sandwich", price: "₱179", desc: "Crispy chicken fillet with lettuce, tomato, and mayonnaise in a toasted bun, served with fries." },
      { name: "School Spirit Grilled Pork Chop", price: "₱200", desc: "Seasoned grilled pork chop served with rice and mixed vegetables." },
      { name: "Honor Roll Fried Chicken", price: "₱199", desc: "Crispy fried chicken served with steamed rice and gravy." },
      { name: "Blackboard Beef Caldereta", price: "₱230", desc: "Tender beef cooked in a rich tomato-based sauce with potatoes and carrots, served with rice." },
      { name: "Exam Day Fish Fillet", price: "₱210", desc: "Golden fried fish fillet served with tartar sauce, rice, and mixed vegetables." }
    ]
  },
  alacarte: {
    label: "À La Carte",
    eyebrow: "Period 3",
    items: [
      { name: "Valedictorian Burger", price: "₱207", desc: "Grilled beef patty, cheese, lettuce, tomato, and special burger sauce in a toasted bun." },
      { name: "Principal's Chicken Steak", price: "₱287", desc: "Pan-grilled seasoned chicken served with rich mushroom gravy." },
      { name: "Top Scholar Beef Tapa", price: "₱217", desc: "Beef marinated in soy sauce, garlic, sugar, and spices, then pan-fried until tender." },
      { name: "Recess Sisig", price: "₱203", desc: "Crispy pork, onions, chili, and seasonings, served on a sizzling plate." },
      { name: "Gold Star Garlic Butter Shrimp", price: "₱300", desc: "Fresh shrimp sautéed in garlic, butter, and herbs until fully cooked." },
      { name: "Notebook Carbonara", price: "₱217", desc: "Pasta tossed in a creamy sauce with bacon, cheese, and seasonings." },
      { name: "School Bell Chicken Sandwich", price: "₱133", desc: "Crispy chicken, lettuce, tomato, and mayonnaise served in a toasted bun." }
    ]
  },
  drinks: {
    label: "Drinks",
    eyebrow: "Period 4",
    sized: true,
    groups: [
      {
        title: "Refreshers",
        items: [
          { name: "Chalkboard Iced Tea", price: ["₱95", "₱115", "₱135"], desc: "Refreshing brewed tea with a balanced sweet and citrus flavor." },
          { name: "Freshmen Lemonade", price: ["₱105", "₱125", "₱145"], desc: "Fresh and tangy lemonade, perfect for cooling down." },
          { name: "Blue Ribbon Lemonade", price: ["₱115", "₱135", "₱155"], desc: "A vibrant blue citrus drink with a sweet and refreshing taste." },
          { name: "Green Classroom Lemonade", price: ["₱120", "₱140", "₱160"], desc: "A refreshing blend of cucumber and lemonade with a light, crisp flavor." }
        ]
      },
      {
        title: "Fruit Juices",
        items: [
          { name: "School Garden Mango Juice", price: ["₱125", "₱145", "₱165"], desc: "Sweet and fruity mango drink made from ripe mangoes." },
          { name: "Sunrise Orange Juice", price: ["₱120", "₱140", "₱160"], desc: "Fresh orange juice with a naturally sweet and tangy taste." },
          { name: "Apple Academy Juice", price: ["₱110", "₱130", "₱150"], desc: "Smooth and refreshing apple-flavored juice." },
          { name: "Golden Bell Pineapple Juice", price: ["₱120", "₱140", "₱160"], desc: "Tropical pineapple juice with a sweet and tangy kick." }
        ]
      },
      {
        title: "Milk Tea",
        items: [
          { name: "Black Ink Milk Tea", price: ["₱155", "₱175", "₱195"], desc: "Creamy black tea with milk and a perfectly sweet flavor." },
          { name: "Maple Leaf Milk Tea", price: ["₱160", "₱180", "₱200"], desc: "Sweet wintermelon-flavored milk tea with a smooth finish." },
          { name: "Purple Pen Taro Milk Tea", price: ["₱170", "₱190", "₱210"], desc: "Creamy milk tea with a rich and nutty taro flavor." }
        ]
      },
      {
        title: "Coffee",
        items: [
          { name: "Morning Bell Café Latte", price: ["₱165", "₱185", "₱205"], desc: "Freshly brewed espresso mixed with steamed milk." },
          { name: "Teacher's Cappuccino", price: ["₱165", "₱185", "₱205"], desc: "Espresso topped with creamy steamed milk and rich foam." },
          { name: "Quiz Time Americano", price: ["₱135", "₱155", "₱175"], desc: "Bold espresso diluted with hot water for a smooth coffee experience." },
          { name: "Gold Medal Caramel Macchiato", price: ["₱185", "₱205", "₱225"], desc: "Espresso with steamed milk and sweet caramel drizzle." },
          { name: "Final Exam Mocha", price: ["₱190", "₱210", "₱230"], desc: "A delicious blend of espresso, chocolate, and steamed milk." }
        ]
      },
      {
        title: "Chocolate & Matcha",
        items: [
          { name: "Cozy Cocoa", price: ["₱145", "₱165", "₱185"], desc: "Rich, creamy hot chocolate made with premium cocoa." },
          { name: "Frost Bite Chocolate", price: ["₱155", "₱175", "₱195"], desc: "Chilled chocolate drink with a smooth and creamy finish." },
          { name: "Green Highlighter Matcha Latte", price: ["₱185", "₱205", "₱225"], desc: "Premium matcha blended with fresh milk for a creamy, earthy taste." }
        ]
      },
      {
        title: "Milkshakes",
        items: [
          { name: "Vanilla Diploma Milkshake", price: ["₱195", "₱215", "₱235"], desc: "Creamy vanilla ice cream blended into a smooth, refreshing shake." },
          { name: "Chocolate Eraser Milkshake", price: ["₱205", "₱225", "₱245"], desc: "Rich chocolate milkshake with a creamy texture." },
          { name: "Strawberry Notebook Milkshake", price: ["₱205", "₱225", "₱245"], desc: "Sweet strawberry-flavored milkshake made extra creamy." },
          { name: "School Fair Mango Shake", price: ["₱185", "₱205", "₱225"], desc: "Refreshing blended mango shake made from ripe mangoes." }
        ]
      }
    ]
  },
  beverages: {
    label: "Specialty Beverages",
    eyebrow: "Period 5",
    items: [
      { name: "Schoolhouse Iced Ube Latte", price: "₱195", desc: "Creamy espresso blended with purple yam syrup and fresh milk, served chilled." },
      { name: "Dean's Choice Sea Salt Caramel Mocha", price: "₱210", desc: "Espresso, dark chocolate, and caramel, topped with sea salt foam." },
      { name: "Green Badge Matcha Coconut Latte", price: "₱200", desc: "Premium matcha whisked with coconut milk and a touch of honey." },
      { name: "Campus Fuel Milo Dinosaur", price: "₱165", desc: "Chocolate malt drink topped with extra Milo powder and cold milk." },
      { name: "Diploma Salted Caramel Hot Chocolate", price: "₱195", desc: "Rich cocoa melted with milk, salted caramel syrup, and whipped cream." },
      { name: "Chalk Leaf Pandan Iced Tea", price: "₱155", desc: "Black tea infused with fragrant pandan leaves, served chilled with sugar." },
      { name: "Honor Badge Hazelnut Cappuccino", price: "₱185", desc: "Rich espresso topped with frothy milk and nutty hazelnut flavor." }
    ]
  },
  desserts: {
    label: "Desserts",
    eyebrow: "Period 6",
    items: [
      { name: "Valedictorian Leche Flan", price: "₱119", desc: "Silky steamed egg yolk custard topped with smooth caramel syrup, served chilled." },
      { name: "School Fair Halo-Halo Special", price: "₱169", desc: "Shaved ice mixed with sweet beans, fruits, jellies, ube halaya, leche flan, and evaporated milk." },
      { name: "Purple Ink Ube Halaya", price: "₱129", desc: "Rich purple yam pudding slow-cooked with coconut milk, butter, and condensed milk." },
      { name: "Lesson Break Maja Blanca", price: "₱109", desc: "Soft coconut pudding with sweet corn kernels, topped with toasted latik." },
      { name: "Reading Time Turon with Langka", price: "₱99", desc: "Crispy fried saba banana rolls with jackfruit and brown sugar, served warm." },
      { name: "Honor Board Mango Graham Float", price: "₱139", desc: "Layers of graham crackers, sweet cream, and ripe Philippine mangoes, chilled to perfection." },
      { name: "Project Day Buko Pandan Delight", price: "₱129", desc: "Fresh young coconut, pandan jelly, and tapioca pearls in sweet chilled cream." },
      { name: "Homestyle Cassava Cake", price: "₱119", desc: "Moist grated cassava baked with coconut milk, topped with creamy cheese." },
      { name: "Learning Layers Sapin-Sapin", price: "₱125", desc: "Colorful layered glutinous rice cake with ube, langka, and pandan flavors, sprinkled with latik." },
      { name: "Brown Paper Biko", price: "₱105", desc: "Sweet sticky rice cooked in coconut milk and muscovado sugar, topped with toasted coconut curds." },
      { name: "Purple Crayon Ube Cheese Ice Cream", price: "₱149", desc: "Creamy purple yam ice cream swirled with savory cheese bits." },
      { name: "Summer Class Mango Coconut Ice Cream", price: "₱139", desc: "Made with ripe carabao mangoes and fresh coconut milk." },
      { name: "Jackfruit Journal Ice Cream", price: "₱135", desc: "Smooth ice cream infused with sweet, fragrant jackfruit." },
      { name: "Merit Ribbon Salted Caramel Pastillas Ice Cream", price: "₱155", desc: "Creamy milk candy flavor with salted caramel ribbons." },
      { name: "School Days Sorbetes Trio", price: "₱169", desc: "One scoop each of ube, cheese, and mango traditional Filipino ice cream." }
    ]
  }
};

const STAFF = [
  { name: "Kelly Punzalan", role: "", handle: "@pvtt_kelly" },
  { name: "Jaypee Maximo", role: "", handle: "@0nly_stan" },
  { name: "Floriza De Guzman", role: "", handle: "@fm_dgzmnnn" },
  { name: "Kimjhundie Aloro", role: "", handle: "@kzeikk_" },
  { name: "Lei Angel Cordova", role: "", handle: "@lei_crdv" },
  { name: "Liane Villegas", role: "", handle: "@lia_ynaz" }
];

// ---------- Cart state ----------

const cart = {}; // id -> { name, size, unitPrice, qty }

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function parsePeso(str) {
  return Number(String(str).replace(/[^\d.]/g, "")) || 0;
}

// ---------- Rendering ----------

function priceTag(price) {
  if (Array.isArray(price)) {
    const labels = ["S", "M", "L"];
    return `<div class="price-grid">${price
      .map((p, i) => `<span class="price-cell"><em>${labels[i]}</em>${p}</span>`)
      .join("")}</div>`;
  }
  return `<span class="price-stamp">${price}</span>`;
}

function itemCard(item, sectionKey) {
  const id = slugify(`${sectionKey}-${item.name}`);

  if (Array.isArray(item.price)) {
    const labels = ["S", "M", "L"];
    const options = item.price
      .map((p, i) => `<option value="${i}">${labels[i]} — ${p}</option>`)
      .join("");
    return `
      <article class="menu-card" data-id="${id}">
        <div class="menu-card-head">
          <h3>${item.name}</h3>
          ${priceTag(item.price)}
        </div>
        <p>${item.desc}</p>
        <div class="order-row">
          <select class="size-select" id="size-${id}" aria-label="Size for ${item.name}">${options}</select>
          <button class="add-btn" data-id="${id}" data-name="${item.name}" data-sized="true">+ Add</button>
        </div>
      </article>`;
  }

  return `
    <article class="menu-card" data-id="${id}">
      <div class="menu-card-head">
        <h3>${item.name}</h3>
        ${priceTag(item.price)}
      </div>
      <p>${item.desc}</p>
      <div class="order-row">
        <button class="add-btn" data-id="${id}" data-name="${item.name}" data-price="${parsePeso(item.price)}">+ Add to Order</button>
      </div>
    </article>`;
}

function renderSection(key, data) {
  const container = document.getElementById(`section-${key}`);
  if (!container) return;

  if (data.groups) {
    container.innerHTML = data.groups
      .map(
        (g) => `
        <div class="drink-group">
          <h4 class="drink-group-title">${g.title}</h4>
          <div class="menu-grid">
            ${g.items.map((item) => itemCard(item, key)).join("")}
          </div>
        </div>`
      )
      .join("");
  } else {
    container.innerHTML = `<div class="menu-grid">${data.items.map((item) => itemCard(item, key)).join("")}</div>`;
  }
}

function renderStaff() {
  const container = document.getElementById("staff-list");
  if (!container) return;
  container.innerHTML = STAFF.map(
    (s) => `
    <div class="staff-card">
      <div class="staff-avatar" aria-hidden="true">${s.name.charAt(0)}</div>
      <h4>${s.name}</h4>
      ${s.role ? `<p class="staff-role">${s.role}</p>` : ""}
      <p class="staff-handle">${s.handle}</p>
    </div>`
  ).join("");
}

function buildNavTabs() {
  const nav = document.getElementById("period-tabs");
  if (!nav) return;
  nav.innerHTML = Object.entries(MENU)
    .map(
      ([key, data]) =>
        `<a href="#${key}" class="tab" data-key="${key}"><span class="tab-eyebrow">${data.eyebrow}</span>${data.label}</a>`
    )
    .join("");
}

// ---------- Cart logic ----------

function addToCart(id, name, unitPrice, size) {
  const key = size ? `${id}-${size}` : id;
  if (cart[key]) {
    cart[key].qty += 1;
  } else {
    cart[key] = { name, size, unitPrice, qty: 1 };
  }
  renderCart();
  openCart();
  pulseCartButton();
}

function removeFromCart(key) {
  delete cart[key];
  renderCart();
}

function changeQty(key, delta) {
  if (!cart[key]) return;
  cart[key].qty += delta;
  if (cart[key].qty <= 0) delete cart[key];
  renderCart();
}

function cartTotal() {
  return Object.values(cart).reduce((sum, i) => sum + i.unitPrice * i.qty, 0);
}

function cartCount() {
  return Object.values(cart).reduce((sum, i) => sum + i.qty, 0);
}

function renderCart() {
  const list = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  const badge = document.getElementById("cart-badge");
  const emptyMsg = document.getElementById("cart-empty");
  const checkoutBtn = document.getElementById("checkout-btn");
  if (!list) return;

  const entries = Object.entries(cart);
  const count = cartCount();

  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
  checkoutBtn.disabled = count === 0;
  emptyMsg.style.display = entries.length === 0 ? "block" : "none";

  list.innerHTML = entries
    .map(
      ([key, item]) => `
      <li class="cart-item">
        <div class="cart-item-info">
          <span class="cart-item-name">${item.name}${item.size ? ` <em>(${["S", "M", "L"][item.size]})</em>` : ""}</span>
          <span class="cart-item-price">₱${item.unitPrice * item.qty}</span>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" data-action="dec" data-key="${key}" aria-label="Decrease quantity">–</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" data-action="inc" data-key="${key}" aria-label="Increase quantity">+</button>
          <button class="remove-btn" data-key="${key}" aria-label="Remove item">✕</button>
        </div>
      </li>`
    )
    .join("");

  totalEl.textContent = `₱${cartTotal()}`;
}

function pulseCartButton() {
  const btn = document.getElementById("cart-fab");
  if (!btn) return;
  btn.classList.remove("pulse");
  void btn.offsetWidth;
  btn.classList.add("pulse");
}

function openCart() {
  document.getElementById("cart-drawer")?.classList.add("open");
  document.getElementById("cart-overlay")?.classList.add("open");
}

function closeCart() {
  document.getElementById("cart-drawer")?.classList.remove("open");
  document.getElementById("cart-overlay")?.classList.remove("open");
}

function randomOrderCode() {
  const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  const l = letters.charAt(Math.floor(Math.random() * letters.length));
  const num = Math.floor(100 + Math.random() * 900);
  return `AC-${l}${num}`;
}

function placeOrder() {
  if (cartCount() === 0) return;
  const code = randomOrderCode();
  const total = cartTotal();
  const mins = 12 + Math.floor(Math.random() * 14);

  document.getElementById("cart-body").style.display = "none";
  document.getElementById("cart-confirmation").style.display = "block";
  document.getElementById("order-code").textContent = code;
  document.getElementById("order-total").textContent = `₱${total}`;
  document.getElementById("order-eta").textContent = `${mins} minutes`;

  Object.keys(cart).forEach((k) => delete cart[k]);
  renderCart();
}

function resetCartView() {
  document.getElementById("cart-body").style.display = "block";
  document.getElementById("cart-confirmation").style.display = "none";
}

function initCart() {
  document.body.addEventListener("click", (e) => {
    const addBtn = e.target.closest(".add-btn");
    if (addBtn) {
      const id = addBtn.dataset.id;
      const name = addBtn.dataset.name;
      if (addBtn.dataset.sized) {
        const select = document.getElementById(`size-${id}`);
        const idx = Number(select.value);
        const card = addBtn.closest(".menu-card");
        const priceCells = card.querySelectorAll(".price-cell");
        const price = parsePeso(priceCells[idx].textContent);
        addToCart(id, name, price, idx);
      } else {
        addToCart(id, name, Number(addBtn.dataset.price));
      }
      return;
    }

    const qtyBtn = e.target.closest(".qty-btn");
    if (qtyBtn) {
      changeQty(qtyBtn.dataset.key, qtyBtn.dataset.action === "inc" ? 1 : -1);
      return;
    }

    const removeBtn = e.target.closest(".remove-btn");
    if (removeBtn) {
      removeFromCart(removeBtn.dataset.key);
      return;
    }
  });

  document.getElementById("cart-fab")?.addEventListener("click", openCart);
  document.getElementById("cart-close")?.addEventListener("click", closeCart);
  document.getElementById("cart-overlay")?.addEventListener("click", closeCart);
  document.getElementById("checkout-btn")?.addEventListener("click", placeOrder);
  document.getElementById("order-again-btn")?.addEventListener("click", () => {
    resetCartView();
    closeCart();
  });

  renderCart();
}

// ---------- Reservation ----------

function randomReservationCode() {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `RES-${num}`;
}

function initReservation() {
  const form = document.getElementById("reservation-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("res-name").value.trim();
    const guests = document.getElementById("res-guests").value;
    const date = document.getElementById("res-date").value;
    const time = document.getElementById("res-time").value;

    if (!name || !date || !time) return;

    const code = randomReservationCode();
    document.getElementById("res-form-view").style.display = "none";
    document.getElementById("res-confirmation").style.display = "block";
    document.getElementById("res-code").textContent = code;
    document.getElementById("res-summary").textContent =
      `${name} · ${guests} ${guests === "1" ? "guest" : "guests"} · ${formatDate(date)} at ${formatTime(time)}`;
  });

  document.getElementById("res-again-btn")?.addEventListener("click", () => {
    form.reset();
    document.getElementById("res-form-view").style.display = "block";
    document.getElementById("res-confirmation").style.display = "none";
  });
}

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString("en-PH", { weekday: "short", month: "short", day: "numeric" });
}

function formatTime(timeStr) {
  const [h, m] = timeStr.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${period}`;
}

function initScrollSpy() {
  const tabs = document.querySelectorAll(".tab");
  const sections = Object.keys(MENU).map((k) => document.getElementById(k));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          tabs.forEach((t) => t.classList.toggle("active", t.dataset.key === id));
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach((s) => s && observer.observe(s));
}

function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const tabs = document.getElementById("period-tabs");
  if (!toggle || !tabs) return;
  toggle.addEventListener("click", () => {
    tabs.classList.toggle("open");
    toggle.classList.toggle("open");
  });
  tabs.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      tabs.classList.remove("open");
      toggle.classList.remove("open");
    })
  );
}

let audioCtx = null;

function playBellSound() {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();

    const now = audioCtx.currentTime;
    // A bell = a fundamental tone plus a few slightly inharmonic overtones,
    // each with its own quick-attack, long-decay envelope.
    const partials = [
      { freq: 830, gain: 0.35, decay: 1.4 },
      { freq: 1245, gain: 0.22, decay: 1.1 },
      { freq: 1660, gain: 0.14, decay: 0.9 },
      { freq: 2075, gain: 0.09, decay: 0.7 },
      { freq: 2895, gain: 0.05, decay: 0.5 }
    ];

    partials.forEach((p) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.value = p.freq;

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(p.gain, now + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.001, now + p.decay);

      osc.connect(gain).connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + p.decay + 0.1);
    });
  } catch (e) {
    // Web Audio not available — animation still plays, just silently.
  }
}

function initBell() {
  const bell = document.getElementById("recess-bell");
  if (!bell) return;
  bell.addEventListener("click", () => {
    bell.classList.remove("ring");
    void bell.offsetWidth; // restart animation
    bell.classList.add("ring");
    playBellSound();
  });
}

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  buildNavTabs();
  Object.entries(MENU).forEach(([key, data]) => renderSection(key, data));
  renderStaff();
  initScrollSpy();
  initMobileNav();
  initBell();
  initCart();
  initReservation();
  setYear();
});
