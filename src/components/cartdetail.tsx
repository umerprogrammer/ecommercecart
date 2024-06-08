import { useEffect, useState } from 'react';
import axios from 'axios';
import { Delete } from '@mui/icons-material';

export default function CartDetail(props: {
    itemId: number;
    category: string;
    title: string;
    price: number,
    discount: number,
    quantity: number,
    stockQuantity: number,
    image: any,
    getSubTotal?: any,
}) {

    const { itemId, category, title, price, discount, quantity, stockQuantity, image, getSubTotal } = props;


    let [amount, setAmount] = useState(0);

    let [inputQty, setInputQty] = useState(1);
     let [itemAmount, setItemAmount] = useState((price - discount));
    let cartData = {
        itemId: itemId,
        itemCategory: category,
        itemTitle: title,
        itemPrice: price,
        itemDiscount: (price - discount),
        itemAmount: itemAmount,

    };
    let [cart, setCart] = useState(cartData);
    const [data, setData] = useState<any>([]);
    let itemQty = 0;
    let totalAmount = 0;


    // Decrease Item Quantity
    const incrementQty = () => {
        itemQty = (inputQty + 1);
        setInputQty((inputQty + 1));
        console.log(itemQty, 'Qty');
        calculateItem(itemQty);
    }

    // Increase Item Quantity
    const decrementQty = () => {
        itemQty = inputQty > 1 ? (inputQty - 1) : 1;
        setInputQty(itemQty);
        calculateItem(itemQty);
    }

    // Item Calculation
    const calculateItem = (qty: number) => {

         totalAmount = qty *  cartData.itemDiscount;
         setCart({...cart,itemAmount:(qty * cartData.itemDiscount)});
    }

    // get only Selected Item Amount
    const addCart = (Id: number) => {
        console.log(data.length, "Data length");
            console.log(data.length, "Add  Cart");
            data.push({ ...cart });
            setData([...data]);
        console.log(data, "Data Array ");
    }


    function deleteCart(itemId:any) {
    
    }

    // calculateItem();
    return <>
        <div className="row">
            <div className="col-md-12">
                <div className='rounded-1 px-2 '>
                    <div className='border rounded-1 p-2'>
                        <div className="row">
                            <div className='col-md-8 d-flex gap-2'>
                                <input type="checkbox" onChange={() => {
                                    cart.itemId = itemId
                                    addCart(cart.itemId);
                                   
                                }} />
                                <img src={image} alt="" className='border rounded-2' style={{ width: "100px", height: "100px" }} />
                                <div className='d-flex flex-column gap-2'>
                                    <div>
                                        <span className='fs-12 bg-light border rounded-pill p-1 px-4 text-wrap'>{category}</span></div>
                                    <span className='fs-13 ' >{title}</span>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <span className='fs-13' >Color</span>
                                        <select name="" id="" className='form-select form-select-sm' style={{ width: "120px" }}>
                                            <option value="0">Red</option>
                                            <option value="0">Wite</option>
                                            <option value="0">Blue</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex flex-column align-items-end justify-content-end gap-2">
                                <div className='d-flex gap-2'>
                                    <span className='fs-14'><s>${cart.itemPrice}</s></span>
                                    <span className='fw-bold fs-14'> ${cart.itemDiscount.toFixed(2)} </span></div>
                                <span className='fw-bold fs-14'> ${cart.itemAmount.toFixed(2)} </span>
                                <div className='rounded-2 d-flex gap-2' style={{ width: "150px", height: "30px" }}>
                                    <button className='btn btn-sm btn-outline-danger fs-10' onClick={()=>{
                                        deleteCart(cart.itemId);
                                    }}>Delete</button>
                                    <div className='row m-0 rounded-2 d-flex align-items-center border '>
                                        <div className="col-md-2 p-0">
                                            <button type="button" className='btn btn-light p-0 m-0  w-100 rounded-0 rounded-start-2' onClick={() => {
                                                decrementQty();
                                            }}><span className='fw-bold'>-</span></button></div>
                                        <div className="col-md-8 p-0">
                                            <input type="text" id="quantity" value={inputQty} onChange={(e) => {
                                                setInputQty(Number(e.target.value));
                                            }} className='w-100 text-center border-0  fs-14' /></div>
                                        <div className="col-md-2 p-0">
                                            <button type="button" className='btn btn-light p-0 m-0  w-100 rounded-0 rounded-end-2' onClick={() => {
                                                incrementQty();
                                            }}><span className='fw-bold'>+</span></button></div>
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