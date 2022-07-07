const container = document.querySelector(".container");
const addDispesa = document.querySelector(".input-despesas");
const BtnDispesa = document.querySelector("#btn-add-despesa");

// function enter() {
//   container.addEventListener("keypress", (e) => {
//     if(e.charCode === 13) {
//         salvaDespesa();
//     }
//   });
// }


document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("btn-add-despesa")) {
    if (!addDispesa.value) return;
    salvaDespesa();

    // container.addEventListener('keypess', e => {
    //     if (e.charCode === 13) {
    //         salvaDespesa()
    //     }
    // })

    function criaElemento(tag) {
      const tagCriada = document.createElement(tag);
      return tagCriada;
    }
    function salvaDespesa() {
      const tag = criaElemento("ol");
      const btnApagar = criaElemento("button");
      tag.classList.add("nomeDespesa");
      tag.innerText = addDispesa.value;
      container.appendChild(tag);

      btnApagar.classList.add("btn-add-despesa");
      btnApagar.innerText = "Apagar";
      tag.appendChild(btnApagar);
      addDispesa.value = "";
      console.log(tag);
    }
  }
});