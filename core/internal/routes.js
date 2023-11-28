/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "/Users/dzsb-002295/Desktop/JY/other/cube-doc/node_modules/@vuepress/core/lib/client/components/GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-bdd00d46",
    path: "/guide/one.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-bdd00d46").then(next)
    },
  },
  {
    name: "v-01fb8b9d",
    path: "/guide/two.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-01fb8b9d").then(next)
    },
  },
  {
    name: "v-c10530c4",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-c10530c4").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]