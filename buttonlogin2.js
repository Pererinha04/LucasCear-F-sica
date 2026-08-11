const btAbrir = document.getElementById("btAbrir");
const overlay = document.getElementById("overlay");
const fechar = document.getElementById("fechar");

btAbrir.addEventListener("click", () =>{
    overlay.classList.add("ativo");

});

fechar.addEventListener("click", () => {
     overlay.classList.remove("ativo");

});

/* Button criar conta*/

const btCadastro = document.getElementById("btCadastro");
const overlay2 = document.getElementById("overlay2");
const fechar2 = document.getElementById("fechar2");

btCadastro.addEventListener("click" , () =>{
     overlay2.classList.add("ativo");

})

fechar2.addEventListener("click" , () => {
   overlay2.classList.remove("ativo");

})

