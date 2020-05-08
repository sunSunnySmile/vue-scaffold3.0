import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import HelloWorld from "@/components/HelloWorld";


Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
        children:[
            {
                path: "/",
                name: "HelloWorld",
                component: HelloWorld
            },
        ]
    }
];

const router = new VueRouter({
  routes
});

export default router;
