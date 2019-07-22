import React, { Component } from "react";
import MenuButton from "./MenuButton";
import SideMenu from "./SideMenu";
import Backdrop from "./Backdrop";
export default class AppNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      scroll: 0
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleScroll() {
    this.setState({
      scroll: window.scrollY
    });
  }

  toggle() {
    this.setState(prevState => {
      return {
        menuOpen: !prevState.menuOpen
      };
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    let className = "navbar";
    this.state.scroll > 650 ? (className += " fixed") : (className = "navbar");
    return (
      <React.Fragment>
        <SideMenu show={this.state.menuOpen} toggle={this.toggle} />
        <div className={className}>
          <h2
            className={
              this.state.scroll < 650 ? `navbar__title hidden` : `navbar__title`
            }
          >
            {" "}
            Adam Czakon{" "}
          </h2>
          <ul className='navbar__list'>
            <li>
              <a
                href='#home'
                className={
                  this.state.scroll < 650 ? "button active" : "button inactive"
                }
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#projects'
                className={
                  this.state.scroll > 690 && this.state.scroll < 3500
                    ? "button active"
                    : "button inactive"
                }
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='#about'
                className={
                  this.state.scroll >= 3500
                    ? "button active"
                    : "button inactive"
                }
              >
                About
              </a>
            </li>
          </ul>
        </div>
        <MenuButton toggle={this.toggle} />
        <Backdrop show={this.state.menuOpen} toggle={this.toggle} />
      </React.Fragment>
    );
  }
}
