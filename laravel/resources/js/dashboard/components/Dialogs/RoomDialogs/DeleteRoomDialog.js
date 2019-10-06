import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { FormDialog } from "../../FormDialog";
import { SubmitFormButton } from "../../SubmitFormButton";
import { hideDeleteDialog } from "../../../ducks/dialogs/roomDialogs";
import { destroyRoom } from "../../../ducks/rooms";

class DeleteRoomDialog extends Component {
    constructor(props) {
        super(props);

        this.handleConfirmButton = this.handleConfirmButton.bind(this);
    }

    handleConfirmButton() {
        const { destroyRoom, hideDeleteDialog } = this.props;
        const { selectedItem } = this.props.dialogs;

        destroyRoom(selectedItem).then(
            () => {
                hideDeleteDialog();
            },
            err => {
                console.log("handleConfirmButton err",err);
            }
        );
    }

    render() {
        const { hideDeleteDialog } = this.props;
        const { isLoading } = this.props.rooms;
        const { isDeleteDialogOpen, selectedItem } = this.props.dialogs;

        return (
            <FormDialog
                title={"Deleting room"}
                show={isDeleteDialogOpen}
                onHide={hideDeleteDialog}
            >
                <h5 className="card-title text-danger">
                    Do you really want to delete room?
                </h5>
                <p className="text-dark">
                    Location - {selectedItem ? selectedItem.location : ""}
                </p>
                <Modal.Footer>
                    <SubmitFormButton
                        onClick={this.handleConfirmButton}
                        isSubmitting={isLoading}
                        variant="danger"
                        value="Delete"
                    />
                    <Button variant="secondary" onClick={hideDeleteDialog}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </FormDialog>
        );
    }
}

const mapStateToProps = state => ({
    rooms: state.rooms,
    dialogs: state.roomDialogs
});

const mapDispatchToProps = {
    hideDeleteDialog,
    destroyRoom
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteRoomDialog);
