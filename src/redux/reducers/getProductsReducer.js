export function getProductsReducer(state = { products: [] }, action) {
    switch (action.type){
        case 'GET_PRODUCTS_SUCCESS':
            return { ...state, products: action.payload.products}
        default:
            return state    
    }
}  