import React, { Component } from "react";
import { connect } from "react-redux";
import { FormDialog } from "../../FormDialog";
import UpdateSubjectForm from "../../SubjectForms/UpdateSubjectForm";
import { hideUpdateDialog } from "../../../ducks/dialogs/subjectDialogs";

class UpdateSubjectDialog extends Component {
    render() {
        const { hideUpdateDialog } = this.props;
        const { selectedItem, isUpdateDialogOpen } = this.props.dialogs;

        return (
            <FormDialog
                title={"Updating subject"}
                show={isUpdateDialogOpen}
                onHide={hideUpdateDialog}
            >
                <UpdateSubjectForm selectedItem={selectedItem} />
            </FormDialog>
        );
    }
}

const mapStateToProps = state => ({
    dialogs: state.subjectDialogs
});

const mapDispatchToProps = {
    hideUpdateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateSubjectDialog);
