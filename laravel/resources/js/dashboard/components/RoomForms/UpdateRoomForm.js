import { connect } from "react-redux";
import RoomForm, { roomFormSchema } from "./RoomForm";
import { withFormik } from "formik";
import { updateRoom } from "../../ducks/rooms";
import { hideUpdateDialog } from "../../ducks/dialogs/roomDialogs";

const enhancedForm = withFormik({
    mapPropsToValues: ({ selectedItem }) => ({
        ...selectedItem
    }),
    validationSchema: roomFormSchema,
    handleSubmit: (vaules, actions) => {
        actions.props.updateRoom(vaules).then(
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
})(RoomForm);

const mapStateToProps = state => ({
    submitButtonValue: "Update"
});

const mapDispatchToProps = {
    updateRoom,
    handleCloseDialog: hideUpdateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(enhancedForm);
