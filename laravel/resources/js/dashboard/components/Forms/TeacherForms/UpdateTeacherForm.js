import { connect } from "react-redux";
import TeacherForm, { teacherFormSchema } from "./TeacherForm";
import { withFormik } from "formik";
import { updateTeacher } from "../../../ducks/teachers";
import { hideUpdateDialog } from "../../../ducks/dialogs/teacherDialogs";

const enhancedForm = withFormik({
    mapPropsToValues: ({ selectedItem }) => ({
        ...selectedItem
    }),
    validationSchema: teacherFormSchema,
    handleSubmit: (vaules, actions) => {
        actions.props.updateTeacher(vaules).then(
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
})(TeacherForm);

const mapStateToProps = state => ({
    teachers: state.teachers,
    //faculties: state.faculties,
    submitButtonValue: "Update"
});

const mapDispatchToProps = {
    updateTeacher,
    handleCloseDialog: hideUpdateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(enhancedForm);
