import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default class Header extends Component {
    render() {
        return (
            <nav class="header navbar has-shadow is-spaced">
                <div className="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/schedule">
                            <img
                                src="https://bulma.io/images/bulma-logo.png"
                                alt="Bulma: a modern CSS framework based on Flexbox"
                                width="112"
                                height="28"
                            />
                        </a>
                        <div
                            class="navbar-burger burger"
                            data-target="navbarExampleTransparentExample"
                        >
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>

                    <div
                        id="navbarExampleTransparentExample"
                        class="navbar-menu"
                    >
                        <div class="navbar-start">
                            <Link
                                class="navbar-item is-active"
                                to={"/schedule/groups"}
                            >
                                <span>
                                    <i
                                        class="fas fa-users"
                                        aria-hidden="true"
                                    />{" "}
                                    Groups
                                </span>
                            </Link>
                            <Link class="navbar-item" to={"/schedule/teachers"}>
                                <span>
                                    <i
                                        class="fas fa-chalkboard-teacher"
                                        aria-hidden="true"
                                    />{" "}
                                    Teachers
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
