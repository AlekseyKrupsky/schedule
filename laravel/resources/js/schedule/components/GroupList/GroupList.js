import React, { Component } from "react";
import { connect } from "react-redux";
import { GroupListItem } from "../GroupListItem";
import { resetFilter } from "../../ducks/searchFilter";
import { updateSearchEntity } from "../../ducks/searchEntity";
import { readGroups } from "../../ducks/groups";
import { entities } from "../../config/routes";

class GroupList extends Component {
    componentDidMount() {
        this.props.updateSearchEntity(entities.groups);
        this.props.resetFilter();
        this.props.readGroups();
    }

    filterList() {
        const { searchFilter, groups } = this.props;

        return groups.items.filter(item => {
            return item.name.includes(searchFilter.toUpperCase());
        });
    }

    renderList(items) {
        return items.map((item, index) => {
            return <GroupListItem key={index} data={item} />;
        });
    }

    render() {
        const groups = this.filterList();

        return groups.length ? (
            <div className="group-list">{this.renderList(groups)}</div>
        ) : (
            <div>Empty</div>
        );
    }
}

const mapStateToProps = ({ searchFilter, groups }) => ({
    searchFilter,
    groups
});

const mapDispatchToProps = {
    resetFilter,
    updateSearchEntity,
    readGroups
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupList);
