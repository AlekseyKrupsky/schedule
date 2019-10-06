export const home = "/schedule";

export const entities = {
    groups: "groups",
    teachers: "teachers"
};

export const searchModes = {
    lessons: "lessons",
    search: "search",
    exams: "exams"
};

export const routes = {
    home,
    search: {
        groups: `${home}/${entities.groups}`,
        teachers: `${home}/${entities.teachers}`
    },
    view: {
        groups: `${home}/${entities.groups}`
    }
};
