import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SidebarDropdown } from "../SidebarDropdown";
import { Nav } from "react-bootstrap";

export default class SidebarItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: false
        };

        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown() {
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }));
    }

    render() {
        const { toggle } = this.state;
        const { value, dropdownTitle, link, items, iconClassName } = this.props;
        const itemLink = link ? link : "#";

        return (
            <Nav.Item as="li" onClick={this.toggleDropdown}>
                <Link to={itemLink} className="nav-link">
                    <i className={iconClassName} />
                    <span>{value}</span>
                </Link>
                {items ? (
                    <SidebarDropdown
                        headerText={dropdownTitle}
                        items={items}
                        isOpen={toggle}
                    />
                ) : (
                    ""
                )}
            </Nav.Item>
        );
    }
}
