import { useState } from 'react';
import axios from 'axios';


export default function CartDetail(props:{
    category:string;
    title:string;
    price:number,
    discount:number,
    quantity:number,
    stockQuantity:number,
    image:any,
}) {

    const {category,title,price,discount,quantity,stockQuantity,image} = props;
    return <>

            <div className="row mt-4">
                <div className="col-md-8">
                    <div className='rounded-1 px-2 '>
                        <div className='border rounded-1 p-2 d-flex justify-content-between'>
                            <div className='p-2' >
                                <input type="checkbox" />
                                <span className='px-2'>Select All</span>
                            </div>
                            <button type="button" className='btn btn-dark rounded-pill fs-6'>Delete All</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='border rounded-1 p-2'>
                        <h5 className='fw-bold p-1'>Order Summary</h5>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-8">
                    <div className='rounded-1 px-2 '>
                        <div className='border rounded-1 p-2'>
                            <div className="row">
                                <div className='col-md-8 d-flex gap-2'>
                                    <input type="checkbox" />
                                    <img src={image} alt="" className='border rounded-2' style={{ width: "100px", height: "100px" }} />
                                    <div className='d-flex flex-column gap-2'>
                                        <span>{category}</span>
                                        <span>{title}</span>
                                        <div className='d-flex gap-2 align-items-center'>
                                            <span>Color</span>
                                            <select name="" id="" className='form-select form-select-sm' style={{ width: "120px" }}>
                                                <option value="0">Red</option>
                                                <option value="0">Wite</option>
                                                <option value="0">Blue</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4  d-flex flex-column align-items-end justify-content-end gap-2">
                                    <span><s>${price}</s></span>
                                    <span className='fw-bold fs-5'>${price - discount}</span>
                                    <div className='rounded-2'  style={{ width: "150px",height:"30px" }}>
                                        <div className='row m-0 rounded-2 d-flex align-items-center '>
                                            <div className="col-md-2 p-0">
                                        <button type="button" className='btn btn-light p-0 m-0  w-100 rounded-0 rounded-start-2'><span className='fw-bold'>-</span></button></div>
                                        <div className="col-md-8 p-0">
                                        <input type="text" id="quantity" value={quantity} className='w-100 text-center border ' /></div>
                                        <div className="col-md-2 p-0">
                                        <button type="button" className='btn btn-light p-0 m-0  w-100 rounded-0 rounded-end-2'><span className='fw-bold'>+</span></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </>
}