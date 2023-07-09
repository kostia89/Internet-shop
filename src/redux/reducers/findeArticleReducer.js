
export function findeArticleReducer (state = {findeArticle: ''}, action){
    switch(action.type){
        case 'FINDE_ARTICLE':
            return {...state,findeArticle: action.article}
        
        default:
            return state 
    }
}