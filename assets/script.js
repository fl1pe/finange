const container = document.querySelector(".container");
const addDispesa = document.querySelector(".input-despesas");
const BtnDispesa = document.querySelector("#btn-add-despesa");
const listaDespesas = document.querySelector(".despesas");

container.addEventListener("keypress", (e) => {
  if (!addDispesa.value) return;
  if (e.charCode === 13) {
    salvaDespesa(String(addDispesa.value));
  }
});

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-apagar-despesa")){
    e.target.parentElement.remove();
  }
});

document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("btn-add-despesa")) {
    if (!addDispesa.value) return;
    console.log(typeof(a))
    salvaDespesa(addDispesa.value);
  }
});

function capitaliza(texto) {
  const capitalizado = texto[0].toUpperCase() + texto.substr(1);
  return capitalizado;
}

function criaElemento(tag) {
  const tagCriada = document.createElement(tag);
  return tagCriada;
}

function salvaDespesa(texto) {
  const tag = criaElemento("ol");
  const btnApagar = criaElemento("button");
  tag.classList.add("nomeDespesa");
  tag.innerText = capitaliza(texto);
  listaDespesas.appendChild(tag);

  btnApagar.classList.add("btn-apagar-despesa");
  btnApagar.innerText = "Apagar";
  tag.appendChild(btnApagar);
  addDispesa.value = "";
  //console.log(tag);
}
