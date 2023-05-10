import React from "react";
import { useCart } from "react-use-cart";

export default function Bag(){
    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
     } = useCart();

     if (isEmpty) return <h1>Your Cart is Empty</h1>

    return(
        <section className="py-4 container">
            <div className="row justify-content-center">
        <div className="col-12">
            <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
            <table className="table table-light table-hover m-0">
                <tbody>
                {items.map(function (item, index) {
                    return (
                        <tr>
                            <td>
                                <img src={item.images} style={{ height: '6rem' }} alt='' />
                            </td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>Quantity ({item.quantity})</td>
                            <td>
                                <button className="btn btn-info ms-2"
                                onClick={function () {
                                    return updateItemQuantity(item.id, item.quantity - 1);
                                }}
                                >-</button>

                                <button className="btn btn-info ms-2"
                                onClick={function () {
                                    return updateItemQuantity(item.id, item.quantity + 1);
                                }}
                                >+</button>

                                <button className="btn btn-danger ms-2"
                                onClick={function (){
                                    return removeItem(item.id);
                                }}
                                >Remove Item</button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
        <div className="col-auto ms-auto">
            <h2>Total Price: ${cartTotal}</h2>
        </div>
        <div className="col-auto">
            <button className="btn btn-danger m-2" onClick={() => emptyCart()}>Clear Cart</button>
        </div>
        </div>
        </section>
    )
}