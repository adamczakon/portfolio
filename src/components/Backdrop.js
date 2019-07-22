import React, { Component } from "react";

export default class Backdrop extends Component {
  render() {
    let menuClasses = "backdrop";
    if (this.props.show) {
      menuClasses = "backdrop open";
    }
    return <div className={menuClasses} onClick={this.props.toggle} />;
  }
}
