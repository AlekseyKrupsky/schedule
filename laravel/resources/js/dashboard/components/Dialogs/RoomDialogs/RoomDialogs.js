import React, { Component } from "react";
import CreateRoomDialog from "./CreateRoomDialog";
import UpdateRoomDialog from "./UpdateRoomDialog";
import DeleteRoomDialog from "./DeleteRoomDialog";

export class RoomDialogs extends Component {
    render() {
        return (
            <div>
                <CreateRoomDialog />
                <UpdateRoomDialog />
                <DeleteRoomDialog />
            </div>
        );
    }
}

export default RoomDialogs;