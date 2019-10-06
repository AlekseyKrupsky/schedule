import React, { Component } from "react";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { Form, Modal, Button, Alert } from "react-bootstrap";
import SubmitFormButton from "../SubmitFormButton/SubmitFormButton";

export const roomFormSchema = Yup.object().shape({
    location: Yup.string()
        .min(2, "Too short")
        .max(50, "Too Long!")
        .required("Required")
});

class RoomForm extends Component {
    render() {
        const {
            submitButtonValue,
            values,
            status,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            handleCloseDialog,
            isSubmitting
        } = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                {status && status.msg && (
                    <Alert variant="danger">{status.msg}</Alert>
                )}
                <Form.Group controlId="formRoomName">
                    <Form.Label>Location name</Form.Label>
                    <Form.Control
                        type="text"
                        name="location"
                        placeholder="Location name"
                        value={values.location}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            touched.location && errors.location ? "is-invalid" : ""
                        }
                    />
                    <ErrorMessage
                        name="location"
                        className="invalid-feedback"
                        component="div"
                    />
                </Form.Group>
                <Modal.Footer>
                    <SubmitFormButton
                        isSubmitting={isSubmitting}
                        variant="success"
                        value={submitButtonValue}
                    />
                    <Button variant="secondary" onClick={handleCloseDialog}>Cancel</Button>
                </Modal.Footer>
            </Form>
        );
    }
}

export default RoomForm;
