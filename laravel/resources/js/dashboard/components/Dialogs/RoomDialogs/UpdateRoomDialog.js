import React, { Component } from "react";
import { connect } from "react-redux";
import { FormDialog } from "../../FormDialog";
import UpdateRoomForm from "../../RoomForms/UpdateRoomForm";
import { hideUpdateDialog } from "../../../ducks/dialogs/roomDialogs";

class UpdateRoomDialog extends Component {
    render() {
        const { hideUpdateDialog } = this.props;
        const { selectedItem, isUpdateDialogOpen } = this.props.dialogs;

        return (
            <FormDialog
                title={"Updating room"}
                show={isUpdateDialogOpen}
                onHide={hideUpdateDialog}
            >
                <UpdateRoomForm selectedItem={selectedItem} />
            </FormDialog>
        );
    }
}

const mapStateToProps = state => ({
    dialogs: state.roomDialogs
});

const mapDispatchToProps = {
    hideUpdateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateRoomDialog);
