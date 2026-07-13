// ARAL CAFE RECESSTAURANT — menu data + interactions

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
      { name: "Valedictorian Burger", price: "₱120", desc: "Grilled beef patty, cheese, lettuce, tomato, and special burger sauce in a toasted bun." },
      { name: "Principal's Chicken Steak", price: "₱185", desc: "Pan-grilled seasoned chicken served with rich mushroom gravy." },
      { name: "Top Scholar Beef Tapa", price: "₱190", desc: "Beef marinated in soy sauce, garlic, sugar, and spices, then pan-fried until tender." },
      { name: "Recess Sisig", price: "₱205", desc: "Crispy pork, onions, chili, and seasonings, served on a sizzling plate." },
      { name: "Gold Star Garlic Butter Shrimp", price: "₱180", desc: "Fresh shrimp sautéed in garlic, butter, and herbs until fully cooked." },
      { name: "Notebook Carbonara", price: "₱130", desc: "Pasta tossed in a creamy sauce with bacon, cheese, and seasonings." },
      { name: "School Bell Chicken Sandwich", price: "₱100", desc: "Crispy chicken, lettuce, tomato, and mayonnaise served in a toasted bun." }
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
          { name: "Chalkboard Iced Tea", price: ["₱39", "₱49", "₱59"], desc: "Refreshing brewed tea with a balanced sweet and citrus flavor." },
          { name: "Freshmen Lemonade", price: ["₱45", "₱55", "₱65"], desc: "Fresh and tangy lemonade, perfect for cooling down." },
          { name: "Blue Ribbon Lemonade", price: ["₱49", "₱59", "₱69"], desc: "A vibrant blue citrus drink with a sweet and refreshing taste." },
          { name: "Green Classroom Lemonade", price: ["₱49", "₱59", "₱69"], desc: "A refreshing blend of cucumber and lemonade with a light, crisp flavor." }
        ]
      },
      {
        title: "Fruit Juices",
        items: [
          { name: "School Garden Mango Juice", price: ["₱45", "₱55", "₱65"], desc: "Sweet and fruity mango drink made from ripe mangoes." },
          { name: "Sunrise Orange Juice", price: ["₱45", "₱55", "₱65"], desc: "Fresh orange juice with a naturally sweet and tangy taste." },
          { name: "Apple Academy Juice", price: ["₱45", "₱55", "₱65"], desc: "Smooth and refreshing apple-flavored juice." },
          { name: "Golden Bell Pineapple Juice", price: ["₱45", "₱55", "₱65"], desc: "Tropical pineapple juice with a sweet and tangy kick." }
        ]
      },
      {
        title: "Milk Tea",
        items: [
          { name: "Black Ink Milk Tea", price: ["₱69", "₱79", "₱89"], desc: "Creamy black tea with milk and a perfectly sweet flavor." },
          { name: "Maple Leaf Milk Tea", price: ["₱69", "₱79", "₱89"], desc: "Sweet wintermelon-flavored milk tea with a smooth finish." },
          { name: "Purple Pen Taro Milk Tea", price: ["₱69", "₱79", "₱89"], desc: "Creamy milk tea with a rich and nutty taro flavor." }
        ]
      },
      {
        title: "Coffee",
        items: [
          { name: "Morning Bell Café Latte", price: ["₱79", "₱89", "₱99"], desc: "Freshly brewed espresso mixed with steamed milk." },
          { name: "Teacher's Cappuccino", price: ["₱79", "₱89", "₱99"], desc: "Espresso topped with creamy steamed milk and rich foam." },
          { name: "Quiz Time Americano", price: ["₱69", "₱79", "₱89"], desc: "Bold espresso diluted with hot water for a smooth coffee experience." },
          { name: "Gold Medal Caramel Macchiato", price: ["₱89", "₱99", "₱109"], desc: "Espresso with steamed milk and sweet caramel drizzle." },
          { name: "Final Exam Mocha", price: ["₱89", "₱99", "₱109"], desc: "A delicious blend of espresso, chocolate, and steamed milk." }
        ]
      },
      {
        title: "Chocolate & Matcha",
        items: [
          { name: "Cozy Cocoa", price: ["₱59", "₱69", "₱79"], desc: "Rich, creamy hot chocolate made with premium cocoa." },
          { name: "Frost Bite Chocolate", price: ["₱65", "₱75", "₱85"], desc: "Chilled chocolate drink with a smooth and creamy finish." },
          { name: "Green Highlighter Matcha Latte", price: ["₱79", "₱89", "₱99"], desc: "Premium matcha blended with fresh milk for a creamy, earthy taste." }
        ]
      },
      {
        title: "Milkshakes",
        items: [
          { name: "Vanilla Diploma Milkshake", price: ["₱89", "₱99", "₱109"], desc: "Creamy vanilla ice cream blended into a smooth, refreshing shake." },
          { name: "Chocolate Eraser Milkshake", price: ["₱89", "₱99", "₱109"], desc: "Rich chocolate milkshake with a creamy texture." },
          { name: "Strawberry Notebook Milkshake", price: ["₱89", "₱99", "₱109"], desc: "Sweet strawberry-flavored milkshake made extra creamy." },
          { name: "School Fair Mango Shake", price: ["₱85", "₱95", "₱105"], desc: "Refreshing blended mango shake made from ripe mangoes." }
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
      { name: "Valedictorian Leche Flan", price: "₱95", desc: "Silky steamed egg yolk custard topped with smooth caramel syrup, served chilled." },
      { name: "School Fair Halo-Halo Special", price: "₱120", desc: "Shaved ice mixed with sweet beans, fruits, jellies, ube halaya, leche flan, and evaporated milk." },
      { name: "Purple Ink Ube Halaya", price: "₱105", desc: "Rich purple yam pudding slow-cooked with coconut milk, butter, and condensed milk." },
      { name: "Lesson Break Maja Blanca", price: "₱85", desc: "Soft coconut pudding with sweet corn kernels, topped with toasted latik." },
      { name: "Reading Time Turon with Langka", price: "₱75", desc: "Crispy fried saba banana rolls with jackfruit and brown sugar, served warm." },
      { name: "Honor Board Mango Graham Float", price: "₱90", desc: "Layers of graham crackers, sweet cream, and ripe Philippine mangoes, chilled to perfection." },
      { name: "Project Day Buko Pandan Delight", price: "₱95", desc: "Fresh young coconut, pandan jelly, and tapioca pearls in sweet chilled cream." },
      { name: "Homestyle Cassava Cake", price: "₱85", desc: "Moist grated cassava baked with coconut milk, topped with creamy cheese." },
      { name: "Learning Layers Sapin-Sapin", price: "₱90", desc: "Colorful layered glutinous rice cake with ube, langka, and pandan flavors, sprinkled with latik." },
      { name: "Brown Paper Biko", price: "₱80", desc: "Sweet sticky rice cooked in coconut milk and muscovado sugar, topped with toasted coconut curds." },
      { name: "Purple Crayon Ube Cheese Ice Cream", price: "₱110", desc: "Creamy purple yam ice cream swirled with savory cheese bits." },
      { name: "Summer Class Mango Coconut Ice Cream", price: "₱105", desc: "Made with ripe carabao mangoes and fresh coconut milk." },
      { name: "Jackfruit Journal Ice Cream", price: "₱100", desc: "Smooth ice cream infused with sweet, fragrant jackfruit." },
      { name: "Merit Ribbon Salted Caramel Pastillas Ice Cream", price: "₱115", desc: "Creamy milk candy flavor with salted caramel ribbons." },
      { name: "School Days Sorbetes Trio", price: "₱130", desc: "One scoop each of ube, cheese, and mango traditional Filipino ice cream." }
    ]
  }
};

const STAFF = [
  { name: "Kelly Punzalan", role: "", handle: "" },
  { name: "Jaypee Maximo", role: "", handle: "" },
  { name: "Floriza De Guzman", role: "", handle: "" },
  { name: "Kimjhundie Aloro", role: "", handle: "" },
  { name: "Lei Angel Cordova", role: "", handle: "" },
  { name: "Liane Villegas", role: "", handle: "" },
];

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

function itemCard(item) {
  return `
    <article class="menu-card">
      <div class="menu-card-head">
        <h3>${item.name}</h3>
        ${priceTag(item.price)}
      </div>
      <p>${item.desc}</p>
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
            ${g.items.map(itemCard).join("")}
          </div>
        </div>`
      )
      .join("");
  } else {
    container.innerHTML = `<div class="menu-grid">${data.items.map(itemCard).join("")}</div>`;
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
      <p class="staff-role">${s.role}</p>
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

// ---------- Interactions ----------

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

function initBell() {
  const bell = document.getElementById("recess-bell");
  if (!bell) return;
  bell.addEventListener("click", () => {
    bell.classList.remove("ring");
    void bell.offsetWidth; // restart animation
    bell.classList.add("ring");
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
  setYear();
});
