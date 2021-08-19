/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { Component } from 'react';

class AutoScalingText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 1,
    };
  }

  componentDidUpdate() {
    const { scale } = this.state;

    const { node } = this;
    const { parentNode } = node;

    const availableWidth = parentNode.offsetWidth;
    const actualWidth = node.offsetWidth;
    const actualScale = availableWidth / actualWidth;

    if (scale === actualScale) return;

    if (actualScale < 1) {
      this.scale().setState({ scale: actualScale });
    } else if (scale < 1) {
      this.scale().setState({ scale: 1 });
    }
  }

  scale() {
    return this;
  }

  render() {
    const { scale } = this.state;

    return (
      <div
        className="auto-scaling-text"
        style={{ transform: `scale(${scale},${scale})` }}
        ref={(node) => { this.node = node; }}
      >
        { this.props.children }
      </div>
    );
  }
}

export default AutoScalingText;
