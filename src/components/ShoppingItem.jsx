import React, { Component } from "react";

class ShoppingItem extends Component {
  render() {
    const { onBuy, cookies, cost, type, desc, shoppingItem } = this.props;
    return (
      <React.Fragment>
        <div>
          <h5>{type}</h5>
          <p>Get an {desc}!</p>
        </div>
        <div>
          <button
            onClick={cost <= cookies ? () => onBuy(shoppingItem.id) : undefined}
            className="btn btn-primary btn-small"
          >
            Costs {cost} cookies!
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default ShoppingItem;
