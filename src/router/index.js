import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EchartsPage from "../views/echartsPage";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },{
	path: "/useEcharts",
	name: "EchartsPage",
	component: EchartsPage
  }
	  
  // {
  //   path: "/js-page",
  //   name: "JsPage",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/JavaScript.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
