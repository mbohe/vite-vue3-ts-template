// service 统一出口
import Cookies from 'js-cookie'
import Request from './request'
import router from '@/router'

const request = new Request({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: import.meta.env.TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token 拦截
      // const token = localStorage.getItem('token')
      const token = Cookies.get('token')
      if (token && config.headers) {
        config.headers.Authorization = `${token}`
      }

      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('请求失败的拦截')
      return error
    },
    responseInterceptor: (res) => {
      if (res.data.code === -99) {
        console.error(res.data.msg);
      } else if (res.data.code === -1) {
        console.error(res.data.msg);
      }
      return res
    },
    responseInterceptorCatch: (error) => {
      console.log('响应失败的拦截')
      console.error(error)

      return error
    }
  }
})

export default request
