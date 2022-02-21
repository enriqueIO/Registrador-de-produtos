let button_form = document.querySelector(".button-form");

button_form.addEventListener("click", function(event){
      
      event.preventDefault();

      let nomeProduto = validaNome();
      let quantidadeProduto = validaQuantidade();

      let tbody_prod = document.querySelector(".tbody-produto");
      
      let form = document.querySelector(".form-produto");

      if(nomeProduto && quantidadeProduto){
         
         let prodTr = criaTr();

         removerProd(prodTr);

         guardaProdutos(prodTr);
            
         tbody_prod.appendChild(prodTr);

         form.reset();
      
      }

      if(!nomeProduto && quantidadeProduto){
            
            let span = document.querySelector(".aviso-erro-nome");
            span.innerHTML = "";
            span.classList.add("erro");
            span.textContent = "Nome inválido ou nulo";
      
      }

      if(!quantidadeProduto && nomeProduto){
            
            let span = document.querySelector(".aviso-erro-quantidade");
            span.innerHTML = "";
            span.classList.add("erro");
            span.textContent = "Quantidade inválida ou nula";
      
      }

      if(!quantidadeProduto && !nomeProduto){
            let spanNome = document.querySelector(".aviso-erro-nome");
            let spanQuantidade = document.querySelector(".aviso-erro-quantidade");
            
            spanNome.innerHTML = "";
            spanQuantidade.innerHTML = "";
            
            spanNome.classList.add("erro");
            spanQuantidade.classList.add("erro");
            
            spanNome.textContent = "Nome inválido ou nulo";
            spanQuantidade.textContent = "Quantidade inválida ou nula"; 
      }

})

validaNome = () => {
      
      let formProd = document.querySelector(".form-produto");
      let nomeProd = formProd.produto.value;
      
      if(nomeProd == ""){
            return false;
      }else{
            return true;
      }
}

validaQuantidade = () => {
      let formProd = document.querySelector(".form-produto");
      let quantidadeProd = formProd.quantidade.value;
      
      if(parseInt(quantidadeProd) == "" || parseInt(quantidadeProd) >= 2000 || parseInt(quantidadeProd) < 0){
            return false;
      }else{
            return true;
      }
}