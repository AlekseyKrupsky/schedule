export const processApiCallErrors = err => {
    const { response } = err;
    let reqErrors = {};
    let message = "";

    if (response && response.status) {
        const { errors } = response.data;
        
        if (errors) {
            reqErrors = errors;
        } else {
            message = response.statusText;
        }
    } else {
        message = err.message;
    }

    return { message, errors: reqErrors };
};
