import React, { useEffect, useState } from "react";
import "./App.css";
import { Pagination } from "./components/Pagination";
import { ProductsList } from "./components/ProductsList";

const PORT = process.env.PORT | 5000

function App() {

  const [data, setData] = useState([])
  const [selectedPage, setSelectedPage] = useState(1)
  const [sort, setSort] = useState('id')
  const [sortDirection, setSortDirection] = useState('ascending')

  const rowsPerPage = 10

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:${PORT}/products`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const sortData = (arr) => {
    sortDirection === 'ascending'
      ? arr.sort((a, b) => a[sort] > b[sort] ? 1 : -1)
      : arr.sort((a, b) => a[sort] < b[sort] ? 1 : -1)
  }

  const dataToShow = () => {
    const products = [...data]
    sortData(products)
    return products.splice((selectedPage - 1) * rowsPerPage, rowsPerPage)
  }

  return (
    <div className="container">
      <ProductsList
        products={dataToShow()}
        handleClick={(sortParam, sortDir) => { setSort(sortParam); setSortDirection(sortDir) }}
        sortDirection={sortDirection}
        sort={sort}
      />
      <Pagination
        totalPages={Math.ceil(data.length / rowsPerPage)}
        activePage={selectedPage} handleClick={(page) => setSelectedPage(page)}
      />
    </div>
  );
}

export default App;
