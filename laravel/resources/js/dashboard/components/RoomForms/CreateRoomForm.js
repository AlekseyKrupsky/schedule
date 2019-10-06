import { connect } from "react-redux";
import RoomForm, { roomFormSchema } from "./RoomForm";
import { withFormik } from "formik";
import { storeRoom } from "../../ducks/rooms";
import { hideCreateDialog } from "../../ducks/dialogs/roomDialogs";

const enhancedForm = withFormik({
    mapPropsToValues: () => ({
        location: ""
    }),
    validationSchema: roomFormSchema,
    handleSubmit: (vaules, actions) => {
        actions.props.storeRoom(vaules).then(
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
})(RoomForm);

const mapStateToProps = state => ({
    submitButtonValue: "Save"
});

const mapDispatchToProps = {
    storeRoom,
    handleCloseDialog: hideCreateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(enhancedForm);
