import { useContext, useState } from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavCartCount } from '../App';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';


export default function ECHeader() {
    const cartCount = useContext(NavCartCount);
    const [totalCount, setTotalCount] = useState(cartCount);


    return <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-transparent text-dark px-2  ">
            <a className="navbar-brand text-dark w-25" href="#">Shops</a>
            <div className='border main-menu-search'>
                <div className="row m-0">
                    <div className="col-sm-4 p-0 pe-1">
                        <input type="text" placeholder='Categories' className='border-0 p-1 border-end w-100' />
                    </div>
                    <div className="col-sm-7 p-0 ">
                            <input type="text" placeholder='item....' className='border-0 p-1 border-end  w-100' />
                                
                    </div>
                    <div className="col-md-1 p-0 d-flex align-items-center justify-content-center">
                    <SearchIcon />
                    </div>
                </div>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ">
                    <li className="nav-item ">
                        <a className="nav-link text-dark" href="/products">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Sign Up</a>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#"><Badge color="secondary" badgeContent={cartCount} showZero>
                            <ShoppingCartIcon />
                        </Badge>
                        </a>
                    </li>
                </ul>

                {/* <form className="form-inline my-2 my-lg-0 d-flex gap-2">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
            </div>
        </nav>
    </>
}