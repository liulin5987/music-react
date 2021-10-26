import request from './request'

export function getBanners() {
  return request({
    url: "/banner"
  })
}

export function getRecommend(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}