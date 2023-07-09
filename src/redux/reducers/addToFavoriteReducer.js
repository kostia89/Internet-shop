
const savedFavorites = localStorage.getItem('favorits') ? localStorage.getItem('favorits').split(',') : []

export function addToFavoriteReducer (state =  savedFavorites, action){
    switch(action.type){
        case 'ADD_TO_FAVORITE':
            return state.includes(action.article) ? state.filter(article => article !== action.article) : [...state, action.article]
            
        default:
            return state 
    }
}