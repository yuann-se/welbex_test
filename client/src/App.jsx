import React, { useEffect, useState } from "react";
import "./index.css";
import { Header } from "./components/Header";
import { Pagination } from "./components/Pagination";
import { ProductsList } from "./components/ProductsList";

const baseURL = process.env.NODE_ENV === 'production' ? 'https://pern-test-task.herokuapp.com/products' : 'http://localhost:5000/products'

export const App = () => {

  const [data, setData] = useState([])
  const [dataToShow, setDataToShow] = useState([])
  const [selectedPage, setSelectedPage] = useState(1)
  const [sort, setSort] = useState('id')
  const [sortDirection, setSortDirection] = useState('ascending')
  const [filterField, setFilterField] = useState('filter')
  const [filterCondition, setFilterCondition] = useState('condition')
  const [filterString, setFilterString] = useState('')

  const rowsPerPage = 10

  const getData = async () => {
    try {
      const response = await fetch(baseURL);
      const jsonData = await response.json();
      jsonData.map(item => {
        return item.date = new Date(item.date).toLocaleDateString()
      })
      setData(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    let filteredData = [...data]
    if (filterString !== '' && filterField !== 'filter' && filterCondition !== 'condition') {
      switch (filterCondition) {
        case ('equals'): filteredData = filteredData.filter(item => item[filterField] === filterString)
          break
        case ('more'): filteredData = filteredData.filter(item => item[filterField] > filterString)
          break
        case ('less'): filteredData = filteredData.filter(item => item[filterField] < filterString)
          break
        default: filteredData = filteredData.filter(item => item[filterField].toString().includes(filterString))
      }
    }
    sortDirection === 'ascending'
      ? filteredData.sort((a, b) => a[sort] > b[sort] ? 1 : -1)
      : filteredData.sort((a, b) => a[sort] < b[sort] ? 1 : -1)

    setDataToShow(filteredData)

  }, [data, filterField, filterCondition, filterString, sort, sortDirection]);

  const getDataToShow = () => {
    const products = [...dataToShow]
    return products.splice((selectedPage - 1) * rowsPerPage, rowsPerPage)
  }

  return (
    <div className="container p-5">
      <Header
        filterField={filterField}
        filterCondition={filterCondition}
        filterString={filterString}
        onFilterChange={(value) => { setFilterField(value) }}
        onConditionChange={(value) => { setFilterCondition(value) }}
        onStringChange={(value) => { setFilterString(value) }}

      />
      <ProductsList
        products={getDataToShow()}
        handleClick={(sortParam, sortDir) => { setSort(sortParam); setSortDirection(sortDir) }}
        sortDirection={sortDirection}
        sort={sort}
      />
      <Pagination
        totalPages={Math.ceil(dataToShow.length / rowsPerPage)}
        activePage={selectedPage} handleClick={(page) => setSelectedPage(page)}
      />
    </div>
  );
}
