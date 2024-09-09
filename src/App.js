import React, { useState } from "react";
import "./App.css"
import { data } from "./data";

const initialData = data;

function App() {
  const [data, setData] = useState(initialData);
  const [filters, setFilters] = useState({
    category: [],
    subCategory: [],
    month: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => {
      if (name === "category" || name === "subCategory") {
        const values = Array.from(
          e.target.selectedOptions,
          (option) => option.value
        );
        return { ...prevFilters, [name]: values };
      } else {
        return { ...prevFilters, [name]: value };
      }
    });
  };

  const filteredData = data.filter((item) => {
    const monthMatches =
      !filters.month || item.date.startsWith(filters.month);
    const categoryMatches =
      filters.category.length === 0 || filters.category.includes(item.category);
    const subCategoryMatches =
      filters.subCategory.length === 0 ||
      filters.subCategory.includes(item.subCategory);
    return monthMatches && categoryMatches && subCategoryMatches;
  });

  const totalCost = filteredData.reduce((acc, item) => acc + item.cost, 0);

  return (
    <div className="App">
      <h1>Costing Data</h1>

      <div className="filters">
        <select
          name="category"
          multiple
          onChange={handleFilterChange}
          value={filters.category}
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Civil">Civil</option>
          <option value="Electrical">Electrical</option>
          <option value="Pipeline">Pipeline</option>
          <option value="Interior">Interior</option>
          <option value="Grill">Grill</option>
          <option value="Furniture">Furniture</option>
          <option value="Tiles">Tiles</option>
          <option value="Transport">Transport</option>
          <option value="Color">Color</option>
        </select>

        <select
          name="subCategory"
          multiple
          onChange={handleFilterChange}
          value={filters.subCategory}
        >
          <option value="" disabled>
            Select Sub-Category
          </option>
          <option value="Labour">Labour</option>
          <option value="Raw Material">Raw Material</option>
        </select>

        <input
          type="month"
          name="month"
          value={filters.month}
          multiple
          onChange={handleFilterChange}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.name}</td>
              <td>{item.cost}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Total Cost</td>
            <td>{totalCost}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
