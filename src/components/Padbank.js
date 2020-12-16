import React, { Component } from "react";
import DrumPad from "./Drumpad";

class PadBank extends Component {
  render() {
    return (
      <div className="pad-bank">
        {this.props.currentPadBank.map((x) => {
          return (
            <DrumPad
              keyCode={x.keyCode}
              keyTrigger={x.keyTrigger}
              id={x.id}
              url={x.url}
              power={this.props.power}
              updateDisplay={this.props.updateDisplay}
              volume={this.props.volume}
            />
          );
        })}
      </div>
    );
  }
}

export default PadBank;
