export default {
    itemId: 0, // Indica o item que esta sendo editado
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
    },

    carregaItem () {
        const lProd = {
            id        : this.lista[this.itemId].id, 
            nome      : this.lista[this.itemId].nome,
            fabricante: this.lista[this.itemId].fabricante, 
            unidade   : this.lista[this.itemId].unidade, 
            preco     : this.lista[this.itemId].preco,
            lnkImg    : this.lista[this.itemId].lnkImg
        };

        return lProd;
    },

    gravaItm(pProd) {
        if (this.itemId==-1) {
            this.lista.push(pProd);
        } else {
            this.lista[this.itemId]=pProd;
        }
    },

    alteraIndice (pIdx) {
        this.itemId = pIdx-1;
    },
}