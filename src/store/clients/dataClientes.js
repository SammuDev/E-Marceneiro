export default {
    clientId: 0,            // Indica o item que esta sendo editado
    qtdclientListCarregada: 0, // Indica quantas vezes a clientList foi populada por uma API externa, evitando assim o re-carregamento
    clientList: [
        { id: 1, firstName: "fulano", phone: "+5521979187777", email: "fulano@uol.com" },
        { id: 2, firstName: "ciclano", phone: "+5521998142672", email: "ciclano@uol.com" }
    ],

    cleanList() {
        this.clientList = [];
    },
    addClient(userId, userName, userPhone, userEmail) {

        const newUser = {
            id: userId,
            firstName: userName,
            phone: userPhone,
            email: userEmail
        };

        this.clientList.push(newUser);


    },

    loadClient() {
        const selectedClient = {
            id: this.clientList[this.clientId].id,
            firstName: this.clientList[this.clientId].firstName,
            email: this.clientList[this.clientId].email,
            phone: this.clientList[this.clientId].phone

        };

        return selectedClient;
    },

    upToDateClient(ClientOBJ) {
        if (this.clientId==-1) {
            this.clientList.push((ClientOBJ));
        } else {
            this.clientList[this.clientId]=(ClientOBJ);
        }
    },

    deleteClient(id) {
        this.clientList.splice(id, 1);
        if (id == this.clientId) {
            this.clientId = 0;
        }
    },

    updateIndex (id) {
        this.clientId = id-1;
    },
    
 
}