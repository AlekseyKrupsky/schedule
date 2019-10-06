import React, { Component } from "react";
import { connect } from "react-redux";
import { readFaculties } from "../../../ducks/faculties";
import FacultiesTableHeader from "./FacultiesTableHeader";
import FacultyTableRow from "./FacultyTableRow";

export class FacultiesTable extends Component {
    componentDidMount() {
        this.props.readFaculties();
    }

    renderRows() {
        const { items } = this.props;
        return items.map(item => {
            return <FacultyTableRow key={item.id} data={item} />;
        });
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    <FacultiesTableHeader />
                    <tbody>{this.renderRows()}</tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.faculties.items
});

const mapDispatchToProps = {
    readFaculties
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FacultiesTable);
