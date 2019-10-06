import React, { Component } from "react";
import { LessonListItem } from '../LessonListItem';

export class LessonList extends Component {

    renderItemList() {
        const { lessons } = this.props;
        
        if(lessons.length === 0) {
            return <div>No lessons</div>;
        }

        return lessons.map((lesson, index) => {
            return <LessonListItem key={index} data={lesson} />;
        });
    }

    render() {
        return (
            <div className="lesson-list">
                { this.renderItemList() }
            </div>
        );
    }
}

export default LessonList
