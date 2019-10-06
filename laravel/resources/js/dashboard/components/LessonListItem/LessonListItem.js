import React, { Component } from "react";
import { timing } from '../../config/main'
import './index.css';

class LessonListItem extends Component {
    render() {
        console.log(this.props.data);
        const { subject, teacher, order, room } = this.props.data;

        return (
            <div className="lesson-list__item">
                <div className="span-continer">
                    <span className="lesson-timing">{ timing[order] }</span>
                    <span className="lesson-type warning">Семинар</span>
                </div>
                <span className="lesson-name">{ subject.short_name }</span>
                <span className="teacher-name">{ teacher.name }</span>
                <span className="lesson-room">{ room } каб</span>
            </div>
        );
    }
}

export default LessonListItem;
