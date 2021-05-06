import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        avatar: "",
        avatar_error: "",
    },
    mutations: {
        SET_AVATAR(state, event) {
            state.avatar = event
        },
        SET_AVATAR_ERROR(state, event) {
            state.avatar_error = event
        }
    },
    getters: {
        avatar: state => {
          return state.avatar;
        },
        avatar_error: state => {
            return state.avatar_error;
        },
      },
    actions: {
        setAvatarPath({ commit }, event) {
            commit('SET_AVATAR', event);
        },
        setAvatarError({ commit }, event) {
            commit('SET_AVATAR_ERROR', event);
        },
    }
})

export default store;
