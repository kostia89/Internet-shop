export function locstionReducer(state = { cross: false }, action){
    switch(action.type){
        case 'LOCATION_CART_ACTIV':
            return    {...state,cross: true} 
        case 'LOCATION_CART_CLOSE':
            return{...state,cross: false} 
        default:
            return state 
    }
}