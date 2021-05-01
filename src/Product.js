import React from 'react';
import "./Product.css";
// import {img1} from "./images/logo2.png";
import img1 from '../src/images/logo2.png';
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating}) {

    const [{ basket} , dispatch] =useStateValue();

    const addToBasket =() =>{
        // adding item to basket
        dispatch({
            type : 'ADD_TO_BASKET',
            item:{
                id:id,
                title: title,
                image: image,
                price:price,
                rating:rating
            }
        })

    };

    return (
        <div className="product">
         <div className="product-info">
            <p>{title}</p>   
            <p className="product__price">
                <small style={{fontWeight:"bold",fontSize:"16px"}}>₹</small>
                <strong>{price}</strong>
            </p> 
            
            <div className="product__rating">
                {Array(rating)
                    .fill()
                    .map((_) => (
                    <p>⭐</p>
                    ))}
            </div>
         </div>


            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button> 
            
            
        </div>
    );
}

export default Product;
