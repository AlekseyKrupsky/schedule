import React from "react";
import { LessonItem } from "../LessonItem";
import { EmptyLessonItem } from "../EmptyLessonItem";
import "./index.scss";

export default function DayItemLessons({ items = [] }) {
    const itemsLength = items.length;
    return (
        <div className="day-item__lessons">
            {itemsLength ? (
                items.map((item, index) => {
                    return <LessonItem key={index} lessonInfo={item} />;
                })
            ) : (
                <EmptyLessonItem />
            )}
        </div>
    );
}
