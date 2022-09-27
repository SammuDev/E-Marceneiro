export default {
    lista : [
        {"id": 1, "nome": "Madeira",    "fabricante": "",         "unidade": "m2", "preco": 100, "lnkImg":''},
        {"id": 2, "nome": "Cola 500ml", "fabricante": "cascorez", "unidade": "un", "preco": 5,   "lnkImg":''}
    ],

    limpa () {
        this.lista = [];
    },
    adiciona(pId, pNome, pFabricante, pUnidade, pPreco, pLnkImg) {
        const lProd = {
            id        : pId, 
            nome      : pNome,
            fabricante: pFabricante, 
            unidade   : pUnidade, 
            preco     : pPreco,
            lnkImg    : pLnkImg
        };

        this.lista.push(lProd);
    }
}