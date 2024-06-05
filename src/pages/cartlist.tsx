import { useState } from 'react';
import axios from 'axios';
import CartDetail from '../components/cartdetail';

export default function CartList() {


    let [data, setData] = useState<any>([]);
    let baseUrl = "https://fakestoreapi.com/products";


    //*****************  CALLING API *****************

    axios.get(baseUrl).then((res) => {
        console.log(res.data, "Response Success");
        setData(res.data);
    }).catch((error) => {
        console.log(error, "Response Error");
    })


    return <>
        <div className="container mt-2">
            <div className="row border">
                <div className="col-md-12">
                    <h5 className='fw-bold fs-2'>My Cart</h5>
                </div>
            </div>
            {

                data.map((x: any, i: any) => {
                    return <CartDetail category={''} title={''} price={0} discount={0} quantity={0} stockQuantity={0} image={undefined} />
                })
            }
        </div>

    </>
}