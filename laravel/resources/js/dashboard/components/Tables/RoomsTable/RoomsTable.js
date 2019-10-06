import React, { Component } from "react";
import { connect } from "react-redux";
import { readRooms } from "../../../ducks/rooms";
import RoomsTableHeader from "./RoomsTableHeader";
import RoomsTableRow from "./RoomsTableRow";

export class RoomsTable extends Component {
    componentDidMount() {
        this.props.readRooms();
    }

    renderRows() {
        const { items } = this.props;
        return items.map(item => {
            return <RoomsTableRow key={item.id} data={item} />;
        });
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    <RoomsTableHeader />
                    <tbody>{this.renderRows()}</tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.rooms.items
});

const mapDispatchToProps = {
    readRooms
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoomsTable);
