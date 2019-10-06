import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { FormDialog } from "../../FormDialog";
import { SubmitFormButton } from "../../SubmitFormButton";
import { hideDeleteDialog } from "../../../ducks/dialogs/lessonTypeDialogs";
import { destroyLessonType } from "../../../ducks/lessonTypes";

class DeleteLessonTypeDialog extends Component {
    constructor(props) {
        super(props);

        this.handleConfirmButton = this.handleConfirmButton.bind(this);
    }

    handleConfirmButton() {
        const { destroyLessonType, hideDeleteDialog } = this.props;
        const { selectedItem } = this.props.dialogs;

        destroyLessonType(selectedItem).then(
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
        const { isLoading } = this.props.lessonTypes;
        const { isDeleteDialogOpen, selectedItem } = this.props.dialogs;

        return (
            <FormDialog
                title={"Deleting lesson type"}
                show={isDeleteDialogOpen}
                onHide={hideDeleteDialog}
            >
                <h5 className="card-title text-danger">
                    Do you really want to delete lesson type?
                </h5>
                <p className="text-dark">
                    Name - {selectedItem ? selectedItem.name : ""}
                </p>
                <p className="text-dark">
                    Short name - {selectedItem ? selectedItem.short_name : ""}
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
    lessonTypes: state.lessonTypes,
    dialogs: state.lessonTypeDialogs
});

const mapDispatchToProps = {
    hideDeleteDialog,
    destroyLessonType
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteLessonTypeDialog);
