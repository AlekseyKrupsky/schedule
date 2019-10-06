import { connect } from "react-redux";
import FacultyForm, { facultyFormSchema } from "./FacultyForm";
import { withFormik } from "formik";
import { updateFaculty } from "../../ducks/faculties";
import { hideUpdateDialog } from "../../ducks/dialogs/facultyDialogs";

const enhancedForm = withFormik({
    mapPropsToValues: ({ selectedItem }) => ({
        ...selectedItem
    }),
    validationSchema: facultyFormSchema,
    handleSubmit: (vaules, actions) => {
        actions.props.updateFaculty(vaules).then(
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
})(FacultyForm);

const mapStateToProps = state => ({
    submitButtonValue: "Update"
});

const mapDispatchToProps = {
    updateFaculty,
    handleCloseDialog: hideUpdateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(enhancedForm);
