import React from "react";
import './index.scss';

function DayItemHeader({ date }) {
    return <div className="day-item__header has-background-success">{date}</div>;
}

export default DayItemHeader;
