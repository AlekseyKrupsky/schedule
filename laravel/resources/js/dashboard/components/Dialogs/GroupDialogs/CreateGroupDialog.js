import React, { Component } from "react";
import { connect } from "react-redux";
import { FormDialog } from "../../FormDialog";
import CreateGroupForm from "../../Forms/GroupForms/CreateGroupForm";
import { hideCreateDialog } from "../../../ducks/dialogs/groupDialogs";

class CreateGroupDialog extends Component {
    render() {
        const { hideCreateDialog } = this.props;
        const { isCreateDialogOpen } = this.props.groupDialogs;

        return (
            <FormDialog
                title={"Creating group"}
                show={isCreateDialogOpen}
                onHide={hideCreateDialog}
            >
                <CreateGroupForm onSubmit={hideCreateDialog} />
            </FormDialog>
        );
    }
}

const mapStateToProps = state => ({
    groupDialogs: state.groupDialogs
});

const mapDispatchToProps = {
    hideCreateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateGroupDialog);
