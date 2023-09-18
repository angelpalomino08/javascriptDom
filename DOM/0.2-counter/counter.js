let cont = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const incrementar = document.querySelector(".incrementar")
const decrementar = document.querySelector(".decrementar")
const reset = document.querySelector(".reset")


incrementar.addEventListener("click", function(){
    cont = cont + 1;
    value.textContent = cont;
    console.log(cont);
})

decrementar.addEventListener("click", function(){
    if(cont==0){

    }else {
        cont = cont - 1;
    }
    value.textContent = cont;
})

reset.addEventListener("click", function(){
    cont = cont * 0;
    value.textContent = cont;
    console.log(cont);
})