import React from "react";

function Treasure() {
  this.state = {
    text: "",
    treasure: "",
    onChange: this.onChange
  };

  switch (this.state.treasure) {
    case "go for it":
      this.setState({
        text: "you walk 10 miles to look for treasure"
      });
      break;
    case "nah":
      this.setState({
        text: "you go home and go to sleep"
      });
      break;
    default:
      this.setState({
        text: ""
      });
  }

  onChange = () => {};
  return (
    <>
      {/* onchange for buttons that update the state.treasure to what was selected */}
      <button>go for it</button>
      <button>nah</button>
      <p>{this.state.text}</p>
    </>
  );
}
