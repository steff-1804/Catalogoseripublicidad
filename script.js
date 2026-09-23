const PRODUCTS = [{"id": "jarro-blanco", "name": "Jarros Blancos", "category": "tazas-bolsos", "image": "assets/jarro_blanco.png", "subtitle": "Jarros personalizados", "prices": [["Cantidad 12", "$3,00"], ["Caja de 36 unidades", "$2,75"], ["A partir de 3 cajas", "$2,50"]]}, {"id": "jarro-magico", "name": "Jarros Mágicos", "category": "tazas-bolsos", "image": "assets/jarro_magico.png", "subtitle": "Cambio visual con temperatura", "prices": [["Cantidad 12", "$4,50"], ["Caja de 36 unidades", "$4,25"], ["A partir de 3 cajas", "$4,00"]]}, {"id": "bolso-cambrela", "name": "Bolsos de Cambrela", "category": "tazas-bolsos", "image": "assets/bolso_cambrela.png", "subtitle": "Medida 40 × 50", "prices": [["Cantidad 50", "$1,50"], ["Cantidad 100", "$1,35"], ["Cantidad 300", "$1,25"], ["Cantidad 500", "$1,15"]]}, {"id": "sport-bag", "name": "Sport Bag en Cambrela", "category": "tazas-bolsos", "image": "assets/sport_bag.png", "subtitle": "Bolso deportivo promocional", "prices": [["Cantidad 50", "$1,50"], ["Cantidad 100", "$1,35"], ["Cantidad 300", "$1,25"], ["Cantidad 500", "$1,15"]]}, {"id": "calendarios", "name": "Calendarios Personalizados", "category": "promocionales", "image": "assets/calendarios.png", "subtitle": "Tamaño 60 × 45", "prices": [["Cantidad mínima 500", "$400"], ["Otras medidas", "Precio a cotizar"]], "note": "En otras medidas, el precio se cotiza según la cantidad."}, {"id": "boligrafos", "name": "Bolígrafos", "category": "promocionales", "image": "assets/boligrafos.png", "subtitle": "Personalización corporativa", "prices": [["Cantidad 100", "$0,80"], ["Cantidad 300", "$0,70"], ["Mayor cantidad", "Según modelo"]], "note": "Para mayor cantidad, el precio depende del modelo del esfero."}, {"id": "llaveros-goma", "name": "Llaveros de Goma", "category": "promocionales", "image": "assets/llaveros.png", "subtitle": "Inyección personalizada", "prices": [["Cantidad 500 / 3 colores", "$1,10"], ["Más colores", "Precio a cotizar"]], "note": "Inyección de más colores: precio a cotizar."}, {"id": "tomatodos", "name": "Tomatodos de 400 ml", "category": "promocionales", "image": "assets/tomatodos.png", "subtitle": "Tomatodo promocional", "prices": [["Cantidad 100", "$1,30"], ["Cantidad 300", "$1,10"], ["Cantidad 500", "$1,00"]]}, {"id": "gorra-camionera", "name": "Gorras Camioneras", "category": "gorras", "image": "assets/gorra_camionera.png", "subtitle": "Modelo camionero", "prices": [["Cantidad 50 a 100", "$2,70"], ["Cantidad 100 a 250", "$2,45"], ["Mayor a 250", "A convenir"]]}, {"id": "gorra-acrilica", "name": "Gorras Acrílicas", "category": "gorras", "image": "assets/gorra_acrilica.png", "subtitle": "Modelo acrílico", "prices": [["Cantidad 50 a 100", "$3,50"], ["Cantidad 100 a 250", "$3,25"], ["Mayor a 250", "A convenir"]]}, {"id": "gorra-algodon", "name": "Gorras en Algodón", "category": "gorras", "image": "assets/gorra_algodon.png", "subtitle": "Modelo en algodón", "prices": [["Cantidad 50 a 100", "$3,50"], ["Cantidad 100 a 250", "$3,25"], ["Mayor a 250", "A convenir"]]}, {"id": "gorra-gabardina", "name": "Gorras en Gabardina", "category": "gorras", "image": "assets/gorra_gabardina.png", "subtitle": "Modelo en gabardina", "prices": [["Cantidad 50 a 100", "$3,50"], ["Cantidad 100 a 250", "$3,25"], ["Mayor a 250", "A convenir"]]}, {"id": "polo-blanca-pique", "name": "Camisetas Blancas Polo en Tela Piqué", "category": "textiles", "image": "assets/polo_blanca_pique.png", "subtitle": "Polo blanca en tela piqué", "prices": [["Cantidad 12 a 24", "$9,00"], ["Cantidad 25 a 50", "$8,50"], ["Cantidad 100", "$8,00"], ["De 1000 en adelante", "A convenir"]]}, {"id": "polo-color-pique", "name": "Camisetas a Color Polo en Tela Piqué", "category": "textiles", "image": "assets/polo_color_pique.png", "subtitle": "Polo a color en tela piqué", "prices": [["Cantidad 12 a 24", "$9,50"], ["Cantidad 25 a 50", "$9,00"], ["Cantidad 100", "$8,75"], ["De 1000 en adelante", "A convenir"]]}, {"id": "polo-jersey", "name": "Camiseta Tipo Polo en Tela Jersey", "category": "textiles", "image": "assets/polo_jersey.png", "subtitle": "Polo en tela Jersey", "prices": [["Cantidad 12 a 24", "$7,50"], ["Cantidad 25 a 50", "$7,00"], ["Cantidad 51 a 100", "$6,50"], ["De 100 en adelante", "A convenir"]]}, {"id": "camiseta-color", "name": "Camiseta Cuello Redondo Poli Algodón de Color", "category": "textiles", "image": "assets/camiseta_color.png", "subtitle": "Cuello redondo de color", "prices": [["Cantidad 50 a 100", "$4,50"], ["Cantidad 100 a 250", "$4,30"], ["Cantidad 250 a 500", "$4,15"], ["Cantidad 500 a 1000", "$4,00"], ["De 1000 en adelante", "A convenir"]]}, {"id": "camiseta-blanca", "name": "Camiseta Blanca en Poli Algodón Cuello Redondo", "category": "textiles", "image": "assets/camiseta_blanca.png", "subtitle": "Cuello redondo blanca", "prices": [["Cantidad 50 a 100", "$4,00"], ["Cantidad 100 a 250", "$3,75"], ["Cantidad 250 a 500", "$3,50"], ["Cantidad 500 a 1000", "$3,25"], ["De 1000 en adelante", "A convenir"]]}, {"id": "polux-uv", "name": "Camisetas en Tela Polux con Protección a los Rayos UV", "category": "textiles", "image": "assets/polux_uv.png", "subtitle": "Tela Polux con protección UV", "prices": [["Cantidad 12 a 24", "$12,50"], ["Cantidad 50 a 100", "$12,00"], ["De 100 en adelante", "A convenir"]]}];
const WHATSAPP = "593981412468";

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const quoteCount = document.getElementById("quoteCount");
const quoteDrawer = document.getElementById("quoteDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const quoteItems = document.getElementById("quoteItems");
const nav = document.getElementById("nav");

let activeFilter = "todos";
let quote = JSON.parse(localStorage.getItem("seriQuote") || "[]");

const categoryNames = {
  "tazas-bolsos":"Tazas y bolsos",
  "promocionales":"Promocionales",
  "gorras":"Gorras",
  "textiles":"Textiles"
};

function renderProducts(){
  const q = searchInput.value.trim().toLowerCase();
  const data = PRODUCTS.filter(p => {
    const filterOk = activeFilter === "todos" || p.category === activeFilter;
    const searchOk = (p.name + " " + p.subtitle).toLowerCase().includes(q);
    return filterOk && searchOk;
  });

  grid.innerHTML = data.map(p => `
    <article class="product-card">
      <div class="product-image">
        <img src="${p.image}" alt="${p.name}">
      </div>
      <div class="product-content">
        <span class="product-category">${categoryNames[p.category]}</span>
        <h3>${p.name}</h3>
        <p class="product-subtitle">${p.subtitle}</p>
        <div class="price-list">
          ${p.prices.map(row => `
            <div class="price-row">
              <span>${row[0]}</span>
              <strong>${row[1]}</strong>
            </div>`).join("")}
        </div>
        <p class="note">${p.note || ""}</p>
        <div class="card-actions">
          <button class="btn btn-add" data-add="${p.id}">Añadir</button>
          <button class="btn btn-wa" data-wa="${p.id}">WhatsApp</button>
        </div>
      </div>
    </article>
  `).join("");

  emptyState.style.display = data.length ? "none" : "block";
}

function saveQuote(){
  localStorage.setItem("seriQuote", JSON.stringify(quote));
  renderQuote();
}

function renderQuote(){
  quoteCount.textContent = quote.length;
  if(!quote.length){
    quoteItems.innerHTML = `<div class="quote-empty">Todavía no has agregado productos.</div>`;
    return;
  }
  quoteItems.innerHTML = quote.map(item => `
    <div class="quote-item">
      <div class="quote-item-top">
        <strong>${item.name}</strong>
        <button data-remove="${item.id}">Eliminar</button>
      </div>
      <label>
        Cantidad:
        <input type="number" min="1" value="${item.qty || ""}" placeholder="Ej. 100" data-qty="${item.id}">
      </label>
    </div>
  `).join("");
}

function addToQuote(id){
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  if(!quote.some(x => x.id === id)){
    quote.push({id:p.id,name:p.name,qty:""});
    saveQuote();
  }
  openDrawer();
}

function openDrawer(){
  quoteDrawer.classList.add("open");
  drawerBackdrop.classList.add("open");
}
function closeDrawer(){
  quoteDrawer.classList.remove("open");
  drawerBackdrop.classList.remove("open");
}

document.querySelector(".category-strip").addEventListener("click", e => {
  const btn = e.target.closest("[data-filter]");
  if(!btn) return;
  activeFilter = btn.dataset.filter;
  document.querySelectorAll(".category-pill").forEach(x => x.classList.remove("active"));
  btn.classList.add("active");
  renderProducts();
});

searchInput.addEventListener("input", renderProducts);

grid.addEventListener("click", e => {
  const add = e.target.closest("[data-add]");
  const wa = e.target.closest("[data-wa]");
  if(add) addToQuote(add.dataset.add);
  if(wa){
    const p = PRODUCTS.find(x => x.id === wa.dataset.wa);
    const msg = `Hola, quisiera cotizar el producto: ${p.name}. ¿Me pueden ayudar con información y disponibilidad?`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  }
});

quoteItems.addEventListener("click", e => {
  const remove = e.target.closest("[data-remove]");
  if(!remove) return;
  quote = quote.filter(x => x.id !== remove.dataset.remove);
  saveQuote();
});

quoteItems.addEventListener("input", e => {
  const input = e.target.closest("[data-qty]");
  if(!input) return;
  const item = quote.find(x => x.id === input.dataset.qty);
  if(item) {
    item.qty = input.value;
    localStorage.setItem("seriQuote", JSON.stringify(quote));
  }
});

document.getElementById("sendQuote").addEventListener("click", () => {
  if(!quote.length){
    alert("Agrega al menos un producto a la cotización.");
    return;
  }

  const name = document.getElementById("clientName").value.trim();
  const company = document.getElementById("clientCompany").value.trim();
  const notes = document.getElementById("clientNotes").value.trim();

  const lines = quote.map((item,i) =>
    `${i+1}. ${item.name} — Cantidad: ${item.qty || "por definir"}`
  );

  const message = [
    "Hola SeriPublicidad, quisiera solicitar una cotización.",
    "",
    `Nombre: ${name || "No indicado"}`,
    `Empresa: ${company || "No indicada"}`,
    "",
    "Productos:",
    ...lines,
    "",
    `Detalles: ${notes || "Sin observaciones adicionales"}`
  ].join("\n");

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});

document.getElementById("openQuote").addEventListener("click", openDrawer);
document.getElementById("closeQuote").addEventListener("click", closeDrawer);
drawerBackdrop.addEventListener("click", closeDrawer);

document.getElementById("menuBtn").addEventListener("click", () => nav.classList.toggle("open"));
nav.addEventListener("click", () => nav.classList.remove("open"));

document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();
renderQuote();
