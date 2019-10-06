import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { FormDialog } from "../../FormDialog";
import { SubmitFormButton } from "../../SubmitFormButton";
import { hideDeleteDialog } from "../../../ducks/dialogs/teacherDialogs";
import { destroyTeacher } from "../../../ducks/teachers";

class DeleteTeacherDialog extends Component {
    constructor(props) {
        super(props);

        this.handleConfirmButton = this.handleConfirmButton.bind(this);
    }

    handleConfirmButton() {
        const { destroyTeacher, hideDeleteDialog } = this.props;
        const { selectedItem } = this.props.dialogs;

        destroyTeacher(selectedItem).then(
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
        const { isLoading } = this.props.teachers;
        const { isDeleteDialogOpen, selectedItem } = this.props.dialogs;

        return (
            <FormDialog
                title={"Deleting teacher"}
                show={isDeleteDialogOpen}
                onHide={hideDeleteDialog}
            >
                <h5 className="card-title text-danger">
                    Do you really want to delete teacher?
                </h5>
                <p className="text-dark">
                    Name - {selectedItem ? selectedItem.name : ""}
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
    teachers: state.teachers,
    dialogs: state.teacherDialogs
});

const mapDispatchToProps = {
    hideDeleteDialog,
    destroyTeacher
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteTeacherDialog);
