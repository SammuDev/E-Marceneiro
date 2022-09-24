export default {
    USR_LOGIN: (users, user) => {
        users.usrLogado = -1;
        for (let lUser of users.usuarios) {
            if ((lUser.nome==user.nome) && (lUser.senha==user.senha)) {
                users.usrLogado = lUser.id;
            }
        }    
    },
    USR_LOGOUT: (users, id) => {
        users.usrLogado = id;
    }
}