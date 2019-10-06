import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateSearchMode } from "../../ducks/searchEntity";
import { searchModes } from "../../config/routes";
import "./index.scss";

const { lessons, search, exams } = searchModes;

const tabs = [
    {
        mode: lessons,
        icon: "far fa-calendar-alt"
    },
    {
        mode: search,
        icon: "fas fa-search"
    },
    {
        mode: exams,
        icon: "fas fa-th-list"
    }
];

function MobileTabPanel({ searchMode, updateSearchMode }) {
    const activeTab = "is-active";

    return (
        <div className="mobile-tab-panel tabs is-fullwidth is-hidden-desktop">
            <ul>
                {tabs.map(({ mode, icon }, index) => {
                    return (
                        <li
                            key={index}
                            onClick={() => {
                                updateSearchMode(mode);
                            }}
                            className={searchMode === mode ? activeTab : ""}
                        >
                            <Link to={mode}>
                                <span className="icon">
                                    <i className={`${icon} fa-lg`} />
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    const { searchMode } = state.searchEntity;
    
    return {
        searchMode
    };
};

const mapDispatchToProps = {
    updateSearchMode
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MobileTabPanel);
