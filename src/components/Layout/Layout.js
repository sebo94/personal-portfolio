import React, { Component, Fragment } from "react";

class Layout extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        {/* SOME NAVIGATION PROBABLY */}
        <main>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;