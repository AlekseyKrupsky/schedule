import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { FormDialog } from "../../FormDialog";
import { SubmitFormButton } from "../../SubmitFormButton";
import { hideDeleteDialog } from "../../../ducks/dialogs/streamDialogs";
import { destroyStream } from "../../../ducks/streams";

class DeleteStreamDialog extends Component {
    constructor(props) {
        super(props);

        this.handleConfirmButton = this.handleConfirmButton.bind(this);
    }

    handleConfirmButton() {
        const { destroyStream, hideDeleteDialog } = this.props;
        const { selectedItem } = this.props.streamDialogs;

        destroyStream(selectedItem).then(
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
        const { isLoading } = this.props.streams;
        const { isDeleteDialogOpen, selectedItem } = this.props.streamDialogs;

        return (
            <FormDialog
                title={"Deleting stream"}
                show={isDeleteDialogOpen}
                onHide={hideDeleteDialog}
            >
                <h5 className="card-title text-danger">
                    Do you really want to delete stream?
                </h5>
                <p className="text-dark">
                    Name - {selectedItem ? selectedItem.name : ""}
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
    streams: state.streams,
    streamDialogs: state.streamDialogs
});

const mapDispatchToProps = {
    hideDeleteDialog,
    destroyStream
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteStreamDialog);
