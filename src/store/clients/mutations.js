import api_clients from '@/services/api_clients'



export default {
    GETCLIENTS: async (Clients) => {
        Clients.cleanList();
        const API_return = await api_clients.getClients();
        
         for (let counter = 0; counter < API_return.clients.length; counter++) {
            Clients.addClient(
                API_return.clients[counter].id,
                API_return.clients[counter].firstName + ' ' + API_return.clients[counter].lastName,
                API_return.clients[counter].phone,
                API_return.clients[counter].email,
            );
            
        } 
    },
    GETCLIENTS2: async (Clients) => {
        Clients.cleanList();
        const API_return = await api_clients.ClientsMock;
        
        for (let counter = 0; counter < API_return.clients.length; counter++) {
            Clients.addClient(
                API_return.clients[counter].id,
                API_return.clients[counter].firstName + ' ' + API_return.clients[counter].lastName,
                API_return.clients[counter].phone,
                API_return.clients[counter].email,
            );
            
        }
        Clients.qtdclientListCarregada++;
    },

    DELETE_KEY: async(obj , key) => {
        console.log(obj[key])
        delete obj[key];
      },
}