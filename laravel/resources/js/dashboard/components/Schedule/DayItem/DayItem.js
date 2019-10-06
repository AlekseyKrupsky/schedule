import React from "react";
import { DayItemHeader } from "../DayItemHeader";
import { DayItemLessons } from "../DayItemLessons";
import "./index.scss";

function DayItem({ date }) {
    return (
        <div className="day-item">
            <DayItemHeader date={date} />
            <DayItemLessons items={[1,2,3,4,5,6]} />
        </div>
    );
}

export default DayItem;
