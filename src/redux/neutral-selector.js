import { createSelector } from "reselect";
import { selectAllVendor, selectBestSellingVendor, selectRecentAddedVendor } from "./vendor/vendor.selector";
import { selectAllVendorShop, selectAllShop, selectShopCategories } from "./shop/shop.selector";



const AllRestaurant = () => createSelector(
    [selectAllVendor, selectAllShop], 
    (allVendor, allShop) => {
        if (allVendor && allShop){
            allVendor.map((vendor, ind) => {
                vendor['meals'] = allShop.filter(shop => 
                    shop.vendor === vendor.id)
            })
        }
        return allVendor
    }
)
const BestSellingVendor = () => createSelector(
    [selectAllVendor, selectAllShop, selectBestSellingVendor], 
    (allVendor, allShop, bestSelling) => {
        var vendors=null
        if (allVendor && allShop && bestSelling){
            return bestSelling.ApiResponse.map(({fields:{product}}, ind) => {
                var item =  allShop.find(shop => shop.id === product)
                return allVendor.find((vendor, ind) => item.id === vendor.id)
            }).filter(i => i)
        }
        return
    }
)
const RecentAddedVendor = () => createSelector(
    [selectRecentAddedVendor, selectAllShop], 
        (recentVendor, allShop) => {
        if (recentVendor && allShop){
            recentVendor.map((vendor, ind) => {
                vendor['meals'] = allShop.filter(shop => 
                    shop.vendor === vendor.id)
            })
        }
        return recentVendor
    }
)
const SingleVendor = (id) => createSelector(
    [selectAllVendor, selectAllShop, selectShopCategories], 
        (allVendor, allShop, categories) => {
        if (allVendor && allShop && categories){
            return allVendor.find((vendor, ind) => {
                vendor['meals'] = categories.filter(cat => {
                    cat['data'] = allShop.filter(shop => {
                        return shop.vendor === parseInt(id) && cat.id === shop.category
                    })
                    return cat
                })
                // console.log(vendor.id === parseInt(id) ? vendor : null, 'uuuuuuuuuuuuuuuuuuuuuuuuuuu')
                return vendor.id === parseInt(id)
            })
        }
        return 
    }
)
const SingleItem = (itemId) => createSelector(
    [selectAllShop], 
    (allShop) => {
        if (allShop){
            const singleItem = allShop.find(shop => shop.id === parseInt(itemId))
            const relatedItems = allShop.filter(shop => {
                return shop.id !== singleItem.id && singleItem.category === shop.category
            })
            return {singleItem, relatedItems}
        }
        return {singleItem:[], relatedItems:[]}
    }
)
const NeutralSelector = (str, data) => {
    if (str == "All Restaurants"){
        return AllRestaurant()
    }
    if (str == "Best Selling Restaurants"){
        return BestSellingVendor()
    }
    if (str == "Recently Added"){
        return RecentAddedVendor()
    }
    if (str == "Single Vendor"){
        return SingleVendor(data)
    }
    if (str == "Single Item"){
        return SingleItem(data)
    }
}
export default NeutralSelector;