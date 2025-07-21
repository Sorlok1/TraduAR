document.addEventListener("DOMContentLoaded", function () {
  const wordInput = document.getElementById("wordCount");
  const sourceLang = document.getElementById("sourceLang");
  const targetLang = document.getElementById("targetLang");

  const summaryLang = document.getElementById("resumen-idioma");
  const summaryWords = document.getElementById("resumen-words");
  const summaryAmount = document.getElementById("resumen-monto");
  const summaryTotal = document.getElementById("resumenTotal");

  const RATE_PER_WORD = 1.00;

  function updateSummary() {
    const words = parseInt(wordInput.value) || 0;
    const amount = words * RATE_PER_WORD;

    const from = sourceLang.value || "N/A";
    const to = targetLang.value || "N/A";

    summaryLang.textContent = `${from} to ${to}`;
    summaryWords.textContent = `${words} words`;
    summaryAmount.textContent = `$${amount.toFixed(2)}`;
    summaryTotal.textContent = `$${amount.toFixed(2)}`;
  }

  wordInput.addEventListener("input", updateSummary);
  sourceLang.addEventListener("change", updateSummary);
  targetLang.addEventListener("change", updateSummary);
});

document.addEventListener("DOMContentLoaded", () => {
  const serviceButtons = document.querySelectorAll(".producto-boton");
  const summaryService = document.getElementById("resumen-producto");

  serviceButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      serviceButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const service = btn.getAttribute("data-service");
      summaryService.textContent = service;
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const wordInput = document.getElementById("wordCount");
  const sourceLang = document.getElementById("sourceLang");
  const targetLang = document.getElementById("targetLang");

  const summaryLang = document.getElementById("resumen-idioma");
  const summaryWords = document.getElementById("resumen-words");
  const summaryAmount = document.getElementById("resumen-monto");
  const summaryTotal = document.getElementById("resumenTotal");
  const summaryService = document.getElementById("resumen-producto");

  const serviceButtons = document.querySelectorAll(".producto-boton");

  const SERVICE_RATES = {
    "Petróleo": 1.50,
    "Salud": 1.20,
    "Economía": 1.00,
    "Jurídico": 1.80,
    "Finanzas": 1.70,
    "Minería": 1.60
  };

  let selectedService = "Petróleo"; //para que aparezca "petróleo" por defecto

  function updateSummary() {
    const words = parseInt(wordInput.value) || 0;
    const rate = SERVICE_RATES[selectedService] || 1.00;
    const amount = words * rate;

    const from = sourceLang.value || "N/A";
    const to = targetLang.value || "N/A";

    summaryService.textContent = selectedService;
    summaryLang.textContent = `${from} to ${to}`;
    summaryWords.textContent = `${words} words`;
    summaryAmount.textContent = `$${amount.toFixed(2)}`;
    summaryTotal.textContent = `$${amount.toFixed(2)}`;
  }

  // para que se actualicen el precio y la industria cuango haga click
  serviceButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      serviceButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedService = btn.getAttribute("data-service");
      updateSummary();
    });
  });

  wordInput.addEventListener("input", updateSummary);
  sourceLang.addEventListener("change", updateSummary);
  targetLang.addEventListener("change", updateSummary);

  updateSummary();
});





function cargarCarrito() {
    let listaCarrito = document.getElementById('lista-carrito');
    let totalCarrito = document.getElementById('total-carrito');
    listaCarrito.innerHTML = '';
    totalCarrito.textContent = '0';

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let total = 0;    
   
    for (let i = 0; i < carrito.length; i++) {
    let producto = carrito[i];
        let li = document.createElement('li');
        li.textContent = producto.nombre + ' - $' + producto.precio;
        listaCarrito.appendChild(li);

        // Sumar el precio al total (convertimos a número)
        total += parseFloat(producto.precio) || 0;
    }

    // Mostrar el total redondeado a 3 decimales
    totalCarrito.textContent = total.toFixed(3);
}

let compra = document.createElement("li");

compra.innerHTML = "This is a paragraph.";


document.getElementsByClassName("resumen-detalle").appendChild(compra);