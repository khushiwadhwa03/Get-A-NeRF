const routes = [{
        path: "/",
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [
            { path: "", component: () =>
                    import ("pages/IndexPage.vue") },
            { path: "/furniture", component: () =>
                    import ("pages/furniture.vue") },
            { path: "/car", component: () =>
                    import ("pages/car.vue") },
            { path: "/help", component: () =>
                    import ("pages/help.vue") },
            { path: "/miss", component: () =>
                    import ("pages/miss.vue") },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () =>
            import ("pages/ErrorNotFound.vue"),
    },
];

export default routes;