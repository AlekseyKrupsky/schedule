import React, { Component } from "react";
import { connect } from "react-redux";
import { readLessons } from "../../ducks/teacherSchedule";
import { DayItem } from "../Schedule/DayItem";
//import { Loader } from "../Loader";
import "./index.scss";

export class TeacherLessons extends Component {
    componentDidMount() {
        const teacherId = this.props.match.params["id"];
        const { currentWeek } = this.props;

        this.props.readLessons(teacherId, currentWeek);
    }

    renderItemList() {
        const { teacherSchedule, selectedWeek, selectedSubgroup } = this.props;

        if (!teacherSchedule.teacher) {
            return;
        }

        const weekKey = `week_${selectedWeek}`;

        const week = teacherSchedule.schedule[weekKey];
        const dayList = [];

        for (let dayNumber = 1; dayNumber <= 7; dayNumber++) {
            const dayKey = `day_${dayNumber}`;
            const day = week[dayKey];

            if (!day) {
                continue;
            }

            const { date, lessons } = day;

            dayList.push(
                <DayItem
                    key={dayNumber}
                    dayNumber={dayNumber}
                    date={date}
                    lessons={lessons}
                />
            );
        }

        return dayList;
    }

    render() {
        const { isLoading } = this.props.teacherSchedule;

        return (
            <div className="day-list row">
                {isLoading ? "Loader ... " : this.renderItemList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { teacherSchedule, weekInfo } = state;
    const { currentWeek, selectedWeek } = weekInfo;

    return {
        teacherSchedule,
        currentWeek,
        selectedWeek
    };
};

const mapDispatchToProps = {
    readLessons
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TeacherLessons);