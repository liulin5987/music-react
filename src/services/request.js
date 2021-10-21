import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'

// 创建axios实例
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

// 设置axios的请求拦截
instance.interceptors.request.use(config => {
  // 1.发送网络请求时，设置页面loding样式
  // 2.如果有必须携带token的请求，可以在这里做检测，没有携带的话，直接跳转至登录
  // 3.params/data的序列化操作
  return config
}, err => {})

// 设置axios的响应拦截
instance.interceptors.response.use(res => {
  console.log(res.data)
  return res.data
}, err => {
  if (err && err.response) {
    switch(err.response.status) {
      case 400:
        console.log('请求错误')
        break
      case 401:
        console.log('未授权访问')
        break
      default:
        console.log('其他错误信息')  
    }
  }
  return err
})

export default instance