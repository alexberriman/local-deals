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

// Routes: Search
import SearchRoute from './Search'
import SearchResultRoute from './Search/routes/Result'

export const createRoutes = (store) => ({
  path: '/',
  indexRoute: {
    onEnter: (nextState, replace) => replace('/deals')
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
        SearchRoute(store),
        SearchResultRoute(store),
        NotFoundRoute(store)
      ]
    }
  ]
})

export default createRoutes
