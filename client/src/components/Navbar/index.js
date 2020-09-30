import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./style.css";

class Nav extends Component {

    renderButtons = () => {
            return (
                <div className="login">
                    <NavLink to="/login"
                        className={window.location.pathname === "/login" ? "active nav-login" : "nav-login"}
                        activeStyle={{ color: "white" }}
                        style={{ color: "white", textDecoration: "none" }}
                        onClick={this.handleChange}
                    >
                        Login
          </NavLink>
                </div>
            )
    };

    render() {
        return (
            <>
                <Navbar className="desktop-navbar">
                    <div className="container-fluid nav-box">
                        <div className="navbar-header">
                            <NavLink to="/"
                                className="navbar-brand"
                                activeStyle={{ color: "white" }}
                            >
                                Rockfish Conservation</NavLink>
                        </div>
                        <ul className="nav nav-tabs mr-auto">
                            <li className="nav-item nav-link">
                                <NavLink to="/species"
                                    className={window.location.pathname === "/species" ? "active" : ""}
                                    activeStyle={{ color: "white" }}
                                    style={{ color: "white" }}
                                >
                                    Species Identification</NavLink>
                            </li>
                            <li className="nav-item nav-link">
                                <NavLink to="/creel"
                                    className={window.location.pathname === "/creel" ? "active" : ""}
                                    activeStyle={{ color: "white" }}
                                    style={{ color: "white" }}
                                >
                                    Creel</NavLink>
                            </li>
                            <li className="nav-item nav-link">
                                <NavLink to="/fishing"
                                    className={window.location.pathname === "/fishing" ? "active" : ""}
                                    activeStyle={{ color: "white" }}
                                    style={{ color: "white" }}
                                >
                                    Fishing</NavLink>
                            </li>
                        </ul>
                        <div className="activeButton">{this.renderButtons()}</div>
                    </div>
                </Navbar>
            </>
        )
    }
}

export default Nav;