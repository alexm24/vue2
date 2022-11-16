import { ROUTE_NAME_BROADCAST, APP_ROUTE } from '@/const'
const routes = [
  {
    path: '/',
    name: 'route-home',
    component: () => import('./views/Home')
  },
  {
    path: `/${APP_ROUTE.WATCH}/:id`,
    name: 'route-watch',
    component: () => import('./views/Watch')
  },
  {
    path: `/${APP_ROUTE.LIVE}/:id`,
    name: 'route-live',
    component: () => import('./views/Live')
  },
  {
    path: `/${APP_ROUTE.BROADCAST}/new`,
    name: ROUTE_NAME_BROADCAST.NEW,
    component: () => import('./views/Broadcast')
  },
  {
    path: `/${APP_ROUTE.STREAM_SETTING}/:id`,
    name: 'route-stream-setting',
    component: () => import('./views/stream-setting')
  },
  {
    path: `/${APP_ROUTE.STREAM}/:id`,
    name: 'route-stream',
    component: () => import('./views/stream')
  },
  {
    path: `/${APP_ROUTE.BROADCAST}/:id`,
    name: ROUTE_NAME_BROADCAST.EDIT,
    component: () => import('./views/Broadcast')
  },
  {
    path: `/${APP_ROUTE.REPORT}/:id`,
    name: 'route-report',
    component: () => import('./views/Report')
  },
  {
    path: `/${APP_ROUTE.HELP}`,
    name: 'route-help',
    component: () => import('./views/Help')
  },
  {
    path: `/${APP_ROUTE.ZOOM}`,
    name: 'route-zoom',
    component: () => import('./views/zoom')
  },
  {
    path: `/${APP_ROUTE.ZOOM}/:id`,
    name: 'route-zoom-page',
    component: () => import('./views/zoom-id')
  }
]
export default routes
