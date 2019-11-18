import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
/* Router Modules */
/* import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'*/
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'Documentation',
        meta: { title: 'documentation', icon: 'documentation', affix: true }
      }
    ]
  },
  {
    path: '/test',
    component: Layout,
    meta: { title: 'test', icon: 'documentation' },
    children: [
      {
        path: 'dashBoardTask',
        component: () => import('@/views/test/dashboardtask'),
        name: 'dashBoardTask',
        meta: { title: 'dashBoardTask', icon: 'documentation' }
      },
      {
        path: 'complexTableTask',
        component: () => import('@/views/test/complextabletask'),
        name: 'complexTableTask',
        meta: { title: 'complexTableTask', icon: 'documentation' }
      },
      {
        path: 'tableTask',
        component: () => import('@/views/test/tabletask'),
        name: 'tableTask',
        meta: { title: 'tableTask', icon: 'table' }
      },
      {
        path: 'bartask',
        component: () => import('@/views/test/bartask'),
        name: 'bartask',
        meta: { title: 'bartask', icon: 'table' }
      },
      {
        path: 'TabTableTask',
        component: () => import('@/views/test/tabtabletask'),
        name: 'TabTableTask',
        meta: { title: 'TabTableTask', icon: 'documentation' }
      },
      {
        path: 'guideTask',
        component: () => import('@/views/test/guidetask'),
        name: 'guideTask',
        meta: { title: 'guideTask', icon: 'guide' }
      },
      {
        path: 'uploadTask',
        component: () => import('@/views/test/uploadtask'),
        name: 'uploadTask',
        meta: { title: 'uploadTask', icon: 'documentation' }
      },
      {
        path: 'task5',
        component: () => import('@/views/test/task5'),
        name: 'task5',
        meta: { title: 'task5', icon: 'chart' }
      },
      {
        path: 'formTask',
        component: () => import('@/views/test/formtask'),
        name: 'formTask',
        meta: { title: 'formTask', icon: 'documentation' }
      },
      {
        path: '404task',
        component: () => import('@/views/test/404task'),
        name: '404task',
        meta: { title: '404task', icon: '404' }
      },
      {
        path: '401task',
        component: () => import('@/views/test/401task'),
        name: '401task',
        meta: { title: '401task', icon: 'documentation' }
      },
      {
        path: 'storeTask',
        component: () => import('@/views/test/storetask'),
        name: 'storeTask',
        meta: { title: 'storeTask', icon: 'documentation' }
      },
      {
        path: 'flexTask',
        component: () => import('@/views/test/flextask'),
        name: 'flexTask',
        meta: { title: 'flexTask', icon: 'documentation' }
      },
      {
        path: 'iconTask',
        component: () => import('@/views/test/icontask'),
        name: 'iconTask',
        meta: { title: 'iconTask', icon: 'documentation' }
      },
      {
        path: 'test',
        component: () => import('@/views/test/test'),
        name: 'test',
        meta: { title: 'test', icon: 'tab' }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        name: 'Guide',
        meta: { title: 'guide', icon: 'guide', noCache: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'profile', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'pagePermission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'directivePermission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'rolePermission',
          roles: ['admin']
        }
      }
    ]
  },

  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: 'icons', icon: 'icon', noCache: true }
      }
    ]
  },

  /** when your routing map is too long, you can split it into small modules **/
  /*  componentsRouter,
  chartsRouter,
  tableRouter,*/
  nestedRouter,

  /* {
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: 'Example',
      icon: 'example'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/example/create'),
        name: 'CreateArticle',
        meta: { title: 'Create Article', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit'),
        name: 'EditArticle',
        meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/example/list'),
        name: 'ArticleList',
        meta: { title: 'Article List', icon: 'list' }
      }
    ]
  },
*/
  {
    path: '/tab',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/tab/index'),
        name: 'Tab',
        meta: { title: 'tab', icon: 'tab' }
      }
    ]
  },

  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/errorPage/401'),
        name: 'Page401',
        meta: { title: 'page401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/errorPage/404'),
        name: 'Page404',
        meta: { title: 'page404', noCache: true }
      }
    ]
  },
  /*
   {
     path: '/error-log',
     component: Layout,
     children: [
       {
         path: 'log',
         component: () => import('@/views/error-log/index'),
         name: 'ErrorLog',
         meta: { title: 'errorLog', icon: 'bug' }
       }
  ]
   },
   /*
   {
     path: '/error-log',
     component: Layout,
     children: [
       {
         path: 'log',
         component: () => import('@/views/error-log/index'),
         name: 'ErrorLog',
         meta: { title: 'Error Log', icon: 'bug' }
       }
     ]
   },

   {
     path: '/excel',
     component: Layout,
     redirect: '/excel/export-excel',
     name: 'Excel',
     meta: {
       title: 'Excel',
       icon: 'excel'
     },
     children: [
       {
         path: 'export-excel',
         component: () => import('@/views/excel/export-excel'),
         name: 'ExportExcel',
         meta: { title: 'Export Excel' }
       },
       {
         path: 'export-selected-excel',
         component: () => import('@/views/excel/select-excel'),
         name: 'SelectExcel',
         meta: { title: 'Export Selected' }
       },
       {
         path: 'export-merge-header',
         component: () => import('@/views/excel/merge-header'),
         name: 'MergeHeader',
         meta: { title: 'Merge Header' }
       },
       {
         path: 'upload-excel',
         component: () => import('@/views/excel/upload-excel'),
         name: 'UploadExcel',
         meta: { title: 'Upload Excel' }
       }
     ]
   },
 */
  {
    path: '/zip',
    component: Layout,
    redirect: '/zip/download',
    alwaysShow: true,
    name: 'Zip',
    meta: { title: 'zip', icon: 'zip' },
    children: [
      {
        path: 'download',
        component: () => import('@/views/zip/index'),
        name: 'ExportZip',
        meta: { title: 'exportZip' }
      }
    ]
  },
  /*
  {
    path: '/pdf',
    component: Layout,
    redirect: '/pdf/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/pdf/index'),
        name: 'PDF',
        meta: { title: 'PDF', icon: 'pdf' }
      }
    ]
  },
  {
    path: '/pdf/download',
    component: () => import('@/views/pdf/download'),
    hidden: true
  },

  {
    path: '/theme',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/theme/index'),
        name: 'Theme',
        meta: { title: 'Theme', icon: 'theme' }
      }
    ]
  },

  {
    path: '/clipboard',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/clipboard/index'),
        name: 'ClipboardDemo',
        meta: { title: 'Clipboard', icon: 'clipboard' }
      }
    ]
  },
 */
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://www.baidu.com/',
        meta: { title: 'externalLink', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
