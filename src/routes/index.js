// Layouts
import MobileLayout from 'layouts/MobileLayout'
import NoAuthLayout from 'layouts/NoAuthLayout'

// Routes
import LoginRoute from './Login'

// Routes: Deals
import DealsRoute from './Deals'
import DealRoute from './Deals/routes/View'

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
        DealRoute(store)
      ]
    }
  ]
})

export default createRoutes
