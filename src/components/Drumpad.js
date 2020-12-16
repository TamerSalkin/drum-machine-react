import React, { Component } from "react";

class DrumPad extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress = (e) => {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  };
  playSound = () => {
    if (this.props.power) {
      const sound = document.getElementById(this.props.keyCode);
      sound.currentTime = 0;
      sound.play();
      sound.volume = this.props.volume;
      this.props.updateDisplay(this.props.id.replace(/-/g, " "));
    }
  };
  render() {
    return (
      <div onClick={this.playSound} className="drum-pad">
        <audio
          className="clip"
          id={this.props.keyCode}
          src={this.props.url}
        ></audio>
        {this.props.keyTrigger}
      </div>
    );
  }
}

export default DrumPad;
