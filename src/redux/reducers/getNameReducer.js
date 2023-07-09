export function getNameReducer(state = {productName: ''}, action){
    switch(action.type){
        case 'GET_NAME_PRODUCT':
            return { ...state, productName: action.name}
            
        default:
            return state 
    }
}