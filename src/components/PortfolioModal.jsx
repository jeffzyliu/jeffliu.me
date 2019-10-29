import React, { Component } from "react";

class PortfolioModal extends Component {
  render() {
    const { handleClose, show, children } = this.props;
    console.log(this.props);
    const showHideClassName = show
      ? "modal display-block"
      : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>Close</button>
        </section>
      </div>
    );
  }
}

export default PortfolioModal;
