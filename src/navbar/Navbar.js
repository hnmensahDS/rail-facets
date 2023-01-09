import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            side_menu: "",
        };
    }

    toggle_side_menu = () => {
        this.setState({
            side_menu: this.state.side_menu ? "" : " is-active",
        });
    };

    render() {
        return (
            <nav
                className="navbar"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <a className="navbar-item" rel="noreferrer" target="_blank" href="https://rail.knust.edu.gh/">
                        <img
                            src="icon-512.png"
                            alt="www.rail.knust.edu.gh"
                        />
                    </a>

                    <span
                        role="button"
                        className={
                            "navbar-burger burger" + this.state.side_menu
                        }
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="side-menu"
                        onClick={this.toggle_side_menu}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </span>
                </div>

                <div
                    id="side-menu"
                    className={"navbar-menu" + this.state.side_menu}
                >
                    <div className="navbar-start">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <span
                                className="navbar-link"
                                onClick={this.toggle_side_menu}
                            >
                                FACETS Responsible AI Framework
                            </span>

                            <div className="navbar-dropdown">
                                <Link
                                    className="navbar-item"
                                    to="/"
                                    onClick={this.toggle_side_menu}
                                >
                                    The Need for Responsible AI
                                </Link>
                                <Link
                                    className="navbar-item"
                                    to="/facets"
                                    onClick={this.toggle_side_menu}
                                >
                                    Calculate the FACETS Score
                                </Link>
                                <Link
                                    className="navbar-item"
                                    to="/glossary"
                                    onClick={this.toggle_side_menu}
                                >
                                    Glossary
                                </Link>
                                <Link
                                    className="navbar-item"
                                    to="/feedback"
                                    onClick={this.toggle_side_menu}
                                >
                                    Feedback
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
