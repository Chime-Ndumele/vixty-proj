/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from 'react-use-cart';
import axios from 'axios'
import { useState } from "react";

export default function Lamps(props){
    const { addItem } = useCart();
    const url = `https://643d64fdf0ec48ce905b37b4.mockapi.io/api/v1/products`
    const [product, setProduct] = useState(null);


    useEffect(() => {
        axios.get(url).then(response => {
            setProduct(response.data)
        })
    }, [url])

    let content = null

    if(product){
        content=
        product.slice(0,6).map(user => {
            return(
    <div className="vase-main">
    <div className="vase1">
        <Link to={`/products/${user.id}`}><img src={user.images} alt='' className="lomm"/></Link>
    </div>
    <div>
    <h6 className="lkj">{user.description1}</h6>
    <a>${user.price}.00</a>
    </div>
    <div className="bag-container">
    <button className="Bag" onClick={() => addItem(user)}>{user.button}</button>
    </div>
</div>
)
})
}

return(
    <div className="vase">
        {content}
    </div>
)
}