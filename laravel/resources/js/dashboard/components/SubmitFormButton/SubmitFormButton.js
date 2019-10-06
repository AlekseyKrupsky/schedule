import React from "react";
import { Button, Spinner } from "react-bootstrap";

const SubmitFormButton = props => {
    const { isSubmitting, value, variant, onClick } = props;
    let { loadingText } = props;

    if (!loadingText) {
        loadingText = " Loading...";
    }

    return (
        <Button
            type="submit"
            onClick={onClick}
            variant={variant}
            disabled={isSubmitting}
            className="d-flex align-items-center"
        >
            {isSubmitting ? (
                <Spinner
                    className="mr-2"
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
            ) : (
                ""
            )}
            {isSubmitting ? loadingText : value}
        </Button>
    );
};

export default SubmitFormButton;
