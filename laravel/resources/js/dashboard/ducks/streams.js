import { createApiDuck } from "./duckApiFactory";
import { addToast } from "./toasts";
import { api } from "../config/api";
import { toast } from "../config/toast";
import { messages } from "../config/messages";
import { restApiRequest } from "../services/apiRequestService";

const REDUCER_NAME = "STREAMS";

const {
    reducer,
    readRequest,
    readSuccess,
    readFailure,
    storeRequest,
    storeSuccess,
    storeFailure,
    updateRequest,
    updateSuccess,
    updateFailure,
    destroyRequest,
    destroySuccess,
    destroyFailure
} = createApiDuck(REDUCER_NAME);

export const readStreams = () => dispatch => {
    dispatch(readRequest());

    restApiRequest(api.readStreams).then(
        responseData => {
            dispatch(readSuccess(responseData));
        },
        err => {
            dispatch(readFailure(err));
        }
    );
};

export const storeStream = streamData => dispatch => {
    dispatch(storeRequest());

    return restApiRequest(api.storeStream, streamData).then(
        responseData => {
            dispatch(storeSuccess(responseData));

            dispatch(
                addToast({
                    content: messages.streamCreated,
                    config: toast.success
                })
            );
        },
        error => {
            dispatch(storeFailure());
            throw error;
        }
    );
};

export const updateStream = stream => dispatch => {
    dispatch(updateRequest());

    return restApiRequest(api.updateStream, stream).then(
        updatedStream => {
            dispatch(updateSuccess(updatedStream));

            dispatch(
                addToast({
                    content: messages.streamUpdated,
                    config: toast.info
                })
            );
        },
        error => {
            dispatch(updateFailure());
            throw error;
        }
    );
};

export const destroyStream = stream => dispatch => {
    dispatch(destroyRequest());

    return restApiRequest(api.destroyStream, stream).then(
        () => {
            dispatch(destroySuccess(stream));

            dispatch(
                addToast({
                    content: messages.streamDeleted,
                    config: toast.warning
                })
            );
        },
        error => {
            dispatch(destroyFailure());
            throw error;
        }
    );
};

export default reducer;
