import { useEffect, useState } from 'react';
import axios from 'axios';
import CartDetail from '../components/cartdetail';

export default function CartList() {


    let [data, setData] = useState<any>([]);
    let baseUrl = "https://fakestoreapi.com/products";
    let [subTotal, setSubTotal] = useState(0);

    //*****************  CALLING API *****************
    useEffect(() => {

        const jsonString = localStorage.getItem("cartItems");
        if( jsonString != null || jsonString != undefined )
           {
               
            data =  Object.assign([], JSON.parse(jsonString)); //<cartData[]>JSON.parse(JsonObject);
            setData([...data]);
           }
       
    }, [])

    // get Subtotal From CartDetail Component
    const getSubTotal = (total: any) => {
        setSubTotal(total);
    }

    return <>
        <div className="container mt-2">
            <div className="row border">
                <div className="col-md-12">
                    <h5 className='fw-bold fs-2'>My Cart</h5>
                </div>
            </div>
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
            </div>
            <div className="row mt-2">
                <div className="col-md-8">
                    {
                        data.map((x: any, i: any) => {
                            return <CartDetail  key={i} itemId={x.id} category={x.category} title={x.title} price={x.price} discount={x.price <= 100 ? 1 : 10} quantity={1} stockQuantity={40}
                                image={x.image} getSubTotal={getSubTotal} />
                        })
                    }
                </div>
                <div className="col-md-4">
                <div className='border rounded-1 p-2'>
                        <h5 className='fw-bold p-1'>Order Summary</h5>
                        <div className='container'>
                            <div className="row d-flex justify-content-between">
                                <div className="col-md-6">
                                    <span className='fs-14'>Sub Total :</span>
                                </div>
                                <div className="col-md-6 text-end">
                                    <span className='fw-bold fs-14'>$ {subTotal.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="row d-flex justify-content-between">
                                <div className="col-md-6">
                                    <span className='fs-14'>Delivery Charges :</span>
                                </div>
                                <div className="col-md-6 text-end">
                                    <span className='fs-14 fw-bold'>$ {0}</span>
                                </div>
                            </div>

                            <div className="row d-flex justify-content-between">
                                <div className="col-md-6">
                                    <span className='fs-14'>Total Amount :</span>
                                </div>
                                <div className="col-md-6 text-end">
                                    <span className='fs-14 fw-bold'>$ {0 + subTotal.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </>
}