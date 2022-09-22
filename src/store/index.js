import { createStore } from 'vuex'
import clientes from './clientes/index'
import produtos from './produtos/index'
import users    from './users/index'

export default createStore({
  modules: {
    clientes,
    produtos,
    users
  }
})
