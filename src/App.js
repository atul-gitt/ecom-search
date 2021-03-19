import React from "react";
import ProductList from "./components/ProductList";
import { dummyProducts } from "./assets/fakeProducts";
import Header from "./components/Header";
import Filter from "./components/Filter";
import "./index.css";

class App extends React.Component {
  state = {
    products: [],
  };
  componentDidMount() {
    this.setState({ products: dummyProducts });
  }
  handleChangeCateg = (cat) => {
    if (cat == "") {
      this.setState({ products: dummyProducts });
      return;
    }
    let updatedProds = dummyProducts.filter(
      (product) => product.category == cat
    );
    this.setState({ products: updatedProds });
  };
  handleChangeColor = (color) => {
    if (color) {
      let updatedProds = this.state.products.filter(
        (product) => product.color === color
      );
      this.setState({ products: updatedProds });
    }
  };
  handlePriceSort = (sort) => {
    let compare = null;
    if (sort === "asc") {
      compare = (a, b) => {
        if (a.price > b.price) return 0;
        else return -1;
      };
    } else {
      compare = (a, b) => {
        if (a.price > b.price) return -1;
        else return 0;
      };
    }
    let updatedProds = this.state.products.sort(compare);
    this.setState({ products: updatedProds });
  };
  handleBrandChange = (brand) => {
    if (brand) {
      let updatedProds = this.state.products.filter(
        (product) => product.brand === brand
      );
      this.setState({ products: updatedProds });
    }
  };
  handleSearch = (text) => {
    console.log(text);
    if (text) {
      let searchProd = dummyProducts.filter(
        (product) =>
          product.title.toLocaleLowerCase().search(text.toLocaleLowerCase()) !==
          -1
      );
      this.setState({ products: searchProd });
    }
  };
  clearFilter = () => {
    this.setState({ products: dummyProducts });
  };
  render() {
    return (
      <React.Fragment>
        <Header handleSearch={this.handleSearch} />
        <div className="container">
          <Filter
            handleChangeCateg={this.handleChangeCateg}
            handleChangeColor={this.handleChangeColor}
            handleBrandChange={this.handleBrandChange}
            handlePrice={this.handlePriceSort}
            clearFilter={this.clearFilter}
          />
          <ProductList products={this.state.products} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
