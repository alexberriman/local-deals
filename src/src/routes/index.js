// Layouts
import LoadingLayout from 'layouts/LoadingLayout'
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

// Routes: Loading
import LoadingRoute from './Loading'

// Routes: advertiser
import AdvertiserRoute from './Advertiser'


export const createRoutes = (store) => ({
  path: '/',
  indexRoute: {
    onEnter: (nextState, replace) => replace('/loading')
  },
  childRoutes: [
    {
      component: NoAuthLayout,
      childRoutes: [
        LoginRoute(store)
      ]
    },
    {
      component: LoadingLayout,
      childRoutes: [
        LoadingRoute(store)
      ]
    },
    {
      component: MobileLayout,
      childRoutes: [
        AdvertiserRoute(store),
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
