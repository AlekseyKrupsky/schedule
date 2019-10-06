import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "../Header";
import { Dashboard } from "../Dashboard";
import { Home } from "../../pages/Home";
import { Groups } from "../../pages/Groups";
import { About } from "../../pages/About";
import { NotFound } from "../../pages/NotFound";
import { DayList } from "../DayList";

class Main extends Component {
    render() {
        return (
            <div id="wrapper">
                <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div class="sidebar-brand-icon rotate-n-15">
                            <i class="fas fa-laugh-wink"></i>
                        </div>
                        <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                    </a>

                    <hr class="sidebar-divider my-0" />

                    <li class="nav-item active">
                        <a class="nav-link" href="index.html">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Main;
