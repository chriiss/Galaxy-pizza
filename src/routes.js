import Home from "./components/Home.vue";
import Menu from "./components/Menu.vue";
import Admin from "./components/Admin.vue";
import Delivary from "./components/Delivary.vue";
import TakeAway from "./components/TakeAway.vue";

export const routes = [
  {
    path: "/",
    name: "homeLink",
    component: Home,
    children: [
      {
        path: "/delivary",
        name: "delivaryLink",
        component: Delivary,
      },
      {
        path: "/takeaway",
        name: "takeawayLink",
        component: TakeAway,
      }
    ]
  },
  {
    path: "/menu",
    name: "menuLink",
    component: Menu,
  },
  {
    path: "/admin",
    name: "adminLink",
    component: Admin,
    beforeEnter: (to, from, next) => {
      alert(
        "this area is for authorised users only, please enter login to continue"
      );
      next();
    },
  },
  {
    path: "*",
    redirect: "/",
  },
];
