/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const routesRouter = {
  path: '/manage',
  component: Layout,
  redirect: '/manage/userList',
  name: 'Manage',
  meta: {
    title: 'Mange',
    icon: 'table'
  },
  children: [
    {
      path: 'userList',
      component: () => import('@/views/table/dynamic-table/index'),
      name: 'UserList',
      meta: { title: 'User List' }
    },
    {
      path: 'shopList',
      component: () => import('@/views/table/drag-table'),
      name: 'ShopList',
      meta: { title: 'Shop List' }
    }
  ]
}
export default routesRouter
