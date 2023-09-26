import apiInstance from "../axios"



export async function ApiGet_delivery_options(){
    const data = apiInstance.get('checkout/delivery-options')
                .then(res => res.data)
                .catch(err => err)
    return data
}
export async function ApiGet_payment_slections(){
    const data = await apiInstance.get(`checkout/payment-selections`)
                .then(res => res.data)
                .catch(err => err)
    return data
}
export async function ApiPost_complete_payment(obj){
    const data = await apiInstance.post('checkout/complete-payment', obj)
                .then(res => {
                   console.log(res, "=====pop======1")
                    return res.data
                })
                .catch(err => {
                    console.log(err, "=====pop======4")
                     return err
                 })
    return data
}
export async function ApiGet_paystack_public_key(){
    const data = await apiInstance.get(`checkout/paystack-public-key`)
                .then(res => res.data)
                .catch(err => err)
    return data
}