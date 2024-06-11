import { useEffect, useState } from 'react';
import axios from 'axios';
import CartDetail from '../components/cartdetail';
import { useLocation, useParams } from 'react-router-dom';

export default function ItemDetail() {
    const { id } = useParams();
    let baseUrl = "https://fakestoreapi.com/products";
    //const {category,title,description,price,discount,image} = props;
    // const params = useParams();
    let totalAmount = 0;
    let itemQty = 0;
    const [inputQty, setInputQty] = useState(1);
    const [cart, setCart] = useState<any>({});
    useEffect(() => {
        axios.get(`${baseUrl}/${id}`).then((res) => {
            console.log(res.data);
            setCart(res.data);
        }).catch((error) => {
            console.log(error);

        })
    }, [])

    // Decrease Item Quantity
    const incrementQty = () => {
        itemQty = (inputQty + 1);
        setInputQty((inputQty + 1));
        console.log(itemQty, 'Qty');
       // calculateItem(itemQty);
    }


    // Increase Item Quantity
    const decrementQty = () => {
        itemQty = inputQty > 1 ? (inputQty - 1) : 1;
        setInputQty(itemQty);
        //   calculateItem(itemQty);
    }

    // Item Calculation
    //  const calculateItem = (qty: number) => {

    //     totalAmount = qty *  cartData.itemDiscount;
    //     setCart({...cart,itemAmount:(qty * cartData.itemDiscount)});
    // }

    return <>

        {/* <h1>item Detail </h1> */}
        <div className="container border mt-4 rounded-2 p-2">
            <div className="row ">
                <div className="col-md-3 ">
                    <img src={cart.image} alt="" height={"350px"} className='w-100' />
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='px-4'>
                                <h4 className='fw-bold text-uppercase'>{cart.category}</h4>
                                <h5 >{cart.title}</h5>
                                <div className='mt-4'>
                                    <span>Price : </span>
                                    <span className='fw-bold'>${cart.price}</span>
                                </div>
                                <div className='mt-4'>
                                    <span>{cart.description}</span></div>
                            </div>
                        </div>

                    </div>
                    <div className="row px-4 mt-3">
                        {/* <div className="col-md-2">
                            <span className='fw-bold fs-14'>Select Quantity </span>
                        </div> */}
                        <div className="col-md-2">
                        <span className='fw-bold fs-14'>Select Quantity </span>
                            <div className='row m-0 rounded-2 d-flex align-items-center border mt-2'>
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
    </>
}

