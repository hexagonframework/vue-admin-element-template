import Vue from 'vue';
import Router from 'vue-router';

/* layout */
import Layout from '../views/layout/Layout';

/* login */
import Login from '../views/login/';
const authRedirect = () => import('../views/login/authredirect');
const sendPWD = () => import('../views/login/sendpwd');
const reset = () => import('../views/login/reset');

/* dashboard */
const dashboard = () => import('../views/dashboard/index');

/* error page */
const Err404 = () => import('../views/error/404');
const Err401 = () => import('../views/error/401');

/* example*/
const Table = () => import('../views/example/table/table');
const DragTable = () => import('../views/example/table/dragTable');
const InlineEditTable = () => import('../views/example/table/inlineEditTable');

const Tab = () => import('../views/example/tab/index');


Vue.use(Router);

/**
 * icon : the icon show in the sidebar
 * hidden : if hidden:true will not show in the sidebar
 * redirect : if redirect:noredirect will not redirct in the levelbar
 * noDropdown : if noDropdown:true will not has submenu
 * meta : { role: ['admin'] }  will control the page role
 **/

export const constantRouterMap = [
    { path: '/login', component: Login, hidden: true },
    { path: '/authredirect', component: authRedirect, hidden: true },
    { path: '/sendpwd', component: sendPWD, hidden: true },
    { path: '/reset', component: reset, hidden: true },
    { path: '/404', component: Err404, hidden: true },
    { path: '/401', component: Err401, hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    hidden: true,
    children: [{ path: 'dashboard', component: dashboard }]
  }
]

export default new Router({
    // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

export const asyncRouterMap = [
  {
    path: '/table',
    component: Layout,
    redirect: 'noredirect',
    name: '表格实例',
    icon: 'zonghe',
    meta: { role: ['admin'] },
    children: [
      { path: 'dragtable', component: DragTable, name: '拖拽table' },
      { path: 'inline_edit_table', component: InlineEditTable, name: 'table内编辑' },
      { path: 'table', component: Table, name: '综合table' },
      { path: 'tab/index', component: Tab, name: 'Tab table' }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
];
