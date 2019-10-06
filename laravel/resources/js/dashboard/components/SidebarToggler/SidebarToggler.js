import React from 'react';
import { connect } from "react-redux";
import { toggleSidebar } from "../../ducks/sidebar";

const SidebarToggler = (props) => {
    const { toggleSidebar } = props;

    return (
        <div
            className="text-center d-none d-md-inline"
            onClick={toggleSidebar}
        >
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
    )
}

const mapDispatchToProps = {
    toggleSidebar,
};

export default connect(
    null,
    mapDispatchToProps,
)(SidebarToggler);