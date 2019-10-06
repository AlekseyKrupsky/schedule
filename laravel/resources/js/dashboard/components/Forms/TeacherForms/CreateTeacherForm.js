import { connect } from "react-redux";
import TeacherForm, { teacherFormSchema } from "./TeacherForm";
import { withFormik } from "formik";
import { storeTeacher } from "../../../ducks/teachers";
import { hideCreateDialog } from "../../../ducks/dialogs/teacherDialogs";

const enhancedForm = withFormik({
    mapPropsToValues: () => ({
        name: "",
       // faculty_id: "",
       // stream_id: "",
    }),
    validationSchema: teacherFormSchema,
    handleSubmit: (vaules, actions) => {
        actions.props.storeTeacher(vaules).then(
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
})(TeacherForm);

const mapStateToProps = state => ({
    teachers: state.teachers,
    //faculties: state.faculties,
    submitButtonValue: "Save"
});

const mapDispatchToProps = {
    storeTeacher,
    handleCloseDialog: hideCreateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(enhancedForm);
