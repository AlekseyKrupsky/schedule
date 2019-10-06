import React, { Component } from "react";
import { connect } from "react-redux";
import { readLessons } from "../../ducks/groupSchedule";
import { DayItem } from "../Schedule/DayItem";
//import { Loader } from "../Loader";
import "./index.scss";

export class DayList extends Component {
    componentDidMount() {
        const groupId = this.props.match.params["id"];
        const { currentWeek } = this.props;

        this.props.readLessons(groupId, currentWeek);
    }

    renderItemList() {
        const { schedule, selectedWeek, selectedSubgroup } = this.props;

        const subgroupKey = `subgroup_${selectedSubgroup}`;
        const weekKey = `week_${selectedWeek}`;

        if (!schedule[subgroupKey] || !schedule.group) {
            return;
        }

        const week = schedule[subgroupKey][weekKey];
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
        const { isLoading } = this.props.schedule;

        return (
            <div className="day-list row">
                {isLoading ? "Loader ... " : this.renderItemList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { groupSchedule, weekInfo, groupInfo } = state;
    const { currentWeek, selectedWeek } = weekInfo;
    const { selectedSubgroup } = groupInfo;

    return {
        schedule: groupSchedule,
        currentWeek,
        selectedWeek,
        selectedSubgroup
    };
};

const mapDispatchToProps = {
    readLessons
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DayList);
