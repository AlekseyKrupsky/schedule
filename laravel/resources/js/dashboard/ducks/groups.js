import { createApiDuck } from "./duckApiFactory";
import { addToast } from "./toasts";
import { groups } from "../config/api";
import { toast } from "../config/toast";
import { messages } from "../config/messages";
import { restApiRequest } from "../services/apiRequestService";

const REDUCER_NAME = "GROUPS";

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

export const readGroups = () => dispatch => {
    dispatch(readRequest());

    restApiRequest(groups.read).then(
        responseData => {
            dispatch(readSuccess(responseData));
        },
        err => {
            dispatch(readFailure(err));
        }
    );
};

export const storeGroup = groupData => dispatch => {
    dispatch(storeRequest());

    return restApiRequest(groups.store, groupData).then(
        responseData => {
            dispatch(storeSuccess(responseData));

            dispatch(
                addToast({
                    content: messages.groupCreated,
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

export const updateGroup = group => dispatch => {
    dispatch(updateRequest());

    return restApiRequest(groups.update, group).then(
        updatedGroup => {
            dispatch(updateSuccess(updatedGroup));

            dispatch(
                addToast({
                    content: messages.groupUpdated,
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

export const destroyGroup = group => dispatch => {
    dispatch(destroyRequest());

    return restApiRequest(groups.destroy, group).then(
        () => {
            dispatch(destroySuccess(group));

            dispatch(
                addToast({
                    content: messages.groupDeleted,
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
