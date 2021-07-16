import axios from 'axios'

export function  request(config){
    //1.创建实例
    const hsms = axios.create({
      baseURL: 'http://192.168.2.253',
      timeout: 5000
    })

    //2.拦截器
    hsms.interceptors.request.use(config => { //发送成功后拦截
      console.log(config);
      return config
    }, err => {  //发送失败后拦截
      console.log(err);
    });

    hsms.interceptors.response.use(res => {
      console.log(res);
      return res
    },err => {
      console.log(err);
    });

    //3.请求数据，返回的是一个promise
    return hsms(config)
}

//使用
request({
  url: '/home'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

//用promise包装，可以工作，但没必要，因为axios请求返回的就是promise
// export function  request(config){
//   return new Promise((resolve,reject) => {
//     //创建实例
//     const host1 = axios.create({
//       baseURL: 'http://192.168.2.253',
//       timeout: 5000
//     })
//
//     //请求数据
//     host1(config)
//         .then(res => {
//           resolve(res)
//         })
//         .catch(err => {
//           reject(err)
//         })
//   })
// }


//
// export function  request(config){
//   const host1 = axios.create({
//     baseURL: 'http://192.168.2.253',
//     timeout: 5000
//   })
//
//   host1(config,success,failure)
//       .then(res => {
//         success(res)
//       })
//       .catch(err => {
//         failure(err)
//       })
// }

// //使用时
//   import {request} from './request'
//
//   request(
//       {
//         url: '/home'
//       },
//       res => {
//         console.log(res);
//       },
//       err => {
//         console.log(err);
//       }
//   )
