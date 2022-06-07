import VueRouter from "vue-router";
import routes from "./routes";
import store from "./../Store/index.js"

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAvatar)) {
        if(store.state.avatar !== "") {
            next()
        } else {
            store.dispatch('setAvatarError', 'Please upload your picture first!');
            next("/")
        }
    } else {
        next()
    }
})

export default router;
