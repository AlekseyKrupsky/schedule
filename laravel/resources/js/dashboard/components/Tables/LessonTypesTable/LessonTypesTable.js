import React, { Component } from "react";
import { connect } from "react-redux";
import { readLessonTypes } from "../../../ducks/lessonTypes";
import LessonTypesTableHeader from "./LessonTypesTableHeader";
import LessonTypeTableRow from "./LessonTypeTableRow";

export class LessonTypesTable extends Component {
    componentDidMount() {
        this.props.readLessonTypes();
    }

    renderRows() {
        const { items } = this.props;
        return items.map(item => {
            return <LessonTypeTableRow key={item.id} data={item} />;
        });
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    <LessonTypesTableHeader />
                    <tbody>{this.renderRows()}</tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.lessonTypes.items
});

const mapDispatchToProps = {
    readLessonTypes
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LessonTypesTable);
