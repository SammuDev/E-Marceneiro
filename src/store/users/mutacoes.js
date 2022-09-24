export default {
    USR_LOGIN: (users, user) => {
        users.usrLogado = -1;
        for (let lUser of users.usuarios) {
            if ((lUser.nome==user.nome) && (lUser.senha==user.senha)) {
                users.usrLogado = lUser.id;
            }
        }    
    },
    USR_ADD: (users, user) => {
        let maiorId = 0;
        for (let lUser of users.usuarios) {
            maiorId = lUser.id + 1;
        }
        user.id = maiorId;
        users.usuarios.push(user);
    },
    USR_LOGOUT: (users, id) => {
        users.usrLogado = id;
    }
}