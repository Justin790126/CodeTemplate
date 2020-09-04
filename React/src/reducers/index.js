import {
    ADD_TO_CART
} from 'root/consts'

import cartReducer from 'root/reducers/cart.reducer'
import productsReducer from 'root/reducers/product.reducer'
import { combineReducers } from 'redux'



export default combineReducers({
    products: productsReducer,
    shoppingCart: cartReducer
})
