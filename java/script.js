document.addEventListener("DOMContentLoaded", function () {
  const wordInput = document.getElementById("wordCount");
  const sourceLang = document.getElementById("sourceLang");
  const targetLang = document.getElementById("targetLang");

  const resumenLang = document.getElementById("resumen-idioma");
  const resumenWords = document.getElementById("resumen-words");
  const resumenAmount = document.getElementById("resumen-monto");
  const resumenTotal = document.getElementById("resumenTotal");
  const resumenService = document.getElementById("resumen-producto");

  const serviceButtons = document.querySelectorAll(".producto-boton");

  const agregarBtn = document.getElementById("agregarTraduccion");
  const listaCotizaciones = document.getElementById("listaCotizaciones");
  const vaciarBtn = document.getElementById("vaciar");




  const SERVICE_RATES = {
    "Petróleo": 1.50,
    "Salud": 1.20,
    "Economía": 1.00,
    "Jurídico": 1.80,
    "Finanzas": 1.70,
    "Minería": 1.60
  };

  let selectedService = "Petróleo"; // para que se ponga por default en Petróleo

  function updateresumen() {
    const palabras = parseInt(wordInput.value) || 0;
    const rate = SERVICE_RATES[selectedService] || 1.00;
    const amount = palabras * rate;

    const from = sourceLang.value || "N/A";
    const to = targetLang.value || "N/A";

    resumenService.textContent = selectedService;
    resumenLang.textContent = `${from} a ${to}`;
    resumenWords.textContent = `${palabras} palabras`;
    resumenAmount.textContent = `$${amount.toFixed(2)}`;
    resumenTotal.textContent = `$${amount.toFixed(2)}`;
  }



serviceButtons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    serviceButtons.forEach(function(b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");
    selectedService = btn.getAttribute("data-service");
    updateresumen();
  });
});


  wordInput.addEventListener("input", updateresumen);
  sourceLang.addEventListener("change", updateresumen);
  targetLang.addEventListener("change", updateresumen);

agregarBtn.addEventListener("click", function() {
  const palabras = parseInt(wordInput.value) || 0;
  const rate = SERVICE_RATES[selectedService] || 1.00;
  const amount = palabras * rate;

  const from = sourceLang.value || "N/A";
  const to = targetLang.value || "N/A";

  const listItem = document.createElement("li");
  listItem.textContent = selectedService + ": " + from + " a " + to + ", " + palabras + " palabras, $" + amount.toFixed(2);
  listaCotizaciones.appendChild(listItem);
});


  updateresumen();

// vaciar carrito:
vaciarBtn.addEventListener("click", function () {
  listaCotizaciones.innerHTML = ""; 
});


// para pagar:
const pagarBtn = document.getElementById("pagar");

pagarBtn.addEventListener("click", function () {
  const items = Array.from(listaCotizaciones.querySelectorAll("li")).map(li => li.textContent);
  localStorage.setItem("cotizaciones", JSON.stringify(items));
  window.location.href = "./compra.html";
});


});

document.addEventListener("DOMContentLoaded", function () {
  const lista = document.getElementById("cotizacionesFinales");
  const saved = JSON.parse(localStorage.getItem("cotizaciones")) || [];

  saved.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    lista.appendChild(li);
  });
});


function formulario(event) {

  const PagoNombre = document.getElementById('nombre').value.trim();
  const PagoApellido = document.getElementById('apellido').value.trim();
  const PagoEmail = document.getElementById('email').value.trim();
  const PagoTel = document.getElementById('telefono').value.trim();


};

function traer () {
  const contenido = document.getElementById("contenido")

  fetch('https://randomuser.me/api')
    .then(res => res.JSON())
    .then (res => {
      console.log(res);
      console.log(res.results[0].email);

      contenido.innerHTML = `
        <img src="${res.results[0].picture.large}" width="150px" class="img-fluid rounded-circle">
        <p>Nombre: ${res.results[0].name.first}</p>
        <p>Email: ${res.results[0].email}</p>
        <p>País: ${res.results[0].location.country}</p>`;
    })

    .catch(error => console.error('Error al obtener los datos:', error)); 
}