
const savedCart = localStorage.getItem('cart') ? localStorage.getItem('cart').split(',') : []

export function addToCartReducer ( state = savedCart, action){
    switch(action.type){
        case 'ADD_TO_CART':
            return [ ...state, action.article]
        case 'DELETE_FROM_CART':
                return state.filter(article => article !== action.article)
        case 'CONFIRM_ORDER':
            
            return []
        default:
            return state 
    }
}