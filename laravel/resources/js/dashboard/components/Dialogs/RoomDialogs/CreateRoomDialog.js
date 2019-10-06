import React, { Component } from "react";
import { connect } from "react-redux";
import { FormDialog } from "../../FormDialog";
import CreateRoomForm from "../../RoomForms/CreateRoomForm";
import { hideCreateDialog } from "../../../ducks/dialogs/roomDialogs";

class CreateRoomDialog extends Component {
    render() {
        const { hideCreateDialog } = this.props;
        const { isCreateDialogOpen } = this.props.dialogs;

        return (
            <FormDialog
                title={"Creating room"}
                show={isCreateDialogOpen}
                onHide={hideCreateDialog}
            >
                <CreateRoomForm onSubmit={hideCreateDialog} />
            </FormDialog>
        );
    }
}

const mapStateToProps = state => ({
    dialogs: state.roomDialogs
});

const mapDispatchToProps = {
    hideCreateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateRoomDialog);
