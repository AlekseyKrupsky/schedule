import React from "react";
import { DayItemHeader } from "../DayItemHeader";
import { DayItemLessons } from "../DayItemLessons";
import "./index.scss";

function DayItem({ date, lessons }) {
    return (
        <div className=" col-12 col-md-6 col-lg-4">
            <div className="day-item">
                <DayItemHeader date={date} />
                <DayItemLessons items={lessons} />
            </div>
        </div>
    );
}

export default DayItem;
