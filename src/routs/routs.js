import { createBrowserRouter } from "react-router-dom";
import { Goods } from "../components/Goods/Goods"
import {Main} from '../components/Main/Main'
import { Cart } from '../pages/Cart/Cart'

import { Favorites } from '../pages/Favorites/Favorites'
export const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Goods />
        }, 
        {
            path: '/cart',
            element: <Cart />
        }, 
        {
            path: '/favorites',
            element: <Favorites />
        }
    ]
}])
