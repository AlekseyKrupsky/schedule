import React, { Component } from "react";
import CreateLessonTypeDialog from "./CreateLessonTypeDialog";
import UpdateLessonTypeDialog from "./UpdateLessonTypeDialog";
import DeleteLessonTypeDialog from "./DeleteLessonTypeDialog";

export class LessonTypeDialogs extends Component {
    render() {
        return (
            <div>
                <CreateLessonTypeDialog />
                <UpdateLessonTypeDialog />
                <DeleteLessonTypeDialog />
            </div>
        );
    }
}

export default LessonTypeDialogs;
