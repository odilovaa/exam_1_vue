import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Signup from "../pages/Signup.vue";

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: "/",
            name: 'home',
            component: Home,
        },
        {
            path: "/login",
            name: 'login',
            component: Login,
        },
        {
            path: "/signup",
            name: 'signup',
            component: Signup,
        },
        {
            path: "/:pathmatch(.*)*",
            name: 404,
            component: () => import("../pages/404.vue"),
          },

    ]
});

// router.beforeEach((to, from, next) => {
//     const token = localStorage.getItem("token");

//     // if (to.name === 'signup' && from.name === 'login' && !token) {
//     //     next({ name: 'signup'})
//     // }if (to.name !== 'login' && !token) {
//     //     next({ name: 'login'});
//     // }else {
//     //   next();
//     // }
//   });

export default router;