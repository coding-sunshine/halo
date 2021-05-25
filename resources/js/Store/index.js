import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        avatar: "",
        avatar_error: "",
        shared_photo: "",
    },
    mutations: {
        SET_AVATAR(state, event) {
            state.avatar = event
        },
        SET_AVATAR_ERROR(state, event) {
            state.avatar_error = event
        },
        SET_SHARED_PHOTO(state, event) {
            state.shared_photo = event
        },
    },
    getters: {
        avatar: state => {
          return state.avatar;
        },
        avatar_error: state => {
            return state.avatar_error;
        },
        shared_photo: state => {
            return state.shared_photo;
        },
      },
    actions: {
        setAvatarPath({ commit }, event) {
            commit('SET_AVATAR', event);
        },
        setAvatarError({ commit }, event) {
            commit('SET_AVATAR_ERROR', event);
        },
        setSharedPhotoPath({ commit }, event) {
            commit('SET_SHARED_PHOTO', event);
        },
    }
})

export default store;
