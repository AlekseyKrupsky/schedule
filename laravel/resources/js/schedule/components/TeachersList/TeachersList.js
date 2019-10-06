import React, { Component } from "react";
import { connect } from "react-redux";
import { TeacherListItem } from "../TeacherListItem";
import { resetFilter } from "../../ducks/searchFilter";
import { updateSearchEntity } from "../../ducks/searchEntity";
import { readTeachers } from "../../ducks/teachers";
import { entities } from "../../config/routes";
import "./index.scss";

export class TeachersList extends Component {
    componentDidMount() {
        this.props.updateSearchEntity(entities.teachers);
        this.props.resetFilter();
        this.props.readTeachers();
    }

    filterList() {
        const { teachers, searchFilter } = this.props;
        
        return teachers.items.filter(({ name }) => {
            return name.includes(searchFilter.toUpperCase());
        });
    }

    renderList(items) {
        return items.map((item, index) => {
            return <TeacherListItem key={index} data={item} />;
        });
    }

    render() {
        const teachers = this.filterList();

        return teachers.length ? (
            <div className="teachers-list">{this.renderList(teachers)}</div>
        ) : (
            <div>Empty</div>
        );
    }
}

const mapStateToProps = ({ searchFilter, teachers }) => ({
    searchFilter,
    teachers
});

const mapDispatchToProps = {
    resetFilter,
    updateSearchEntity,
    readTeachers
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TeachersList);
