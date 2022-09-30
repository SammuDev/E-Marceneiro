import api_clients from '@/services/api_clients'



export default {
    GETCLIENTS: async (Mclients) => {
        Mclients.cleanList();
        const API_return = await api_clients.getClients();
        
        for (let counter = 0; counter < API_return.data.users.length; counter++) {
            Mclients.addClient(
                API_return.data.users[counter].id,
                API_return.data.users[counter].firstName + ' ' + API_return.data.users[counter].lastName,
                API_return.data.users[counter].phone,
                API_return.data.users[counter].email,
            );
            
        }
    },
    GETCLIENTS2: async (Mclients) => {
        Mclients.cleanList();
        const API_return = await api_clients.ClientsMock;
        
        for (let counter = 0; counter < API_return.users.length; counter++) {
            Mclients.addClient(
                API_return.users[counter].id,
                API_return.users[counter].firstName + ' ' + API_return.users[counter].lastName,
                API_return.users[counter].phone,
                API_return.users[counter].email,
            );
            
        }
    },

    DELETE_KEY: async(obj , key) => {
        console.log(obj[key])
        delete obj[key];
      },
}