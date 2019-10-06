import React, { Component } from "react";
import { connect } from "react-redux";
import { FormDialog } from "../../FormDialog";
import CreateStreamForm from "../../StreamForms/CreateStreamForm";
import { hideCreateDialog } from "../../../ducks/dialogs/streamDialogs";

class CreateStreamDialog extends Component {
    render() {
        const { hideCreateDialog } = this.props;
        const { isCreateDialogOpen } = this.props.streamDialogs;

        return (
            <FormDialog
                title={"Creating stream"}
                show={isCreateDialogOpen}
                onHide={hideCreateDialog}
            >
                <CreateStreamForm onSubmit={hideCreateDialog} />
            </FormDialog>
        );
    }
}

const mapStateToProps = state => ({
    streamDialogs: state.streamDialogs
});

const mapDispatchToProps = {
    hideCreateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateStreamDialog);
