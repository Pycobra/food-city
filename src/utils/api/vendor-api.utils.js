import apiInstance from '../axios';




export async function ApiGet_all_vendor(){
    const data = apiInstance.get('vendor/all-vendor')
                .then(res => res.data)
                .catch(err => err)
    return data
}
export async function ApiGet_recent_added_vendor(){
    const data = apiInstance.get('vendor/recent-added-vendor')
                .then(res => res.data)
                .catch(err => alert(err))
    return data
}
export async function ApiGet_best_selling_vendor(){
    const data = apiInstance.get('vendor/best-selling-vendor')
                .then(res => res.data)
                .catch(err => alert(err))
    return data
}
export async function ApiGet_single_vendor(id){
    console.log("e nosuppose be seven o")
    const data = await apiInstance.get(`vendor/single-vendor/${id}`)
                .then(res => res.data)
                .catch(err => alert(err))
    return data
}