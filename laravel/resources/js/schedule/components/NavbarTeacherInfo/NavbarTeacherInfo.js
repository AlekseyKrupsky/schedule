import React from "react";
import { connect } from "react-redux";

const NavbarTeacherInfo = ({ schedule, selectedWeek }) => {
    const { isLoading, teacher } = schedule;
console.log(teacher);

    return (
        <div className="entity-info">
            {teacher ? (
                <h4 className="entity-name has-text-black">{teacher.name}</h4>
            ) : isLoading ? (
                "loading"
            ) : (
                <h4 className="entity-name has-text-black">Пусто :(</h4>
            )}
            <span>{selectedWeek}-я учебная неделя</span>
        </div>
    );
};

const mapStateToProps = state => {
    const { weekInfo, teacherSchedule } = state;
    const { selectedWeek } = weekInfo;

    return {
        schedule: teacherSchedule,
        selectedWeek
    };
};

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarTeacherInfo);
