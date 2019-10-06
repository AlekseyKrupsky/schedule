import React, { Component } from "react";
import { connect } from "react-redux";
import { readGroups } from "../../../ducks/groups";
import GroupTableHeader from "./GroupTableHeader";
import GroupTableRow from "./GroupTableRow";

export class GroupsTable extends Component {
    componentDidMount() {
        this.props.readGroups();
    }

    renderRows() {
        const { items } = this.props;
        return items.map(item => {
            return <GroupTableRow key={item.id} data={item} />;
        });
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    <GroupTableHeader />
                    <tbody>{this.renderRows()}</tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.groups.items
});

const mapDispatchToProps = {
    readGroups
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupsTable);
