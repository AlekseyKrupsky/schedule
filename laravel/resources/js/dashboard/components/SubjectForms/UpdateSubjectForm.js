import { connect } from "react-redux";
import SubjectForm, { subjectFormSchema } from "./SubjectForm";
import { withFormik } from "formik";
import { updateSubject } from "../../ducks/subjects";
import { hideUpdateDialog } from "../../ducks/dialogs/subjectDialogs";

const enhancedForm = withFormik({
    mapPropsToValues: ({ selectedItem }) => ({
        ...selectedItem
    }),
    validationSchema: subjectFormSchema,
    handleSubmit: (vaules, actions) => {
        actions.props.updateSubject(vaules).then(
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
})(SubjectForm);

const mapStateToProps = state => ({
    submitButtonValue: "Update"
});

const mapDispatchToProps = {
    updateSubject,
    handleCloseDialog: hideUpdateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(enhancedForm);
