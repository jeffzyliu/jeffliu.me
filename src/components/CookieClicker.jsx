import React, { Component } from "react";
import PlayButton from "./PlayButton";
import ShoppingItem from "./ShoppingItem";
import CookieCounter from "./CookieCounter";
import cookie from "../img/cookie.jpg";

class CookieClicker extends Component {
  state = {
    isPlaying: false,
    time: 0,
    start: 0,
    cookies: 0,
    clickers: 1,
    passives: 0,
    shoppingItems: [
      {
        id: 1,
        type: "Additional Freshman",
        cost: 10,
        desc: "additional cookie per click"
      },
      {
        id: 2,
        type: "Foco Factory",
        cost: 30,
        desc: "additional cookie per second"
      }
    ]
  };

  startPlay = () => {
    this.setState({
      isPlaying: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: (Date.now() - this.state.start) / 1000
        }),
      1000
    );
  };

  stopPlay = () => {
    this.setState({ isPlaying: false });
    clearInterval(this.timer);
  };

  handleCookieIncrement = () => {
    this.setState({ cookies: this.state.cookies + this.state.clickers });
  };

  handleBuy = key => {
    console.log(key);
    this.setState({
      cookies: this.state.cookies - this.state.shoppingItems[key - 1].cost
    });
    if (key === 1) {
      this.setState({ clickers: this.state.clickers + 1 });
    }
    if (key === 2) {
      this.setState({ passives: this.state.passives + 1 });
    }
    this.state.shoppingItems[key - 1].cost = Math.trunc(
      this.state.shoppingItems[key - 1].cost * 1.75
    );
  };

  render() {
    if (Math.trunc(this.state.time) >= 1) {
      this.setState({
        time: 0,
        cookies: this.state.cookies + this.state.passives
      });
    }
    let center = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };
    console.log(this.state.time);
    if (this.state.isPlaying) {
      return (
        <div className="card bg-light">
          <div className="card-body">
            <h2 style={center} className="card-title">
              Cookie Clicker!
            </h2>
            <div>
              <div style={center}>
                <PlayButton
                  onSwitch={this.stopPlay}
                  isPlaying={this.state.isPlaying}
                />
              </div>
              <div>
                <CookieCounter
                  cookies={this.state.cookies}
                  onCookieIncrement={this.handleCookieIncrement}
                />
              </div>
              <h3>Upgrades!</h3>
              {this.state.shoppingItems.map(item => (
                <ShoppingItem
                  shoppingItem={item}
                  key={item.id}
                  type={item.type}
                  cost={item.cost}
                  onBuy={this.handleBuy}
                  cookies={this.state.cookies}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card bg-light">
          <div className="card-body">
            <h2 style={center} className="card-title">
              Cookie Clicker!
            </h2>
            <div style={center}>
              <PlayButton
                onSwitch={this.startPlay}
                isPlaying={this.isPlaying}
              />
            </div>
            <div>
              <img class="img-fluid" src={cookie} alt="" />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CookieClicker;
