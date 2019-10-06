import React, { Component } from "react";
import { connect } from "react-redux";
import { readTeachers } from "../../../ducks/teachers";
import TeachersTableHeader from "./TeachersTableHeader";
import TeacherTableRow from "./TeacherTableRow";

export class TeachersTable extends Component {
    componentDidMount() {
        this.props.readTeachers();
    }

    renderRows() {
        const { items } = this.props;
        return items.map(item => {
            return <TeacherTableRow key={item.id} data={item} />;
        });
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    <TeachersTableHeader />
                    <tbody>{this.renderRows()}</tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.teachers.items
});

const mapDispatchToProps = {
    readTeachers
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TeachersTable);
