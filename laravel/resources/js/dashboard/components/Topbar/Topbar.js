import React from 'react';
import SidebarTogglerTop from "./SidebarTogglerTop";
import TopbarDivider from "./TopbarDivider";
import TopbarUserInfo from './TopbarUserInfo';

export default function Topbar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar static-top shadow">
            <SidebarTogglerTop />
            <ul className="navbar-nav ml-auto">
            <li className="nav-item" ><h5>2 Study week</h5></li>
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-bell fa-fw"></i>
                        <span className="badge badge-danger badge-counter">3+</span>
                    </a>
                </li>

                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-envelope fa-fw"></i>
                        <span className="badge badge-danger badge-counter">7</span>
                    </a>
                </li>

                <TopbarDivider />
                <TopbarUserInfo />
            </ul>
        </nav>
    )
}
