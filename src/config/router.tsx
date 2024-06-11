import react from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import ProductCart from '../components/productcart';
import CartDetail from '../pages/cartlist';
import CartList from '../pages/cartlist';
import ItemDetail from '../pages/itemdetail';

const AppRouter =()=>{

    return <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/productcart' element={<ProductCart/>}/>
            <Route path='/cartlist' element={<CartList/>}/>
            <Route path='/itemdetail/:id' element={<ItemDetail/>}/>
        </Routes>
    </BrowserRouter>
    </>
}

export default AppRouter;