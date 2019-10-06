import React from "react";
import { timing } from "../../../config/main";
import "./index.scss";

function LessonItem({ lessonInfo }) {
    const { lesson_type, teacher, subject, room, order } = lessonInfo;

    let lessonType = lesson_type.name;

    if (lessonType.length > 12) {
        lessonType = lesson_type.short_name;
    }

    let subjectName = subject.name;

    if (subjectName.length > 12) {
        subjectName = subject.short_name;
    }

    const { startTime, endTime } = timing[order];

    return (
        <div className="lesson-item lesson-item_active">
            <div className="lesson-item__time">
                <div className="lesson-start-time">
                    <span className="lesson-start-time_hours">
                        {startTime.hours}
                    </span>
                    <span className="lesson-start-time_minutes">
                        {startTime.minutes}
                    </span>
                </div>
                <span className="lesson-end-time">
                    {endTime.hours}:{endTime.minutes}
                </span>
            </div>
            <div className="lesson-item__content">
                <span className="lesson-type tag is-success is-normal has-text-weight-bold">
                    {lessonType}
                </span>
                <h4 className="lesson-name">{subjectName}</h4>
                <span className="lesson-teacher">{teacher.name}</span>
            </div>
            <div className="lesson-item__location">
                <span className="lesson-item__location_room">{room}</span>
                <span className="lesson-item__location_type">aud.</span>
            </div>
        </div>
    );
}

export default LessonItem;
