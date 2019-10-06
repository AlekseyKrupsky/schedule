import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Divider } from "../Divider";
import { SidebarBrand } from "../SidebarBrand";
import { SidebarHeading } from "../SidebarHeading";
import { SidebarToggler } from "../SidebarToggler";
import { SidebarItem } from "../SidebarItem";

const DashboardSidebar = props => {
    const { sidebar } = props;
    let toggleStyle = "";

    if (!sidebar.isOpen) {
        toggleStyle = " toggled";
    }

    return (
        <Nav
            defaultActiveKey="/home"
            as="ul"
            className={
                "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" +
                toggleStyle
            }
        >
            <SidebarBrand />
            <Divider className="my-0" />
            <SidebarItem
                value={"Dashboard"}
                link={"/"}
                iconClassName={"fas fa-fw fa-tachometer-alt"}
            />
            <Divider className="my-0" />
            <SidebarItem
                value={"Schedule"}
                dropdownTitle={"Info"}
                items={[
                    {
                        value: "Lessons",
                        link: "lessons"
                    },
                    {
                        value: "Subjects",
                        link: "subjects"
                    },
                    {
                        value: "Lesson types",
                        link: "lessonTypes"
                    },
                    {
                        value: "Rooms",
                        link: "rooms"
                    }
                ]}
                iconClassName={"far fa-calendar-alt ml-1"}
            />
            <Divider className="my-0" />
            <SidebarItem
                value={"Group info"}
                dropdownTitle={"Info"}
                items={[
                    {
                        value: "Groups",
                        link: "groups"
                    },
                    {
                        value: "Faculties",
                        link: "faculties"
                    },
                    {
                        value: "Streams",
                        link: "streams"
                    }
                ]}
                iconClassName={"fas fa-fw fa-users"}
            />
            <Divider />
            <SidebarItem
                value={"Teachers"}
                link={"/teachers"}
                iconClassName={"fas fa-fw fa-tachometer-alt"}
            />

            <SidebarToggler />
        </Nav>
    );
};

const mapStateToProps = state => {
    const { sidebar } = state;

    return {
        sidebar
    };
};

export default connect(
    mapStateToProps,
    null
)(DashboardSidebar);
