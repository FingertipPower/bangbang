import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost/mywebsite';
axios.defaults.withCredentials = true;

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    // _.toast("错误的传参");
    // alert("错误的传参");
    return Promise.reject(error);
});

//code状态码200判断
axios.interceptors.response.use((res) =>{
    if(res.data.code == '200'){
        // _.toast(res.data.msg);
        // alert(res.data.msg);
         return Promise.reject(res);
    }
    return res;
}, (error) => {
    // _.toast("网络异常");
    // alert("网络异常");
    return Promise.reject(error);
});


export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export default {
    select(params){
        return fetch('index.php/index/main',params)
    }
}
