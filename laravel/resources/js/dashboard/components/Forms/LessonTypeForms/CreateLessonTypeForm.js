import { connect } from "react-redux";
import LessonTypeForm, { lessonTypeFormSchema } from "./LessonTypeForm";
import { withFormik } from "formik";
import { storeLessonType } from "../../../ducks/lessonTypes";
import { hideCreateDialog } from "../../../ducks/dialogs/lessonTypeDialogs";

const enhancedForm = withFormik({
    mapPropsToValues: () => ({
        name: "",
        short_name: ""
    }),
    validationSchema: lessonTypeFormSchema,
    handleSubmit: (vaules, actions) => {
        actions.props.storeLessonType(vaules).then(
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
})(LessonTypeForm);

const mapStateToProps = state => ({
    submitButtonValue: "Save"
});

const mapDispatchToProps = {
    storeLessonType,
    handleCloseDialog: hideCreateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(enhancedForm);
