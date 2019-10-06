import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { FormDialog } from "../../FormDialog";
import { SubmitFormButton } from "../../SubmitFormButton";
import { hideDeleteDialog } from "../../../ducks/dialogs/subjectDialogs";
import { destroySubject } from "../../../ducks/subjects";

class DeleteSubjectDialog extends Component {
    constructor(props) {
        super(props);

        this.handleConfirmButton = this.handleConfirmButton.bind(this);
    }

    handleConfirmButton() {
        const { destroySubject, hideDeleteDialog } = this.props;
        const { selectedItem } = this.props.dialogs;

        destroySubject(selectedItem).then(
            () => {
                hideDeleteDialog();
            },
            err => {
                console.log("handleConfirmButton err", err);
            }
        );
    }

    render() {
        const { hideDeleteDialog } = this.props;
        const { isLoading } = this.props.subjects;
        const { isDeleteDialogOpen, selectedItem } = this.props.dialogs;

        return (
            <FormDialog
                title={"Deleting subject"}
                show={isDeleteDialogOpen}
                onHide={hideDeleteDialog}
            >
                <h5 className="card-title text-danger">
                    Do you really want to delete subject?
                </h5>
                <p className="text-dark">
                    Name - {selectedItem ? selectedItem.name : ""}
                    <br />
                    Short name - {selectedItem ? selectedItem.short_name : ""}
                    <br />
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
    subjects: state.subjects,
    dialogs: state.subjectDialogs
});

const mapDispatchToProps = {
    hideDeleteDialog,
    destroySubject
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteSubjectDialog);
