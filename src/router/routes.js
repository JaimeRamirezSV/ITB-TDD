const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/listV1.vue") }],
  },
  {
    path: "/v2",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/listV2.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
