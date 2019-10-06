import React from 'react';
import { connect } from "react-redux";
import { toggleSidebar } from "../../ducks/sidebar";

const SidebarTogglerTop = (props) => {
    const { toggleSidebar } = props;
    return (
        <button 
            id="sidebarToggleTop" 
            className="btn btn-link d-md-none rounded-circle mr-3"
            onClick={toggleSidebar}
        >
            <i className="fa fa-bars"></i>
        </button>
    )
}

const mapDispatchToProps = {
    toggleSidebar,
};

export default connect(
    null,
    mapDispatchToProps,
)(SidebarTogglerTop);

