import React, { Component } from "react";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { Form, Modal, Button, Alert } from "react-bootstrap";
import { SubmitFormButton } from "../../SubmitFormButton";

export const teacherFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too short")
        .max(50, "Too Long!")
        .required("Required")
});

class TeacherForm extends Component {
    render() {
        const {
            submitButtonValue,
            //   faculties,
            //   streams,
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

                <Form.Group controlId="formGroupName">
                    <Form.Label>Teacher name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            touched.name && errors.name ? "is-invalid" : ""
                        }
                    />
                    <ErrorMessage
                        name="name"
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
                    <Button variant="secondary" onClick={handleCloseDialog}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Form>
        );
    }
}

export default TeacherForm;
