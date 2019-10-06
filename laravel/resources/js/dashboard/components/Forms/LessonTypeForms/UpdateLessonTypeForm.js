import { connect } from "react-redux";
import LessonTypeForm, { lessonTypeFormSchema } from "./LessonTypeForm";
import { withFormik } from "formik";
import { updateLessonType } from "../../../ducks/lessonTypes";
import { hideUpdateDialog } from "../../../ducks/dialogs/lessonTypeDialogs";

const enhancedForm = withFormik({
    mapPropsToValues: ({ selectedItem }) => ({
        ...selectedItem
    }),
    validationSchema: lessonTypeFormSchema,
    handleSubmit: (vaules, actions) => {
        actions.props.updateLessonType(vaules).then(
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
})(LessonTypeForm);

const mapStateToProps = state => ({
    submitButtonValue: "Update"
});

const mapDispatchToProps = {
    updateLessonType,
    handleCloseDialog: hideUpdateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(enhancedForm);
