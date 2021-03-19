import React from "react";

function Filter(props) {
  //   console.log(props.handleChangeCateg);
  return (
    <div className="filter">
      <h1>Filters</h1>
      <hr />
      <h1>Category</h1>
      <select onChange={(e) => props.handleChangeCateg(e.target.value)}>
        <option value="">None</option>
        <option value="mens">Mens</option>
        <option value="womens">Womens</option>
        <option value="kids">Kids</option>
        <option value="electronics">Electronics</option>
      </select>
      <h1>Price</h1>
      <select onChange={(e) => props.handlePrice(e.target.value)}>
        <option value="">None</option>
        <option value="asc">lower to higher</option>
        <option value="des">higher to lower</option>
      </select>
      <h1>Brand</h1>
      <select onChange={(e) => props.handleBrandChange(e.target.value)}>
        <option value="">None</option>
        <option value="nike">Nike</option>
        <option value="levis">Levis</option>
        <option value="lee">Lee</option>
        <option value="boat">Boat</option>
        <option value="samsung">Samsung</option>
        <option value="acer">Acer</option>
      </select>
      <h1>Color</h1>
      <select onChange={(e) => props.handleChangeColor(e.target.value)}>
        <option value="">None</option>
        <option value="red">Red</option>
        <option value="white">White</option>
        <option value="black">Black</option>
        <option value="blue">Blue</option>
        <option value="pink">Pink</option>
        <option value="orange">Orange</option>
      </select>
      <h1
        onClick={() => props.clearFilter()}
        style={{ color: "blue", cursor: "pointer" }}
      >
        Clear
      </h1>
    </div>
  );
}

export default Filter;
