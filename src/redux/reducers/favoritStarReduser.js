export function favoritStarReduser(state = {isfav: true}, action){
    switch(action.type){
        case 'FAVORITE_STAR_ACTIV':
            return    {...state, isfav: true} 
        case 'FAVORITE_STAR_CLOSE':
            return{...state, isfav: false} 
        default:
            return state 
    }
}