const routes = [
    {
        path: '',
        component: () => import('../Pages/Home.vue'),
        name: 'home'
    },
    {
        path: '/play',
        component: () => import('../Pages/Play.vue'),
        name: 'play',
        meta: { requiresAvatar: true }
    },
    {
        path: '/detail_form',
        component: () => import('../Pages/DetailForm.vue'),
        name: 'detail_form',
        meta: { requiresAvatar: true }
    },
]

export default routes;
