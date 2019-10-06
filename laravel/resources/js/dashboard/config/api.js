export const REST_METHODS = {
    GET: "get",
    POST: "post",
    PUT: "put",
    DELETE: "delete"
};

export const lessonTypes = {
    read: {
        url: "api/lessonTypes",
        method: REST_METHODS.GET
    },
    store: {
        url: "api/lessonTypes",
        method: REST_METHODS.POST
    },
    update: {
        url: "api/lessonTypes",
        method: REST_METHODS.PUT
    },
    destroy: {
        url: "api/lessonTypes",
        method: REST_METHODS.DELETE
    }
};

export const groups = {
    read: {
        url: "api/groups",
        method: REST_METHODS.GET
    },
    store: {
        url: "api/groups",
        method: REST_METHODS.POST
    },
    update: {
        url: "api/groups",
        method: REST_METHODS.PUT
    },
    destroy: {
        url: "api/groups",
        method: REST_METHODS.DELETE
    }
};

export const faculties = {
    read: {
        url: "api/faculties",
        method: REST_METHODS.GET
    },
    store: {
        url: "api/faculties",
        method: REST_METHODS.POST
    },
    update: {
        url: "api/faculties",
        method: REST_METHODS.PUT
    },
    destroy: {
        url: "api/faculties",
        method: REST_METHODS.DELETE
    }
};

export const rooms = {
    read: {
        url: "api/rooms",
        method: REST_METHODS.GET
    },
    store: {
        url: "api/rooms",
        method: REST_METHODS.POST
    },
    update: {
        url: "api/rooms",
        method: REST_METHODS.PUT
    },
    destroy: {
        url: "api/rooms",
        method: REST_METHODS.DELETE
    }
};

export const subjects = {
    read: {
        url: "api/subjects",
        method: REST_METHODS.GET
    },
    store: {
        url: "api/subjects",
        method: REST_METHODS.POST
    },
    update: {
        url: "api/subjects",
        method: REST_METHODS.PUT
    },
    destroy: {
        url: "api/subjects",
        method: REST_METHODS.DELETE
    }
};

export const teachers = {
    read: {
        url: "api/teachers",
        method: REST_METHODS.GET
    },
    store: {
        url: "api/teachers",
        method: REST_METHODS.POST
    },
    update: {
        url: "api/teachers",
        method: REST_METHODS.PUT
    },
    destroy: {
        url: "api/teachers",
        method: REST_METHODS.DELETE
    }
};

export const api = {
    lessons: "/lessons",
    lesson: "/lesson/",
    faculties: "/faculties",
    faculty: "/faculties/",
    streams: "api/streams",
    stream: "api/streams/",
    readStreams: {
        url: "api/streams",
        method: REST_METHODS.GET
    },
    storeStream: {
        url: "api/streams",
        method: REST_METHODS.POST
    },
    updateStream: {
        url: "api/streams",
        method: REST_METHODS.PUT
    },
    destroyStream: {
        url: "api/streams",
        method: REST_METHODS.DELETE
    },
    storeGroup: "api/groups"
};
