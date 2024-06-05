import react from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import ProductCart from '../components/productcart';
import CartDetail from '../pages/cartlist';
import CartList from '../pages/cartlist';

const AppRouter =()=>{

    return <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/productcart' element={<ProductCart/>}/>
            <Route path='/cartlist' element={<CartList/>}/>
        </Routes>
    </BrowserRouter>
    </>
}

export default AppRouter;