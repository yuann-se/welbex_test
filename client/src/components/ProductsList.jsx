import React, { Fragment } from "react";
import { ArrowIcon } from "./icons/ArrowIcon";
import { ProductsItem } from "./ProductsItem";

export const ProductsList = ({ products, handleClick, sort, sortDirection }) => {

  const sortingFieldsData = [
    { fieldName: 'Название', fieldTitle: 'title' },
    { fieldName: 'Количество', fieldTitle: 'amount' },
    { fieldName: 'Расстояние', fieldTitle: 'distance' }
  ]

  return (
    <Fragment>
      <table className="table table-hover mt-5 text-center">
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

          {products.map(item => <ProductsItem product={item} key={item.id} />)}

        </tbody>
      </table>
    </Fragment>
  );
};
