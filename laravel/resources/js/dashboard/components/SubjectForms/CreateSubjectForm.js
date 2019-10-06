import { connect } from "react-redux";
import SubjectForm, { subjectFormSchema } from "./SubjectForm";
import { withFormik } from "formik";
import { storeSubject } from "../../ducks/subjects";
import { hideCreateDialog } from "../../ducks/dialogs/subjectDialogs";

const enhancedForm = withFormik({
    mapPropsToValues: () => ({
        name: "",
        short_name: ""
    }),
    validationSchema: subjectFormSchema,
    handleSubmit: (vaules, actions) => {
        actions.props.storeSubject(vaules).then(
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
})(SubjectForm);

const mapStateToProps = state => ({
    submitButtonValue: "Save"
});

const mapDispatchToProps = {
    storeSubject,
    handleCloseDialog: hideCreateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(enhancedForm);
