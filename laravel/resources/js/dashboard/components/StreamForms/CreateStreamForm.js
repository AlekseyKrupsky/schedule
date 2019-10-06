import { connect } from "react-redux";
import StreamForm, { streamFormSchema } from "./StreamForm";
import { withFormik } from "formik";
import { storeStream } from "../../ducks/streams";
import { hideCreateDialog } from "../../ducks/dialogs/streamDialogs";

const enhancedForm = withFormik({
    mapPropsToValues: () => ({
        name: ""
    }),
    validationSchema: streamFormSchema,
    handleSubmit: (vaules, actions) => {
        actions.props.storeStream(vaules).then(
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
})(StreamForm);

const mapStateToProps = state => ({
    submitButtonValue: "Save"
});

const mapDispatchToProps = {
    storeStream,
    handleCloseDialog: hideCreateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(enhancedForm);
