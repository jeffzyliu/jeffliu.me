import React, { Component } from "react";

class CookieCounter extends Component {
  render() {
    return (
      <button
        className={"btn btn-primary btn-lg btn-dark"}
        onClick={this.props.onCookieIncrement}
      >
        {this.props.cookies}
      </button>
    );
  }
}

export default CookieCounter;
