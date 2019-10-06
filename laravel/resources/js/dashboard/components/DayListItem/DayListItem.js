import React, { Component } from "react";
import { LessonList } from "../LessonList";
import { DayListItemHeader } from "../DayListItemHeader";
import "./index.css";

class DayListItem extends Component {
    render() {
        const { dayNumber, date, lessons } = this.props;

        return (
            <div className="day-list__item col-lg-4 col-md-6 col-sm-12 ml-3 mr-3">
                <DayListItemHeader dayNumber={dayNumber} date={date} />
                <LessonList lessons={lessons} />
            </div>
        );
    }
}

export default DayListItem;
