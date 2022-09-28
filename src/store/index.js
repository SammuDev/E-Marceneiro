import { createStore } from 'vuex'
import Mclients from './clients/index'
import produtos from './produtos/index'
import users    from './users/index'
// import data from './data'
// import mutacoes from './mutacoes'

// export default createStore ({
//   state    : data,
//   getters  : { },
//   mutations: mutacoes,
//   actions  : { },
//   modules  : { }
// })

export default createStore({
  modules: {
    Mclients,
    produtos,
    users
  }
})
