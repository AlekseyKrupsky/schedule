import React, { Component } from "react";
import { connect } from "react-redux";
import { FormDialog } from "../../FormDialog";
import CreateSubjectForm from "../../SubjectForms/CreateSubjectForm";
import { hideCreateDialog } from "../../../ducks/dialogs/subjectDialogs";

class CreateSubjectDialog extends Component {
    render() {
        const { hideCreateDialog } = this.props;
        const { isCreateDialogOpen } = this.props.dialogs;

        return (
            <FormDialog
                title={"Creating subject"}
                show={isCreateDialogOpen}
                onHide={hideCreateDialog}
            >
                <CreateSubjectForm onSubmit={hideCreateDialog} />
            </FormDialog>
        );
    }
}

const mapStateToProps = state => ({
    dialogs: state.subjectDialogs
});

const mapDispatchToProps = {
    hideCreateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateSubjectDialog);
