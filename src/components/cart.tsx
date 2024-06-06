

import React from 'react';
import './cart.css';
import defaultImage from '../images/hp_elitebook_mobile.jpg'
import { Rating } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

const Cart = (props: {
    title: string,
    description: string,
    price: number,
    image: any,
    isStock?: boolean,
}) => {
    const { title, description, price, image, isStock } = props;
    const navigate = useNavigate();
    return <>
        <div className="mycart mb-3 border shadow">
            <div className="cartimage w-100 p-2" >
                <img src={image} className='w-100' alt="" />
            </div>
            <div className="cartfooter d-flex flex-column justify-content-between">
                <div className='px-2'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <span><Rating name="half-rating" defaultValue={2.5} precision={0.5} size="small" /></span>
                        <span><ShoppingCartIcon fontSize="small" /></span>
                    </div>
                    <span className='carttitle' >{title}</span>
                    <div>
                        <span><s>${price}</s>  ${(price <= 30 ? (price - 1) : (price - 10)).toFixed(2)} </span>
                    </div>
                </div>
                <div className="mx-2 row mt-1">
                    <div className="col-md-1 p-0 ">
                        <button type="button" className='btn btn-sm btn-dark h-100'><InfoIcon fontSize='small' /></button>
                    </div>
                    <div className="col-md-10 ms-3 p-0  ">
                        <button type="button" onClick={() => {
                            navigate("/cartlist");
                        }} className='btn btn-sm btn-outline-dark h-100 w-100'>Add To Cart</button></div>
                </div>
            </div>
        </div>
    </>
}

export default Cart;