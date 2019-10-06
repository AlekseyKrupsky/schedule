import React, { Component } from "react";
import CreateSubjectDialog from "./CreateSubjectDialog";
import UpdateSubjectDialog from "./UpdateSubjectDialog";
import DeleteSubjectDialog from "./DeleteSubjectDialog";

export class SubjectDialogs extends Component {
    render() {
        return (
            <div>
                <CreateSubjectDialog />
                <UpdateSubjectDialog />
                <DeleteSubjectDialog />
            </div>
        );
    }
}

export default SubjectDialogs;