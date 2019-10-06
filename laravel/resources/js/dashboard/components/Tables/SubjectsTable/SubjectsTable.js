import React, { Component } from "react";
import { connect } from "react-redux";
import { readSubjects } from "../../../ducks/subjects";
import SubjectsTableHeader from "./SubjectsTableHeader";
import SubjectTableRow from "./SubjectTableRow";

export class SubjectsTable extends Component {
    componentDidMount() {
        this.props.readSubjects();
    }

    renderRows() {
        const { items } = this.props;
        return items.map(item => {
            return <SubjectTableRow key={item.id} data={item} />;
        });
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    <SubjectsTableHeader />
                    <tbody>{this.renderRows()}</tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.subjects.items
});

const mapDispatchToProps = {
    readSubjects
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubjectsTable);
