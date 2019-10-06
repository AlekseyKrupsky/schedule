import React, { Component } from "react";
import { connect } from "react-redux";
import { FormDialog } from "../../FormDialog";
import UpdateFacultyForm from "../../FacultyForms/UpdateFacultyForm";
import { hideUpdateDialog } from "../../../ducks/dialogs/facultyDialogs";

class UpdateFacultyDialog extends Component {
    render() {
        const { hideUpdateDialog } = this.props;
        const { selectedItem, isUpdateDialogOpen } = this.props.facultyDialogs;

        return (
            <FormDialog
                title={"Updating faculty"}
                show={isUpdateDialogOpen}
                onHide={hideUpdateDialog}
            >
                <UpdateFacultyForm selectedItem={selectedItem} />
            </FormDialog>
        );
    }
}

const mapStateToProps = state => ({
    facultyDialogs: state.facultyDialogs
});

const mapDispatchToProps = {
    hideUpdateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateFacultyDialog);
