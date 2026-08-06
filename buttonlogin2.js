const btnAbrir = document.getElementById("btnAbrir");
const overlay = document.getElementById("overlay");
const fechar = document.getElementById("fechar");

btnAbrir.addEventListener("click", () =>{
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

/* Button entrar menu mobile */


const btEnt = document.getElementById("btEnt");
const overlay3 = document.getElementById("overlay3");
const fechar3 = document.getElementById("fechar3");

btEnt.addEventListener("click" , () =>{
     overlay3.classList.add("ativo");

})

fechar3.addEventListener("click" , () => {
   overlay3.classList.remove("ativo");

})