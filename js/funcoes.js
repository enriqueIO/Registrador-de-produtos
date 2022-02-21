criaTd = (valor) => {
    let td = document.createElement("td");
    td.textContent = valor;

    return td;
};

criaTr = () => {
    let form = document.querySelector(".form-produto");

    let tr = document.createElement("tr");

    let produto = {
        id: form.id.value,
        nome: form.produto.value,
        quantidade: form.quantidade.value,
        data_fab: form.datafabricacao.value,
        data_val: form.datavalidade.value
    };

    let idProd = criaTd(produto.id);
    let nomeProd = criaTd(produto.nome);
    let quantidadeProd = criaTd(produto.quantidade);
    let data_fab_prod = criaTd(produto.data_fab);
    let data_val_prod = criaTd(produto.data_val);

    idProd.classList.add("informacoes-produtos");
    nomeProd.classList.add("informacoes-produtos");
    quantidadeProd.classList.add("informacoes-produtos");
    data_fab_prod.classList.add("informacoes-produtos");
    data_val_prod.classList.add("informacoes-produtos");

    nomeProd.classList.add("nomeProd");

    tr.appendChild(idProd);
    tr.appendChild(nomeProd);
    tr.appendChild(quantidadeProd);
    tr.appendChild(data_fab_prod);
    tr.appendChild(data_val_prod);

    return tr;
}