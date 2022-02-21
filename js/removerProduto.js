removerProd = (produto) => {
     
    let produtos = [];
    produtos.push(produto);
    
    produtos.forEach((prod) => {
        
        prod.addEventListener("dblclick", function(){
         
          prod.classList.add("remove-transition");
          
          setTimeout(() => {
            this.remove();
          }, 700);

        });
    });
};