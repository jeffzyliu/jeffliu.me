import React, { Component } from "react";
import PortfolioModal from "./PortfolioModal";
class ModalPanel extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <h1>React Modal</h1>
        <PortfolioModal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </PortfolioModal>
        <button onClick={this.showModal}>Open</button>
      </main>
    );
  }
}

export default ModalPanel;
