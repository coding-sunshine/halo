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
]

export default routes;
