import { useEffect, useState } from 'react';
import axios from 'axios';
import CartDetail from '../components/cartdetail';
import { useLocation, useParams } from 'react-router-dom';

export default function ItemDetail() {
    //const {category,title,description,price,discount,image} = props;
   // const params = useParams();
    //console.log(params,"param");
    // const {state} = useLocation();
    // const {title,description} = state;
    return <>
    
    <h1>item Detail </h1>
        {/* <div className="container border">
            <div className="row">
                <div className="col-md-6">
                    <img src={params.image} alt="" />
                </div>
                <div className="col-md-6">
                    <div>
                        <span>{params.category}</span>
                        <span>{params.title}</span>
                        <span>{params.price}</span>
                        <span>{params.description}</span>
                    </div>
                </div>
            </div>
        </div> */}
    </>
}

