class Convertidor {
  constructor() {
    this.tasas = {
      MXN: 1,
      USD: 0.054,
      EUR: 0.051,
      GBP: 0.044,
      JPY: 8.51
    };
  }
  convertir(cantidad, desde, hacia) {
    let tasaDesde = this.tasas[desde];
    let tasaHacia = this.tasas[hacia];
    let resultado = (cantidad / tasaDesde) * tasaHacia;
    return resultado;
  }
}

let fx = new Convertidor();

let form = document.getElementById("formFX");
let monto = document.getElementById("monto");
let desde = document.getElementById("desde");
let hacia = document.getElementById("hacia");
let decimales = document.getElementById("decimales");
let ruta = document.getElementById("ruta");
let resultado = document.getElementById("resultado");
let tasa = document.getElementById("tasa");

for (let moneda in fx.tasas) {
  let op1 = document.createElement("option");
  op1.value = moneda;
  op1.textContent = moneda;
  desde.appendChild(op1);
  let op2 = document.createElement("option");
  op2.value = moneda;
  op2.textContent = moneda;
  hacia.appendChild(op2);
}
desde.value = "MXN";
hacia.value = "USD";

form.addEventListener("submit", function(e) {
  e.preventDefault();
  let cantidad = parseFloat(monto.value);
  let origen = desde.value;
  let destino = hacia.value;
  let dec = parseInt(decimales.value);
  if (isNaN(cantidad) || cantidad <= 0) {
    resultado.textContent = "Por favor, ingresa una cantidad válida.";
    tasa.textContent = "";
    ruta.textContent = "";
    return;
  }
  let res = fx.convertir(cantidad, origen, destino);
  let tasaCambio = fx.tasas[destino] / fx.tasas[origen];
  ruta.textContent = origen + " → " + destino;
  resultado.textContent = res.toFixed(dec) + " " + destino;
  tasa.textContent = "1 " + origen + " = " + tasaCambio.toFixed(dec) + " " + destino;
});
