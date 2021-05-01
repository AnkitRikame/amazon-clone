export const initialState ={
    basket: [
    //     {
    //     id:"3254354345",
    //     title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
    //     price:100,
    //     rating:4,
    //     image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
    // },
    // {

    //     id:"49538094",
    //     title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
    //     price:200,
    //     rating:5,
    //     image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
    // },
],
    user : null,
};


// Selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state,action){

    console.log(action);
    switch(action.type){

        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }

        case 'ADD_TO_BASKET':
            // logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
        };
       
        case 'REMOVE_FROM_BASKET':

            // cloned the basket .......
            let newBasket = [...state.basket];

            // we check to see ..........
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            if( index >= 0){
                newBasket.splice(index,1);
            }
            else{
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!` 
                );
            }

            return {...state, 
                basket: newBasket 
            };
        default:
            return state;
    }
}

export default reducer;