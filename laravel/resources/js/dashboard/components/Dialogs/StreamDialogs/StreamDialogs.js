import React, { Component } from "react";
import CreateStreamDialog from "./CreateStreamDialog";
import UpdateStreamDialog from "./UpdateStreamDialog";
import DeleteStreamDialog from "./DeleteStreamDialog";

export class StreamDialogs extends Component {
    render() {
        return (
            <div>
                <CreateStreamDialog />
                <UpdateStreamDialog />
                <DeleteStreamDialog />
            </div>
        );
    }
}

export default StreamDialogs;