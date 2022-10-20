import React from "react";

const filterFieldsArr = [
    { fName: 'Дата', fValue: "date" },
    { fName: 'Название', fValue: "title" },
    { fName: 'Количество', fValue: "amount" },
    { fName: 'Расстояние', fValue: "distance" },
]

const filterConditionsArr = [
    { fName: 'Равно', fValue: "equals" },
    { fName: 'Содержит', fValue: "contains" },
    { fName: 'Больше', fValue: "more" },
    { fName: 'Меньше', fValue: "less" },
]

export const Header = ({ filterField, filterCondition, filterString, onFilterChange, onConditionChange, onStringChange }) => {

    return (
        <header className="d-flex mb-5">
            <div className="input-group mr-5">
                <select className="custom-select" value={filterField} onChange={(e) => onFilterChange(e.target.value)}>
                    <option disabled value={'filter'}>Фильтр</option>
                    {filterFieldsArr.map((item) =>
                        <option value={item.fValue} key={item.fValue}>{item.fName}</option>)}
                </select>
            </div>

            <div className="input-group mr-5">
                <select className="custom-select" value={filterCondition} onChange={(e) => onConditionChange(e.target.value)}>
                    <option disabled value={'condition'}>Условие</option>
                    {filterConditionsArr.map((item) =>
                        <option value={item.fValue} key={item.fValue}>{item.fName}</option>)}
                </select>
            </div>

            <div className="input-group">
                <input
                    className="form-control"
                    value={filterString}
                    placeholder="Значение для фильтрации"
                    onChange={(e) => onStringChange(e.target.value.trim())}
                />
            </div>
        </header>
    )
}