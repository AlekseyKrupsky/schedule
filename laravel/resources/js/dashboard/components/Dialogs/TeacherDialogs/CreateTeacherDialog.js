import React, { Component } from "react";
import { connect } from "react-redux";
import { FormDialog } from "../../FormDialog";
import CreateTeacherForm from "../../Forms/TeacherForms/CreateTeacherForm";
import { hideCreateDialog } from "../../../ducks/dialogs/teacherDialogs";

class CreateTeacherDialog extends Component {
    render() {
        const { hideCreateDialog } = this.props;
        const { isCreateDialogOpen } = this.props.dialogs;

        return (
            <FormDialog
                title={"Creating teacher"}
                show={isCreateDialogOpen}
                onHide={hideCreateDialog}
            >
                <CreateTeacherForm onSubmit={hideCreateDialog} />
            </FormDialog>
        );
    }
}

const mapStateToProps = state => ({
    dialogs: state.teacherDialogs
});

const mapDispatchToProps = {
    hideCreateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateTeacherDialog);
