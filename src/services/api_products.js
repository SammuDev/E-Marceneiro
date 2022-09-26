import { httpDummy } from "./dummyjson";

export default {
  obtemProdutos: () => {return httpDummy.get('/products')},
  obtemProduto : function (prdId) {return httpDummy.get(`/products/${prdId}`)}
}