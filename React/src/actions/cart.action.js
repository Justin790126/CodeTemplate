import actionTypes from 'root/actionTypes'

export function templateAction() {
  return async(dispatch, getState) => {
    try {
      return {
        type: actionTypes.ADD_TO_CART,
        payload: {
          product: 123,
          quantity:456,
          unitCost:798
        }
      }
    }catch(error){
      console.log(error);
    }
  }
}

export function addToCart(product, quantity, unitCost) {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      product,
      quantity,
      unitCost
    }
  }
}

export function updateCart(product, quantity, unitCost) {
  return {
    type: actionTypes.UPDATE_CART,
    payload: {
      product,
      quantity,
      unitCost
    }
  }
}

export function deleteFromCart(product) {
  return {
    type: actionTypes.DELETE_FROM_CART,
    payload: {
      product
    }
  }
}
