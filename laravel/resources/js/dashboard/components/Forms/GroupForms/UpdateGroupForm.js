import { connect } from "react-redux";
import GroupForm, { groupFormSchema } from "./GroupForm";
import { withFormik } from "formik";
import { updateGroup } from "../../../ducks/groups";
import { hideUpdateDialog } from "../../../ducks/dialogs/groupDialogs";

const enhancedForm = withFormik({
    mapPropsToValues: ({ selectedItem }) => ({
        ...selectedItem
    }),
    validationSchema: groupFormSchema,
    handleSubmit: (vaules, actions) => {
        actions.props.updateGroup(vaules).then(
            () => {
                actions.setSubmitting(false);
                actions.setStatus(false);
                actions.props.handleCloseDialog();
            },
            err => {
                actions.setSubmitting(false);
                actions.setErrors(err.errors);
                actions.setStatus({ msg: err.message });
            }
        );
    }
})(GroupForm);

const mapStateToProps = state => ({
    streams: state.streams,
    faculties: state.faculties,
    submitButtonValue: "Update"
});

const mapDispatchToProps = {
    updateGroup,
    handleCloseDialog: hideUpdateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(enhancedForm);
