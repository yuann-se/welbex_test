import React from "react";
import { ArrowIcon } from "./icons/ArrowIcon";
import { ProductsItem } from "./ProductsItem";

export const ProductsList = ({ products, handleClick, sort, sortDirection }) => {

  const sortingFieldsData = [
    { fieldName: 'Название', fieldTitle: 'title' },
    { fieldName: 'Количество', fieldTitle: 'amount' },
    { fieldName: 'Расстояние', fieldTitle: 'distance' }
  ]

  return (
    <table className="table table-hover text-center mb-5">
      <thead className="thead-dark">
        <tr>
          <th>#</th>
          <th>Дата</th>

          {sortingFieldsData.map(field =>
            <th className={`tableSortField ${sortDirection === 'ascending' && sort === field.fieldTitle ? 'up' : ''}`} key={field.fieldName}>
              <button onClick={() => handleClick(field.fieldTitle, sortDirection === 'ascending' ? 'descending' : 'ascending')}>
                <span className="m-2">{field.fieldName}</span>
                <ArrowIcon />
              </button>
            </th>)}

        </tr>
      </thead>
      <tbody>

        {products.map((item, ind) => <ProductsItem product={item} key={item.id} index={ind + 1} />)}

      </tbody>
    </table>
  );
};
