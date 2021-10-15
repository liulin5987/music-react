import discover from '@/pages/discover'
import mine from '@/pages/mine'
import friend from '@/pages/friend'

const routers = [
  {
    path: '/',
    exact: true,
    component: discover
  },
  {
    path: '/mine',
    exact: true,
    component: mine
  },
  {
    path: '/friend',
    exact: true,
    component: friend
  }
]

export default routers