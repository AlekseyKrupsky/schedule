import React, { Component } from "react";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { Form, Modal, Button, Alert } from "react-bootstrap";
import { SubmitFormButton } from "../../SubmitFormButton";

export const groupFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too short")
        .max(50, "Too Long!")
        .required("Required"),
    faculty_id: Yup.number()
        .min(1)
        .required("Required"),
    stream_id: Yup.number()
        .min(1)
        .required("Required")
});

class GroupForm extends Component {
    render() {
        const {
            submitButtonValue,
            faculties,
            streams,
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
                    <Form.Label>Group name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Group Name"
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
                <Form.Group controlId="formGroupFactltyId">
                    <Form.Label>Faculty</Form.Label>
                    <Form.Control
                        as="select"
                        name="faculty_id"
                        value={values.faculty_id}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.faculty_id ? "is-invalid" : ""}
                    >
                        <option value="" label="Select a faculty" />
                        {faculties.items.map(({ id, name }) => {
                            return <option key={id} value={id} label={name} />;
                        })}
                    </Form.Control>
                    <ErrorMessage
                        name="faculty_id"
                        className="invalid-feedback"
                        component="div"
                    />
                </Form.Group>
                <Form.Group controlId="formGroupStreamId">
                    <Form.Label>Stream</Form.Label>
                    <Form.Control
                        as="select"
                        name="stream_id"
                        value={values.stream_id}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.stream_id ? "is-invalid" : ""}
                    >
                        <option value="" label="Select a stream" />
                        {streams.items.map(({ id, name }) => {
                            return <option key={id} value={id} label={name} />;
                        })}
                    </Form.Control>
                    <ErrorMessage
                        name="stream_id"
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

export default GroupForm;
