export default {
  path: "/rettiree",
  redirect: "/rettiree/index",
  meta: {
    icon: "ri:information-line",
    // showLink: false,
    title: "退休人员管理",
    rank: 9
  },
  children: [
    {
      path: "/rettiree/index",
      name: "退休人员管理",
      component: () => import("@/views/rettiree/index.vue"),
      meta: {
        title: "退休人员管理"
      }
    }
  ]
} satisfies RouteConfigsTable;
