import api_clients from '@/services/api_clients'

export default {
    GETCLIENTS: async (Mclients) => {
        Mclients.cleanList();
        const API_return = await api_clients.getClients();
        console.log(API_return)
        for (let counter = 0; counter < API_return.data.users.length; counter++) {
            Mclients.addClient(
                API_return.data.users[counter].id,
                API_return.data.users[counter].firstName + ' ' + API_return.data.users[counter].lastName,
                API_return.data.users[counter].phone,
                API_return.data.users[counter].email,
            );
            //console.log(API_return.data.users[counter])
        }
    }
}