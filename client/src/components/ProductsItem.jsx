import React from "react";

export const ProductsItem = ({ product }) => {

    return (
        <tr>
            <td>{product.date}</td>
            <td>{product.title}</td>
            <td>{product.amount}</td>
            <td>{product.distance}</td>
        </tr>
    )
}