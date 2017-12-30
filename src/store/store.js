
const store = {
  state: {
    login: false
  },
  mutations: {
    checkPassword(state, obj) {
      if(obj.password==='ljx'){
        state.login = true;
      }
    }
  }
}

module.exports = store
