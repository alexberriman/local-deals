// Layouts
import MobileLayout from 'layouts/MobileLayout'
import NoAuthLayout from 'layouts/NoAuthLayout'

// Routes
import LoginRoute from './Login'
import LogoutRoute from './Logout'
import NotFoundRoute from './NotFound'

// Routes: Deals
import DealsRoute from './Deals'
import DealRoute from './Deals/routes/View'
import DealLocationRoute from './Deals/routes/Location'

export const createRoutes = (store) => ({
  path: '/',
  indexRoute: {
    onEnter: (nextState, replace) => replace('/login')
  },
  childRoutes: [
    {
      component: NoAuthLayout,
      childRoutes: [
        LoginRoute(store)
      ]
    },
    {
      component: MobileLayout,
      childRoutes: [
        DealsRoute(store),
        DealRoute(store),
        DealLocationRoute(store),
        LogoutRoute(store),
        NotFoundRoute(store)
      ]
    }
  ]
})

export default createRoutes
