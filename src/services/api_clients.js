import { httpDummy } from "./dummyjson";

const ClientsMock = require('./clients.json')

export default {
  getClients: () => {return httpDummy.get('/users')},
  getClient : function (userId) {return httpDummy.get(`/users/${userId}`)},
  ClientsMock

}