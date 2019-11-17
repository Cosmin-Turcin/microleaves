import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Support from './pages/Support';
import Order from './pages/Order';

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/contact',
    Component: Contact,
  },
  {
    path: '/blog',
    Component: Blog,
  },
  {
    path: '/support',
    Component: Support,
  },
  {
    path: '/order',
    Component: Order,
  }
]

export default routes;