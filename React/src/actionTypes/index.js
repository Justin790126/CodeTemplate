
const actionsStr = [
    'ADD_TO_CART',
    'UPDATE_CART',
    'DELETE_FROM_CART'
]

const actionTypes = actionsStr.reduce((obj, val) => {
    obj[val] = val;
    return obj;
}, {})


export default actionTypes