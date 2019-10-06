import { connect } from "react-redux";
import FacultyForm, { facultyFormSchema } from "./FacultyForm";
import { withFormik } from "formik";
import { storeFaculty } from "../../ducks/faculties";
import { hideCreateDialog } from "../../ducks/dialogs/facultyDialogs";

const enhancedForm = withFormik({
    mapPropsToValues: () => ({
        name: "",
        short_name: ""
    }),
    validationSchema: facultyFormSchema,
    handleSubmit: (vaules, actions) => {
        actions.props.storeFaculty(vaules).then(
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
})(FacultyForm);

const mapStateToProps = state => ({
    submitButtonValue: "Save"
});

const mapDispatchToProps = {
    storeFaculty,
    handleCloseDialog: hideCreateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(enhancedForm);
