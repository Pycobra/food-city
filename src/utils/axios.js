import axios from 'axios';
import { API_BASE_URL } from './constant';

const apiInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 5000, // timeout after 5 seconds
    headers: {
        Authorization: localStorage.getItem('access_token')
            ? 'JWT ' + localStorage.getItem('access_token')
            : null,
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

apiInstance.interceptors.response.use((response) => {
        return response;
    },
    async function(error){
        // console.log(error, "weeeeerrrrrrrrrrrrrrrrrrrrrrrrrrrrd")
        const originalRequest = error.config;
        if (typeof error.response === 'undefined') {
            alert('Api server is down');
            return  Promise.reject(error);
        }
        if (error.response.status === 401 &&
            originalRequest.url === API_BASE_URL + 'account/token/refresh/') {
            window.location.href = '/auth/login/';
            return  Promise.reject(error);
        }
        if (error.response.data.code === 'token_not_valid' &&
            error.response.status === 401 &&
            error.response.statusText === "Unauthorized") {
            const refreshToken = localStorage.getItem('refresh_token')
            if (refreshToken){
                const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]))
                const now = Math.ceil(Date.now() / 1000);
                console.log(tokenParts.exp);

                if (tokenParts.exp > now){
                    return apiInstance
                        .post('account/token/refresh/', {refresh: refreshToken})
                        .then(res => {
                            localStorage.setItem('access_token', res.data.access);
                            localStorage.setItem('refresh_token', res.data.refresh);
                            apiInstance.defaults.headers['Authorization'] = 
                                'JWT ' + res.data.access;
                            originalRequest.headers['Authorization'] = 
                                'JWT ' + res.data.access;
                            return apiInstance(originalRequest);
                        })
                        .catch((err) => {
                            console.log(err)
                        });
                } else {
                    window.location.href = '/auth/login/';
                } 
            } else {
                window.location.href = '/auth/login/';
            }
        }
        
       else if (error.response.status === 400 || error.response.status === 401) {
            return  Promise.reject(error);
        }
    }
)
export default apiInstance;




