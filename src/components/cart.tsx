

import React, { useState } from 'react';
import './cart.css';
import defaultImage from '../images/hp_elitebook_mobile.jpg'
import { Rating } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

const Cart = (props: {
    category:string,
    title: string,
    description: string,
    price: number,
    image: any,
    isStock?: boolean,
}) => {
    const {category, title, description, price, image, isStock } = props;
    const navigate = useNavigate();

    let cartData = {
        category:category,
        title: title,
        description: description,
        price: price,
        image: image,
        isStock: isStock,
    }

    let [cart , setCart] = useState(cartData);
    let [carts , setCarts] = useState<any>([]);
    let cartstorage = [];
    
    const setLocalStorage = () =>{
        const jsonString = localStorage.getItem("cartItems");
         if( jsonString != null || jsonString != undefined )
            {
                
                cartstorage =  Object.assign([], JSON.parse(jsonString)); //<cartData[]>JSON.parse(JsonObject);
                carts = cartstorage
            }
               // setCart(cart);
                carts.push({...cart});
                setCarts([...carts]);
                console.log(carts,"Storage Cart");
                localStorage.setItem("cartItems",JSON.stringify(carts));
        
        }
 

    return <>
        <div className="mycart mb-3 border shadow">
            <div className="cartimage w-100 p-2" >
                <img src={cart.image} className='w-100' alt=""/>
            </div>
            <div className="cartfooter d-flex flex-column justify-content-between">
                <div className='px-2'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <span><Rating name="half-rating" defaultValue={2.5} precision={0.5} size="small" /></span>
                        <span><ShoppingCartIcon fontSize="small" /></span>
                    </div>
                    <span className='carttitle' >{cart.title}</span>
                    <div>
                        <span><s>${cart.price}</s>  ${(cart.price <= 30 ? (cart.price - 1) : (cart.price - 10)).toFixed(2)} </span>
                    </div>
                </div>
                <div className="mx-2 row mt-1">
                    <div className="col-md-1 p-0 ">
                        <button type="button" className='btn btn-sm btn-dark h-100' onClick= {()=>{
                            navigate("/itemdetail",{ state: { title: cart.title, description: cart.description } })
                        }} ><InfoIcon fontSize='small' /></button>
                    </div>
                    <div className="col-md-10 ms-3 p-0  ">
                        <button type="button" onClick={() => {
                            setLocalStorage();
                            navigate("/cartlist");
                        }} className='btn btn-sm btn-outline-dark h-100 w-100'>Add To Cart</button></div>
                </div>
            </div>
        </div>
    </>
}

export default Cart;