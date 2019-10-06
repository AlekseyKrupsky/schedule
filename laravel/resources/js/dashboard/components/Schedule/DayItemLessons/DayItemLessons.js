import React from "react";
import { LessonItem } from "../LessonItem";
import "./index.scss";

export default function DayItemLessons({ items = [] }) {
    return (
        <div className="day-item__lessons">
            {items.map((lesson, index) => {
                return <LessonItem key={index} lessonInfo={{}} />;
            })}
        </div>
    );
}
