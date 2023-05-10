import React, { useEffect } from "react";
import '../../css/Product.css'
import { useCart } from 'react-use-cart';
import axios from 'axios'
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails(){
    const { addItem } = useCart();
    const { id } = useParams()
    const url = `https://643d64fdf0ec48ce905b37b4.mockapi.io/api/v1/products/${id}`
    const [product, setProduct] = useState(null);

    let content = null

    useEffect(() => {
        axios.get(url).then(response => {
            setProduct(response.data)
        })
    }, [url])

    if (product){
        content = 
        <div className="prod">
        <div className="prod-img">
            <img className="prod-img1" src={product.images} alt=''/>
        </div>
        <div className="prod-txt">
            <h3>{product.description1}</h3>
            <h4>${product.price}</h4>
            <div className="prod-txt2">
                <li>Item: <span style={{marginLeft: '10px'}}>{product.Item}</span></li>
                <li>Color: <span style={{marginLeft: '10px'}}>{product.color}</span></li>
            </div>
            <div className="prod-txt3">
                <p>
                {product.description2}
                </p>
            </div>
        <div className="add-minus">
            <button>-</button>
            <button style={{marginLeft: 'auto'}}>+</button>
        </div>
        
<button className="Bag2" onClick={() => addItem(product)}>{product.button}</button>
        </div>
    </div>
}

return(
    <div>
        {content}
    </div>
)
}   