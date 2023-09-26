
export const SortErrorMessage = (obj) => {

    if (obj.success) return obj.success
    else {
        var msg = {}
        Object.keys(obj).find((i, ind) => {
            return ind === 0 
            ? msg = {type: `${i}`, content: obj[`${i}`][0]} 
            : null
        })
        return msg
    }
}