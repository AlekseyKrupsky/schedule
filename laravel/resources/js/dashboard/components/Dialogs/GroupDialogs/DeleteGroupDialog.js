import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { FormDialog } from "../../FormDialog";
import { SubmitFormButton } from "../../SubmitFormButton";
import { hideDeleteDialog } from "../../../ducks/dialogs/groupDialogs";
import { destroyGroup } from "../../../ducks/groups";

class DeleteGroupDialog extends Component {
    constructor(props) {
        super(props);

        this.handleConfirmButton = this.handleConfirmButton.bind(this);
    }

    handleConfirmButton() {
        const { destroyGroup, hideDeleteDialog } = this.props;
        const { selectedItem } = this.props.groupDialogs;

        destroyGroup(selectedItem).then(
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
        const { isLoading } = this.props.groups;
        const { isDeleteDialogOpen, selectedItem } = this.props.groupDialogs;

        return (
            <FormDialog
                title={"Deleting group"}
                show={isDeleteDialogOpen}
                onHide={hideDeleteDialog}
            >
                <h5 className="card-title text-danger">
                    Do you really want to delete group?
                </h5>
                <p className="text-dark">
                    Name - {selectedItem ? selectedItem.name : ""}<br />
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
    groups: state.groups,
    groupDialogs: state.groupDialogs
});

const mapDispatchToProps = {
    hideDeleteDialog,
    destroyGroup
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteGroupDialog);
