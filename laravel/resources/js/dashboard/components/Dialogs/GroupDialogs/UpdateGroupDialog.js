import React, { Component } from "react";
import { connect } from "react-redux";
import { FormDialog } from "../../FormDialog";
import UpdateGroupForm from "../../Forms/GroupForms/UpdateGroupForm";
import { hideUpdateDialog } from "../../../ducks/dialogs/groupDialogs";

class UpdateGroupDialog extends Component {
    render() {
        const { hideUpdateDialog } = this.props;
        const { selectedItem, isUpdateDialogOpen } = this.props.groupDialogs;

        return (
            <FormDialog
                title={"Updating group"}
                show={isUpdateDialogOpen}
                onHide={hideUpdateDialog}
            >
                <UpdateGroupForm selectedItem={selectedItem} />
            </FormDialog>
        );
    }
}

const mapStateToProps = state => ({
    groupDialogs: state.groupDialogs
});

const mapDispatchToProps = {
    hideUpdateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateGroupDialog);
