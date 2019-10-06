import React, { Component } from "react";
import { connect } from "react-redux";
import { FormDialog } from "../../FormDialog";
import CreateLessonTypeForm from "../../Forms/LessonTypeForms/CreateLessonTypeForm";
import { hideCreateDialog } from "../../../ducks/dialogs/lessonTypeDialogs";

class CreateLessonTypeDialog extends Component {
    render() {
        const { hideCreateDialog } = this.props;
        const { isCreateDialogOpen } = this.props.lessonTypeDialogs;

        return (
            <FormDialog
                title={"Creating lesson type"}
                show={isCreateDialogOpen}
                onHide={hideCreateDialog}
            >
                <CreateLessonTypeForm onSubmit={hideCreateDialog} />
            </FormDialog>
        );
    }
}

const mapStateToProps = state => ({
    lessonTypeDialogs: state.lessonTypeDialogs
});

const mapDispatchToProps = {
    hideCreateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateLessonTypeDialog);
