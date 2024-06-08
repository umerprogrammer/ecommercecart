import Cart from "./cart";
import { useEffect, useState } from 'react';
import axios from 'axios';



const ProductCart = () => {

    let [data, setData] = useState<any>([]);
    let baseUrl = "https://fakestoreapi.com/products";

    //*****************  CALLING API *****************
    // const getData = () => {
    useEffect(() => {
        axios.get(baseUrl).then((res) => {
            console.log(res.data, "Response Success");
            setData(res.data);
        }).catch((error) => {
            console.log(error, "Response Error");
        })
    },[])
    //}


    return <>
        {/* <button type="button" onClick={() => {
            getData();

        }}>Get Cart</button> */}
        <div>
            <div className="container my-5">
                <div className="row">
                    {
                        data.map((x: any, i: any) => {
                            return <div className="col-md-3"> <Cart key={i} category={x.category} title={x.title} description={x.description} image={x.image} price={x.price} /></div>
                        })
                    }
                </div>
            </div>
        </div>
    </>
}

export default ProductCart;