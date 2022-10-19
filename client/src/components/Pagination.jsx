import React from "react";

export const Pagination = ({ totalPages, activePage, handleClick }) => {

    const paginationBtns = () => {
        const arr = []
        for (let i = 0; i < totalPages; ++i) {
            arr.push(
                <li className={`page-item ${activePage === i + 1 ? 'active' : ''}`} key={i}>
                    <a className="page-link" href='##' onClick={() => handleClick(i + 1)} >{i + 1}</a>
                </li>)
        }
        return arr
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {paginationBtns()}
            </ul>
        </nav>
    )
}