var filtroInput = document.querySelector(".filtro-input");

filtroInput.addEventListener("input", () => {
    let prods = document.querySelectorAll(".produtos-registrados");
    let pesquisa = filtroInput.value;

    if(pesquisa.length > 0){
        for(let i = 0; i < prods.length; i++){
            
            let nomeProd = prods[i].querySelector(".nomeProd").textContent;
            let expressao = new RegExp(pesquisa, this.value);

            if(!expressao.test(nomeProd)){

                prods[i].classList.add("ocultar");
            
            }else{

                prods[i].classList.remove("ocultar");
            
            }

        }
    }else{
        for(let i = 0; i <= prods.length; i++){

            prods[i].classList.remove("ocultar");
        
        }
    }
});

guardaProdutos = (produto) => {
     produto.classList.add("produtos-registrados");
}