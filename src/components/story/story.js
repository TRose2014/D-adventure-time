import React from "react";

class Story extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.paragraph1}</p>
        <p>{this.props.paragraph2}</p>
      </div>
    );
  }
}

export default Story;
