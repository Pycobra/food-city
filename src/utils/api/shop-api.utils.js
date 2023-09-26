import apiInstance from "../axios"







export async function ApiGet_all_shop(){
    console.log("e nosuppose be one o")
    const data = apiInstance.get('product/all-product')
                .then(res => res.data)
                .catch(err => err)
    return data
}
export async function ApiGet_single_shop(str, id){
    console.log("e nosuppose be two o")
    const data = await apiInstance.get(`product/single-product/${str}/${id}`)
                .then(res => res.data)
                .catch(err => err)
    return data
}
export async function ApiGet_all_vendors_shop(){
    console.log("e nosuppose be three o")
    const data = apiInstance.get('product/all-vendor-product')
                .then(res => res.data)
                .catch(err => err)
    return data
}
export async function ApiGet_shop_categories(){
    console.log("e nosuppose be one o")
    const data = apiInstance.get('product/all-category')
                .then(res => res.data)
                .catch(err => err)
    return data
}