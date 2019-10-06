import React, { Component } from "react";
import CreateTeacherDialog from "./CreateTeacherDialog";
import UpdateTeacherDialog from "./UpdateTeacherDialog";
import DeleteTeacherDialog from "./DeleteTeacherDialog";

export class TeacherDialogs extends Component {
    render() {
        return (
            <div>
                <CreateTeacherDialog />
                <UpdateTeacherDialog />
                <DeleteTeacherDialog />
            </div>
        );
    }
}

export default TeacherDialogs;