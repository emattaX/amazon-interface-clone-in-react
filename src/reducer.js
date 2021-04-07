// Reducer manipulates the data the way we want it, basically. 
// Start with the initial State (check index.js for wrapping the app)
export const initialState = {
    cart: [],
    user: null
  }

  // Selector (widely used)
  export const getCartTotal = (cart) => 
    cart?.reduce((amount, item) => item.price + amount, 0);

  const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                //first return whatever the state of the cart was
                ...state,
                cart: [...state.cart, action.item]
            };

          case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex(
              (cartItem) => cartItem.id === action.id
            )

            let newCart = [...state.cart]
      
            if (index >= 0) {
              newCart.splice(index, 1)
      
            } else {
              console.warn(
                `Cant remove product (id: ${action.id}) as its not in basket!`
              )
            }

            return {
              ...state,
              cart: newCart
            }

        default:
            return state;
    }
  }

  export default reducer

