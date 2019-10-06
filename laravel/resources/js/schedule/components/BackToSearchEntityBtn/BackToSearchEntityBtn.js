import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { home } from "../../config/routes";

function BackToSearchEntityBtn({ entity }) {
    const searchRoute = `${home}/${entity}`;

    return (
        <Link to={searchRoute}>
            back
            <i className="fas fa-arrow-left fa-lg has-text-grey" />
        </Link>
    );
}

const mapStateToProps = state => ({
    entity: state.searchEntity.entity
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BackToSearchEntityBtn);
