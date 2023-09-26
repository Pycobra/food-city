import apiInstance from '../axios';


export async function ApiPost_account_login(obj){
    const response = apiInstance.post('account/token/obtain-token/', obj)
                    .then(res => {
                        localStorage.setItem('access_token', res.data.access);
                        localStorage.setItem('refresh_token', res.data.refresh);
                        apiInstance.defaults.headers['Authorization'] = 
                            'JWT ' + localStorage.getItem('access_token')
                        return res.data
                    })
                    .catch(err => {
                        // console.log(err.response)
                        return err.response
                    })
    return response
}

export async function get_account_session(obj){
    // const response = localStorage.getItem('access_token')
    return localStorage.getItem('access_token')
}

export async function ApiPost_account_signout(){
    const response = apiInstance.post('account/logout/blacklist/', {
        refresh_token: localStorage.getItem('refresh_token')
    });
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    apiInstance.defaults.headers['Authorization'] = null;
    return response
}
export async function ApiPost_address(obj){
    const response = apiInstance.post('account/create-address', obj);
    // localStorage.removeItem('access_token');
    // localStorage.removeItem('refresh_token');
    // apiInstance.defaults.headers['Authorization'] = null;
    return response
}

export async function ApiPost_create_account(obj){
    const data = await apiInstance.post('account/create-account', obj)
                .then(res => res)
                .catch(err => err.response)
    return data
}

export async function ApiGet_account(id){
    const data = await apiInstance.get(`account/single-account/${id}`)
                .then(res => res.data)
                .catch(err => alert(err))
    return data
}
export async function ApiPost_current_user_address(id){
    const data = await apiInstance.get(`account/user-address/${id}`)
                .then(res => res.data)
                .catch(err => alert(err))
    return data
}