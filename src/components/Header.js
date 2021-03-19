import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>E-Commerce</Navbar.Brand>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search Product"
            className="mr-sm-2"
            onChange={(e) => this.setState({ search: e.target.value })}
          />
          <Button
            variant="outline-info"
            onClick={() => this.props.handleSearch(this.state.search)}
          >
            Search
          </Button>
        </Form>
      </Navbar>
    );
  }
}

export default Header;
