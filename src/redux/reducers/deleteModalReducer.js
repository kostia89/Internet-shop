export function deleteModalReducer (state = { deleteModalActive: false }, action){
    switch(action.type){
        case 'DELETE_MODAL_ACTIVE':
            return    {...state,deleteModalActive: true} 
        case 'DELETE_MODAL_CLOSE':
            return{...state,deleteModalActive: false} 
        default:
            return state 
    }
}