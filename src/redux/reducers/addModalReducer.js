export function addModalReducer (state = { modalActive: false }, action){
    switch(action.type){
        case 'ADD_MODAL_ACTIVE':
            return {...state,modalActive: true}
        case 'ADD_MODAL_CLOSE':
            return{...state,modalActive: false} 
        default:
            return state 
    }
}