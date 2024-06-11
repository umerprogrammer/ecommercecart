import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './config/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import  './css/style.css';
import ECHeader from './components/ECHeader';


export const NavCartCount = createContext(0);
export const GetCartCount = createContext<any>(null);


function App() {


  const [cartCount,setCartCount] = useState(0);
  const getCartCount = (count:any) =>{
    console.log(count);
    setCartCount(count);
  }
  return (

    <div className="App">
      <header className="App-header">
        <GetCartCount.Provider value={{getCartCount:getCartCount}}>
        <NavCartCount.Provider value={cartCount} >
        <ECHeader/>
        <AppRouter/>
        </NavCartCount.Provider>
        </GetCartCount.Provider>
      </header>
    </div>

  );
}

export default App;
