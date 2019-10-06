import { connect } from "react-redux";
import StreamForm, { streamFormSchema } from "./StreamForm";
import { withFormik } from "formik";
import { updateStream } from "../../ducks/streams";
import { hideUpdateDialog } from "../../ducks/dialogs/streamDialogs";

const enhancedForm = withFormik({
    mapPropsToValues: ({ selectedItem }) => ({
        ...selectedItem
    }),
    validationSchema: streamFormSchema,
    handleSubmit: (vaules, actions) => {
        actions.props.updateStream(vaules).then(
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
})(StreamForm);

const mapStateToProps = state => ({
    submitButtonValue: "Update"
});

const mapDispatchToProps = {
    updateStream,
    handleCloseDialog: hideUpdateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(enhancedForm);
