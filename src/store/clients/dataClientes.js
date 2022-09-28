export default {
    clientList: [
        { id: 1, firstName: "fulano", phone: "+5521979187777", email: "fulano@uol.com" },
        { id: 2, firstName: "ciclano", phone: "+5521998142672", email: "ciclano@uol.com" }
    ],
    
    cleanList() {
        this.clientList = [];
    },
    addClient(userId, userName, userPhone, userEmail) {
        console.log('cheguei aqui')
        const newUser = {
            id: userId,
            firstName: userName,
            phone: userPhone,
            email: userEmail
        };
        
        this.clientList.push(newUser);
        console.log(newUser)
    }
}