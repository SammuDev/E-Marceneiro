import api_products from '@/services/api_products'

export default {
    PRD_OBTEMLISTA: async (produtos) => {
        produtos.limpa();
        const lRetornoDaApi = await api_products.obtemProdutos();
        for (let lCont=0;lCont<lRetornoDaApi.data.products.length;lCont++) {
            produtos.adiciona(
                lRetornoDaApi.data.products[lCont].id,
                lRetornoDaApi.data.products[lCont].title,
                lRetornoDaApi.data.products[lCont].brand,
                'UN',
                lRetornoDaApi.data.products[lCont].price,
                lRetornoDaApi.data.products[lCont].thumbnail
                );
        }
    }
}