import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
      </div>
    );
  }
}
