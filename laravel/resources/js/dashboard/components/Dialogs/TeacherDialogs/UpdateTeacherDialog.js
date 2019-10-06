import React, { Component } from "react";
import { connect } from "react-redux";
import { FormDialog } from "../../FormDialog";
import UpdateTeacherForm from "../../Forms/TeacherForms/UpdateTeacherForm";
import { hideUpdateDialog } from "../../../ducks/dialogs/teacherDialogs";

class UpdateTeacherDialog extends Component {
    render() {
        const { hideUpdateDialog } = this.props;
        const { selectedItem, isUpdateDialogOpen } = this.props.dialogs;

        return (
            <FormDialog
                title={"Updating teacher"}
                show={isUpdateDialogOpen}
                onHide={hideUpdateDialog}
            >
                <UpdateTeacherForm selectedItem={selectedItem} />
            </FormDialog>
        );
    }
}

const mapStateToProps = state => ({
    dialogs: state.teacherDialogs
});

const mapDispatchToProps = {
    hideUpdateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateTeacherDialog);
