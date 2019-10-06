import { processApiCallErrors } from "../services/apiErrorHandler";
import { REST_METHODS } from "../config/api";

const processRequestParams = (requestParams, data) => {
    const { url, method } = requestParams;
    let requestData = null;

    switch (method) {
        case REST_METHODS.GET:
            requestData = {
                url,
                method
            };
            break;
        case REST_METHODS.POST:
            requestData = {
                url,
                method,
                data
            };
            break;
        case REST_METHODS.PUT:
            requestData = {
                url: `${url}/${data.id}`,
                method,
                data
            };
            break;
        case REST_METHODS.DELETE:
            requestData = {
                url: `${url}/${data.id}`,
                method,
                data
            };
            break;
        default:
            break;
    }

    return requestData;
};

export const restApiRequest = (requestParams, data) => {
    const requestData = processRequestParams(requestParams, data);

    return axios(requestData).then(
        response => {
            return response.data;
        },
        err => {
            const processedErors = processApiCallErrors(err);
            throw processedErors;
        }
    );
};

/*
export const readApiRequest = requestParams => {
    const { url, method } = requestParams;

    return axios({
        url,
        method
    }).then(
        res => {
            return res.data;
        },
        err => {
            throw err;
        }
    );
};

export const storeApiRequest = (requestParams, data) => {
    const { url, method } = requestParams;

    return axios({
        url,
        method,
        data
    }).then(
        response => {
            return response.data;
        },
        err => {
            const processedErors = processApiCallErrors(err);
            throw processedErors;
        }
    );
};

export const updateApiRequest = (requestParams, item) => {
    const { url, method } = requestParams;
    const requestUrl = `${url}/${item.id}`;

    return axios({
        url: requestUrl,
        method
    }).then(
        response => {
            return response.data;
        },
        err => {
            const processedErors = processApiCallErrors(err);
            throw processedErors;
        }
    );
};

export const destroyApiRequest = (requestParams, item) => {
    const { url, method } = requestParams;
    const requestUrl = `${url}/${item.id}`;

    return axios({
        url: requestUrl,
        method
    }).then(
        response => {
            return response.data;
        },
        err => {
            const processedErors = processApiCallErrors(err);
            throw processedErors;
        }
    );
};*/
