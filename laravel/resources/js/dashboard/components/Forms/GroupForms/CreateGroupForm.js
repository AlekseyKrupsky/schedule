import { connect } from "react-redux";
import GroupForm, { groupFormSchema } from "./GroupForm";
import { withFormik } from "formik";
import { storeGroup } from "../../../ducks/groups";
import { hideCreateDialog } from "../../../ducks/dialogs/groupDialogs";

const enhancedForm = withFormik({
    mapPropsToValues: () => ({
        name: "",
        faculty_id: "",
        stream_id: "",
    }),
    validationSchema: groupFormSchema,
    handleSubmit: (vaules, actions) => {
        actions.props.storeGroup(vaules).then(
            () => {
                actions.setSubmitting(false);
                actions.setStatus(false);
                actions.props.onSubmit();
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
    submitButtonValue: "Save"
});

const mapDispatchToProps = {
    storeGroup,
    handleCloseDialog: hideCreateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(enhancedForm);
