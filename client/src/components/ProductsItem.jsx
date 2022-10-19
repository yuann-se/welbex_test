import React from "react";

export const ProductsItem = ({ product }) => {

    const getDate = () => {
        const d = new Date(product.date)
        return d.toLocaleDateString()
    }

    return (
        <tr>
            <td>{product.id - 1}</td>
            <td>{getDate()}</td>
            <td>{product.title}</td>
            <td>{product.amount}</td>
            <td>{product.distance}</td>
        </tr>
    )
}