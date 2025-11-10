class IMC {
  calcular(peso, altura) {
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      return null;
    }
    let m = altura / 100;
    let imc = peso / (m * m);
    return imc.toFixed(2);
  }
  categoria(imc) {
    if (imc < 18.5) return "Bajo peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidad";
  }
  consejo(nombre) {
    if (nombre === "Bajo peso") return "Come mejor y consulta un especialista.";
    if (nombre === "Peso normal") return "Sigue igual, estás bien.";
    if (nombre === "Sobrepeso") return "Haz más ejercicio y cuida tu dieta.";
    return "Consulta a un profesional de la salud.";
  }
}

let imc = new IMC();

let form = document.getElementById("formIMC");
let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let val = document.getElementById("val");
let cat = document.getElementById("cat");
let msg = document.getElementById("msg");
let icono = document.getElementById("icono");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  let p = parseFloat(peso.value);
  let a = parseFloat(altura.value);
  let valor = imc.calcular(p, a);
  if (valor === null) {
    val.textContent = "—";
    cat.textContent = "Error";
    msg.textContent = "Datos inválidos";
    icono.innerHTML = "";
    return;
  }
  let catg = imc.categoria(valor);
  val.textContent = valor;
  cat.textContent = catg;
  msg.textContent = imc.consejo(catg);
  icono.innerHTML = "";
});
