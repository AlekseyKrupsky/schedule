import React, { Component } from "react";
import { connect } from "react-redux";
import { FormDialog } from "../../FormDialog";
import UpdateStreamForm from "../../StreamForms/UpdateStreamForm";
import { hideUpdateDialog } from "../../../ducks/dialogs/streamDialogs";

class UpdateStreamDialog extends Component {
    render() {
        const { hideUpdateDialog } = this.props;
        const { selectedItem, isUpdateDialogOpen } = this.props.streamDialogs;

        return (
            <FormDialog
                title={"Updating stream"}
                show={isUpdateDialogOpen}
                onHide={hideUpdateDialog}
            >
                <UpdateStreamForm selectedItem={selectedItem} />
            </FormDialog>
        );
    }
}

const mapStateToProps = state => ({
    streamDialogs: state.streamDialogs
});

const mapDispatchToProps = {
    hideUpdateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateStreamDialog);
