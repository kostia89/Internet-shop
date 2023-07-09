export function orderFormReducer (state = {orderForm: false}, action){
    switch(action.type){
        case 'ACTIVE_ORDER_FORM':
            return {...state, orderForm: true}
        case 'CLOSE_ORDER_FORM':
            return {...state, orderForm: false}
            
        default:
            return state 
    }

}
