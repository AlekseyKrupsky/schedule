import React, { Component } from "react";
import CreateGroupDialog from "./CreateGroupDialog";
import UpdateGroupDialog from "./UpdateGroupDialog";
import DeleteGroupDialog from "./DeleteGroupDialog";

class GroupDialogs extends Component {
    render() {
        return (
            <div>
                <CreateGroupDialog />
                <UpdateGroupDialog />
                <DeleteGroupDialog />
            </div>
        );
    }
}

export default GroupDialogs;