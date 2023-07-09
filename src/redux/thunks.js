
export function fetchProducts() {
    return (dispatch) => {
        
        fetch('/data/data.json')
        .then(f => f.json())
        .then(res =>dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: { products: res.products } }) )
    }
}
