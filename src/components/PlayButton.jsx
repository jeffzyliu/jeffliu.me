import React, { Component } from "react";

class PlayButton extends Component {
  state = {
    isPlaying: false,
    classes: "btn m-2 btn-success"
  };

  render() {
    if (this.state.isPlaying !== this.props.isPlaying) {
      this.setState({
        isPlaying: this.props.isPlaying,
        classes: this.getButtonClasses()
      });
    }
    return (
      <button onClick={this.props.onSwitch} className={this.state.classes}>
        {this.props.isPlaying ? "Stop Game" : "Start Game"}
      </button>
    );
  }

  getButtonClasses = () => {
    let classes = "btn m-1 btn-";
    classes += this.props.isPlaying ? "danger" : "success";
    console.log(classes);
    return classes;
  };
}

export default PlayButton;
