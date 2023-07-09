import React from "react";
import { useSelector } from "react-redux";
import { ProductList } from "../../components/ProductList";


export function Favorites (){
    
    const products = useSelector(state => state.products.products)
    const faw = useSelector(state => state.favorits)
    

    const favoritList = products.filter(
        product => faw.includes(product.id)
    )
    .map((product)=>({...product}))



    return(
       <ProductList 
           products = {favoritList}
        />
        
       
    )
}