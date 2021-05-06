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
        path: '/game',
        component: () => import('../Pages/Game.vue'),
        name: 'game',
        meta: { requiresAvatar: true }
    },
    {
        path: '/congratulation',
        component: () => import('../Pages/Congratulation.vue'),
        name: 'congratulation',
        meta: { requiresAvatar: true }
    },
    {
        path: '/try-again',
        component: () => import('../Pages/TryAgain.vue'),
        name: 'try-again',
        meta: { requiresAvatar: true }
    },
]

export default routes;
