// import { httpDummy } from "@/services/dummyjson";
import api_products from '@/services/api_products'

export default {
    PRD_OBTEMLISTA: async (produtos) => {
        console.log(produtos);
        const lRetornoDaApi = await api_products.obtemProdutos();
        console.log(lRetornoDaApi.data.products.length)
        for (let lCont=0;lCont<lRetornoDaApi.data.products.length;lCont++) {
            const lProd = {
                id        : 10+ lRetornoDaApi.data.products[lCont].id, 
                nome      : lRetornoDaApi.data.products[lCont].title,
                fabricante: lRetornoDaApi.data.products[lCont].brand, 
                unidade   : "un", 
                preco     : lRetornoDaApi.data.products[lCont].price
            };
            // console.log(lPrd);
            console.log(produtos );
            console.log(typeof produtos );
            
            produtos.push(lProd);  
        }
        // produtos = lProdutos;
        // console.log(produtos);
    }
}