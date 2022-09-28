import { httpDummy } from "./dummyjson";

export default {
  getClients: () => {return httpDummy.get('/users')},
  getClient : function (userId) {return httpDummy.get(`/users/${userId}`)}
}