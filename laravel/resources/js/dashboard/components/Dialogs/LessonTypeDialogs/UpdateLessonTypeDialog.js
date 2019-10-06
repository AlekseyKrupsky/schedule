import React, { Component } from "react";
import { connect } from "react-redux";
import { FormDialog } from "../../FormDialog";
import UpdateLessonTypeForm from "../../Forms/LessonTypeForms/UpdateLessonTypeForm";
import { hideUpdateDialog } from "../../../ducks/dialogs/lessonTypeDialogs";

class UpdateLessonTypeDialog extends Component {
    render() {
        const { hideUpdateDialog } = this.props;
        const { selectedItem, isUpdateDialogOpen } = this.props.dialogs;

        return (
            <FormDialog
                title={"Updating lesson type"}
                show={isUpdateDialogOpen}
                onHide={hideUpdateDialog}
            >
                <UpdateLessonTypeForm selectedItem={selectedItem} />
            </FormDialog>
        );
    }
}

const mapStateToProps = state => ({
    dialogs: state.lessonTypeDialogs
});

const mapDispatchToProps = {
    hideUpdateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateLessonTypeDialog);
