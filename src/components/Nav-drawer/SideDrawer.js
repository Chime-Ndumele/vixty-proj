import React from "react";
import { Link } from "react-router-dom";
import './SideDrawer.css'

export default function SideDrawer(props){
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return(
        <div className={drawerClasses}>
            <ul>
                <li><Link to="/" className='text-link'>HOME</Link></li>
                <li><Link to='/about' className='text-link'>ABOUT</Link></li>
                <li><Link to='/insight' className='text-link'>INSIGHTS</Link></li>
                <li><Link to='/contact' className='text-link'>CONTACT</Link></li>
                <li><Link to='/store' className='text-link'>STORE</Link></li>
                <li><Link className='text-link'>SHOPPING BAG</Link></li>
                </ul>
      </div>
    )
}