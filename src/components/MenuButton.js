import React, { Component } from "react";

export default class MenuButton extends Component {
  render() {
    return (
      <div className="menu-btn" onClick={this.props.toggle}>
        <div className="btn-line" />
        <div className="btn-line" />
        <div className="btn-line" />
      </div>
    );
  }
}
