import React from "react";
import { Link } from "react-router-dom";
import DrawerToggleButton from "./Nav-drawer/DrawerToggleButton";
import { useLocation } from "react-router-dom";
import { useCart } from "react-use-cart";



export default function Header(props){
        const location = useLocation();
        const { pathname } = location;
        const splitLocation = pathname.split("/");

        const { totalUniqueItems } = useCart();

        
    return(
        <header className="nav--1">
    <div className="dropdown">
<div>
    <DrawerToggleButton click={props.drawerClickHandler}/>
</div>

</div>

            <h2>VIXTY</h2>
            
            <div className="nav--items">
                <li className={splitLocation[1] === "" ? "active" : ""}>
                    <Link to="/vixty-proj" className='text-link'>HOME</Link>
                </li>
                <li className={splitLocation[1] === "about" ? "active" : ""}>
                    <Link to='/about' className='text-link'>ABOUT</Link>
                </li>
                <li className={splitLocation[1] === "insight" ? "active" : ""}>
                    <Link to='/insight' className='text-link'>INSIGHTS</Link>
                </li>
                <li className={splitLocation[1] === "contact" ? "active" : ""}>
                    <Link to='/contact' className='text-link'>CONTACT</Link>
                </li>
                <li className={splitLocation[1] === "store" ? "active" : ""}>
                    <Link to='/store' className='text-link'>STORE</Link>
                </li>
                <li className={splitLocation[1] === "shopping" ? "active" : ""}>
                    <Link to='/bag' className='btn-link'>
                        <button
                        style={{height: '40px', width: '40px', position: 'relative'}} 
                        variant='outline-primary'
                        className="rounded-circle"
                        >
                    <svg
                     xmlns="http://www.w3.org/2000/svg" 
                     
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      > 
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> 
                    </svg>
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                    style={{
                        color: 'white',
                        width: '15px',
                        height: '15px',
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        transform: 'translate(25%, 25%)',
                    }}
                    >
                        {totalUniqueItems}
                    </div>
                    </button>
                    </Link>
                </li>
                
    </div>



        </header>
    )
}