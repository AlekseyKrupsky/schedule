import React from "react";
import "./index.scss";

function LessonItem({ lessonInfo }) {
    const { startTime, endTime, order, teacher, subject } = lessonInfo;
    return (
        <div className="lesson-item lesson-item_active">
            <div className="lesson-item__time">
                <div className="lesson-start-time">
                    <span className="lesson-start-time_hours">08</span>
                    <span className="lesson-start-time_minutes">00</span>
                </div>
                <span className="lesson-end-time">09:40</span>
            </div>
            <div className="lesson-item__content">
                <span className="lesson-type badge badge-danger">LR</span>
                <h4 className="lesson-name">ЦОРиИ</h4>
                <span className="lesson-teacher">Киркоров С.Н.</span>
            </div>
            <div className="lesson-item__location">
                <span className="lesson-item__location_room">222</span>
                <span className="lesson-item__location_type">aud.</span>
            </div>
        </div>
    );
}

export default LessonItem;
