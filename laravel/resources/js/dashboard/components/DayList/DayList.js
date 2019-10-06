import React, { Component } from "react";
import { connect } from "react-redux";
import { readLessons } from "../../ducks/lessons";
import { DayListItem } from "../DayListItem";
import { Loader } from "../Loader";

export class DayList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.readLessons();
    }

    renderItemList() {
        const { items } = this.props.lessons;
        const currentWeek = items["week_3"];

        const schedule = [];

        for (let dayNumber = 1; dayNumber <= 6; dayNumber++) {
            const day = `day_${dayNumber}`;
            const dayDate = currentWeek[`day_${dayNumber}_date`];
            const lessons =
                undefined === currentWeek[day] ? [] : currentWeek[day];

            schedule.push(
                <DayListItem
                    key={dayNumber}
                    dayNumber={dayNumber}
                    date={dayDate}
                    lessons={lessons}
                />
            );
        }

        return schedule;
    }

    render() {
        const { isLoading } = this.props.lessons;

        return (
            <div className="container pt-3">
                <div className="day-list row">
                    {isLoading ? <Loader /> : this.renderItemList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { lessons } = state;
    return {
        lessons
    };
};

const mapDispatchToProps = {
    readLessons
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DayList);
