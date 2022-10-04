export default {
    pedidoId: 0,                                    // Indica qual pedido esta sendo editado
    lista : [                                       // Contem a lista de pedidos de um determinado usuario
        {"id"        : 1,                            // Um pedido fake de inicializacao
         "finalizado": false,
         "clientId"  : 1,
         "userId"    : 1,
         "descricao" : 'Orçamento modelo',
         "data"      : '01/01/2022',
         "produtos"  : [                             // Listagem dos itens que compoem este pedido fake
            {"prodId": 1, "prodQtd": 1, "prodPreco": 100.00}
         ]
        }
    ],

    limpa () {
        this.lista = [];
    },

    pedidoNovo(pClientId, pUserId) {
        const
        lPedido = {
            "id": -1,  // criar contador
            "status": 0,
            "clientId": pClientId,
            "userId"  : pUserId,
            "produtos": []
        }

        this.pedidoId = this.limpa.push(lPedido);
        return this.pedidoId;
    },

    pedidoAddProd(pProdQtd, pProdId, pProdPreco) {
        const
        lProd = {
            "prodId"   : pProdId,
            "prodQtd"  : pProdQtd,
            "prodPreco": pProdPreco
        }

        this.lista[this.pedidoId].produtos.push(lProd);
    },

    alteraIndice (pIdx) {
        this.pedidoId = pIdx-1;
    },

    obtemPedido (pIdx) {
        return this.lista[pIdx];
    },

    pedidoDelProd (pIdx) {
        this.lista[this.pedidoId].produtos.splice(pIdx, 1);
    },

    obtemVrTotal () {
        console.log('vrottal')
        // let valor = 0;
        // for (let lCont=0; lCont<this.lista[this.pedidoId].produtos.length; lCont++) {
        //     valor = valor + this.lista[this.pedidoId].produtos.prodPreco;
        // }
        return 'valor';
    }

}