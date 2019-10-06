import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { FormDialog } from "../../FormDialog";
import { SubmitFormButton } from "../../SubmitFormButton";
import { hideDeleteDialog } from "../../../ducks/dialogs/facultyDialogs";
import { destroyFaculty } from "../../../ducks/faculties";

class DeleteFacultyDialog extends Component {
    constructor(props) {
        super(props);

        this.handleConfirmButton = this.handleConfirmButton.bind(this);
    }

    handleConfirmButton() {
        const { destroyFaculty, hideDeleteDialog } = this.props;
        const { selectedItem } = this.props.facultyDialogs;

        destroyFaculty(selectedItem).then(
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
        const { isLoading } = this.props.faculties;
        const { isDeleteDialogOpen, selectedItem } = this.props.facultyDialogs;

        return (
            <FormDialog
                title={"Deleting faculty"}
                show={isDeleteDialogOpen}
                onHide={hideDeleteDialog}
            >
                <h5 className="card-title text-danger">
                    Do you really want to delete faculty?
                </h5>
                <p className="text-dark">
                    Name - {selectedItem ? selectedItem.name : ""}<br />
                    Abbreviation - {selectedItem ? selectedItem.short_name : ""}
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
    faculties: state.faculties,
    facultyDialogs: state.facultyDialogs
});

const mapDispatchToProps = {
    hideDeleteDialog,
    destroyFaculty
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteFacultyDialog);
