const initialState = 0;

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "QUANTITY_CART":
        return action.status
    default:
        return state
  }
}

export default CartReducer