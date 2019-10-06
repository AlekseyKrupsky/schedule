import React, { Component } from "react";
import CreateFacultyDialog from "./CreateFacultyDialog";
import UpdateFacultyDialog from "./UpdateFacultyDialog";
import DeleteFacultyDialog from "./DeleteFacultyDialog";

class FacultyDialogs extends Component {
    render() {
        return (
            <div>
                <CreateFacultyDialog />
                <UpdateFacultyDialog />
                <DeleteFacultyDialog />
            </div>
        );
    }
}

export default FacultyDialogs;