import React, { Component } from "react";
import { connect } from "react-redux";
import { FormDialog } from "../../FormDialog";
import CreateFacultyForm from "../../FacultyForms/CreateFacultyForm";
import { hideCreateDialog } from "../../../ducks/dialogs/facultyDialogs";

class CreateFacultyDialog extends Component {
    render() {
        const { hideCreateDialog } = this.props;
        const { isCreateDialogOpen } = this.props.facultyDialogs;

        return (
            <FormDialog
                title={"Creating faculty"}
                show={isCreateDialogOpen}
                onHide={hideCreateDialog}
            >
                <CreateFacultyForm onSubmit={hideCreateDialog} />
            </FormDialog>
        );
    }
}

const mapStateToProps = state => ({
    facultyDialogs: state.facultyDialogs
});

const mapDispatchToProps = {
    hideCreateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateFacultyDialog);
