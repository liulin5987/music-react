import discover from '@/pages/discover'
import mine from '@/pages/mine'
import friend from '@/pages/friend'
import mall from '@/pages/mall'
import musicer from '@/pages/musicer'
import download from '@/pages/download'

const routers = [
  {
    path: '/',
    exact: true,
    component: discover
  },
  {
    path: '/discover',
    component: discover
  },
  {
    path: '/mine',
    component: mine
  },
  {
    path: '/friend',
    component: friend
  },
  {
    path: '/mall',
    component: mall
  },
  {
    path: '/musicer',
    component: musicer
  },
  {
    path: '/download',
    component: download
  },
]

export default routers