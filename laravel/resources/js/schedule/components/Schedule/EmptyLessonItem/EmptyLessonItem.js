import React from "react";
import "./index.scss";

function EmptyLessonItem() {
    return (
        <div className="lesson-item is-block has-text-centered">
            <p className="has-text-success has-text-weight-bold">
                Сегодня занятий нет, можно отдохнуть.
            </p>
        </div>
    );
}

export default EmptyLessonItem;
