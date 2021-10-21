import { Redirect } from 'react-router-dom'

import discover from '@/pages/discover'
import recommend from '../pages/discover/c-pages/recommend'
import album from '../pages/discover/c-pages/album'
import artist from '../pages/discover/c-pages/artist'
import djradio from '../pages/discover/c-pages/djradio'
import ranking from '../pages/discover/c-pages/ranking'
import songs from '../pages/discover/c-pages/songs'
import mine from '@/pages/mine'
import friend from '@/pages/friend'
import mall from '@/pages/mall'
import musicer from '@/pages/musicer'
import download from '@/pages/download'

const routers = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to='/discover/recommend' />
  },
  {
    path: '/discover',
    component: discover,
    // render: () => <Redirect to='/discover/recommend' />,
    routers: [
      {
        path: '/discover/recommend',
        component: recommend
      },
      {
        path: '/discover/album',
        component: album
      },
      {
        path: '/discover/artist',
        component: artist
      },
      {
        path: '/discover/djradio',
        component: djradio
      },
      {
        path: '/discover/ranking',
        component: ranking
      },
      {
        path: '/discover/songs',
        component: songs
      }
    ]
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
  }
]

export default routers
