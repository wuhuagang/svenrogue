import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  { path: '/signup', component: () => import('@/views/social/signup'), hidden: true },
  { path: '/binding', component: () => import('@/views/social/binding'), hidden: true },
  { path: '/', component: () => import('@/views/article/components/list/index'), hidden: true }, // 博客的首页，不管是登陆的用户或者未登录的用户
  { path: '/articleDetail', component: () => import('@/views/article/components/articleDetail'), hidden: true },
  {
    path: '/index',
    component: Layout,
    children: []
  }// 首页，当用户没有任何权限时，登录显示空白首页
]
/**
 * 异步路由表，与用户权限相关，在用户登录时根据用户权限过滤
 * @type {*[]}
 */
export const asyncRouterMap = [
  {
    path: '/settings',
    component: Layout,
    redirect: '/settings/user',
    name: 'Settings',
    meta: {
      title: '配置中心',
      icon: 'example'
    },
    children: [
      {
        path: 'user',
        component: () => import('@/views/settings/user/index'),
        name: 'user',
        meta: { title: '用户管理', icon: 'user' }
      },
      {
        path: 'role',
        component: () => import('@/views/settings/role/index'),
        name: 'role',
        meta: { title: '角色管理', icon: 'edit' }
      },
      {
        path: 'menu',
        component: () => import('@/views/settings/menu/index'),
        name: 'menu',
        meta: { title: '菜单管理', icon: 'edit' }
      },
      {
        path: 'permission',
        component: () => import('@/views/settings/permission/index'),
        name: 'permission',
        meta: { title: '权限管理', icon: 'edit' }
      },
      {
        path: 'service',
        component: () => import('@/views/settings/service/index'),
        name: 'service',
        meta: { title: '服务管理', icon: 'edit' }
      },
      {
        path: 'application',
        component: () => import('@/views/settings/application/index'),
        name: 'application',
        meta: { title: '应用管理', icon: 'edit' }
      },
      {
        path: 'generator',
        component: () => import('@/views/settings/generator/index'),
        name: 'generator',
        meta: { title: '代码生成器', icon: 'edit' }
      },
      {
        path: 'token',
        component: () => import('@/views/settings/token/index'),
        name: 'token',
        meta: { title: 'token管理', icon: 'edit' }
      }
    ]
  },
  {
    path: '/article',
    component: Layout,
    redirect: '/article/list',
    name: 'Article',
    meta: {
      title: '文章',
      icon: 'example'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/article/components/create/index'),
        name: 'CreateArticle',
        meta: { title: '添加文章', icon: 'edit', keepalive: true }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/article/components/edit/index'),
        name: 'EditArticle',
        meta: { title: '修改文章', noCache: true },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/article/components/list/index'),
        name: 'ArticleList',
        meta: { title: '往期文章', icon: 'list' }
      }
    ]
  },
  {
    path: '/activity',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'activity',
        component: () => import('@/views/activity/index'),
        meta: { title: '流程管理', icon: 'form' }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
