// Reducer manipulates the data the way we want it, basically. 
// Start with the initial State (check index.js for wrapping the app)
export const initialState = {
    cart: [],
    user: null
  }

  const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD TO CART':
            return {
                //first return whatever the state of the cart was
                ...state,
                cart: [...state.cart, action.item]
            }
        default:
            return state;
    }
  }

  export default reducer

