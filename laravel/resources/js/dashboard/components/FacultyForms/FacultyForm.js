import React, { Component } from "react";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { Form, Modal, Button, Alert } from "react-bootstrap";
import SubmitFormButton from "../SubmitFormButton/SubmitFormButton";

export const facultyFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too short")
        .max(50, "Too Long!")
        .required("Required"),
    short_name: Yup.string()
        .min(2, "Too short")
        .max(50, "Too Long!")
        .required("Required")
});

class FacultyForm extends Component {
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
                <Form.Group controlId="formFacultyName">
                    <Form.Label>Faculty name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Faculty name"
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
                <Form.Group controlId="formFacultyShortName">
                    <Form.Label>Abbriviature</Form.Label>
                    <Form.Control
                        type="text"
                        name="short_name"
                        placeholder="Abbreviation"
                        value={values.short_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            touched.name && errors.short_name
                                ? "is-invalid"
                                : ""
                        }
                    />
                    <ErrorMessage
                        name="short_name"
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

export default FacultyForm;
