import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    },
    mutations: {
      setPosts(state, payload) {
        state.loadedPosts = payload
      }
    },
    actions: {
      setPosts(context, payload) {
        context.commit('setPosts', payload)
      }
    }
  })
}

export default createStore;
