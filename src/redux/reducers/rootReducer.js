import { combineReducers } from "redux";
import { getProductsReducer } from './getProductsReducer'
import { addModalReducer } from './addModalReducer'
import { deleteModalReducer } from './deleteModalReducer'
import { locstionReducer } from './locstionReducer'
import { addToFavoriteReducer } from './addToFavoriteReducer'
import { addToCartReducer } from './addToCartReducer'
import { findeArticleReducer } from './findeArticleReducer'
import { getNameReducer } from './getNameReducer'
import { orderFormReducer } from "./orderFormReducer";


export const rootReducer = combineReducers({
    products: getProductsReducer,
    modalActive: addModalReducer,
    deleteModalActive: deleteModalReducer,
    cross: locstionReducer,
    favorits: addToFavoriteReducer,
    cart: addToCartReducer,
    checArticle: findeArticleReducer,
    productName: getNameReducer,
    orderForm: orderFormReducer
})
