import actionTypes from 'root/actionTypes'
import InitialState from 'root/reducers/initialState'


export default (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        }
        case actionTypes.UPDATE_CART: {
            return {
                ...state,
                cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
            }
        }
        case actionTypes.DELETE_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter(item => item.product !== action.payload.product)
            }
        }
        default:
            return state;
    }
}