import React from "react";

export const ProductsItem = ({ product, index }) => {

    return (
        <tr>
            <td>{index}</td>
            <td>{product.date}</td>
            <td>{product.title}</td>
            <td>{product.amount}</td>
            <td>{product.distance}</td>
        </tr>
    )
}