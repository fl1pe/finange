const container = document.querySelector(".container");
const nomeDespesa = document.querySelector(".nomeDespesa");
const valorDespesa = document.querySelector(".valorDespesa");
const tabelaDespesas = document.querySelector(".item");
const btnAdd = document.querySelector(".btn-add");
const valorRenda = document.querySelector(".valorRenda");
let valorRendaConvertido = +valorRenda.innerHTML.replace(/\D+/g,'')



container.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("btn-add")) {
    // if (!valorDespesa.value) return;
    if (!nomeDespesa.value) return;
    salvarDespesa(nomeDespesa.value);
  }
});

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-apagar")) {
    e.target.parentElement.remove();
  }
});

container.addEventListener('keypress', (e) => {
  if(e.charCode === 13){
    // if (!valorDespesa.value) return;
    if (!nomeDespesa.value) return;
    salvarDespesa(nomeDespesa.value);
  }

})

function criaElemento(tag) {
  const tagCriada = document.createElement(tag);
  return tagCriada;
}

function limparInput() {
  nomeDespesa.value = "";
  valorDespesa.value = "";
}

function salvarDespesa(texto) {
  const tag = criaElemento("li");
  const tagP = criaElemento("p");
  const btnApagar = criaElemento("button");
  const span = criaElemento("span");
  span.innerHTML = `R$${valorDespesa.value}`

  tagP.innerHTML = `${texto}: `
  btnApagar.classList.add("btn-apagar");
  btnApagar.innerHTML = " " + "Apagar";

  tagP.appendChild(span);
  tagP.appendChild(btnApagar);
  tabelaDespesas.appendChild(tagP);
  nomeDespesa.focus();
  subTraiRenda();
  limparInput();
}

function subTraiRenda(){
  valorRendaConvertido -= Number(valorDespesa.value);
  valorRenda.innerHTML = `R$ ${valorRendaConvertido}`;

}