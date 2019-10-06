import { combineReducers } from "redux";
import toasts from "./toasts";
import sidebar from "./sidebar";
import weekInfo from "./weekInfo";
import lessons from "./lessons";
import lessonTypes from "./lessonTypes";
import groups from "./groups";
import faculties from "./faculties";
import streams from "./streams";
import rooms from "./rooms";
import subjects from "./subjects";
import teachers from "./teachers";
import lessonTypeDialogs from "./dialogs/lessonTypeDialogs";
import groupDialogs from "./dialogs/groupDialogs";
import streamDialogs from "./dialogs/streamDialogs";
import facultyDialogs from "./dialogs/facultyDialogs";
import roomDialogs from "./dialogs/roomDialogs";
import subjectDialogs from "./dialogs/subjectDialogs";
import teacherDialogs from "./dialogs/teacherDialogs";

export const rootReducer = combineReducers({
    toasts,
    sidebar,
    weekInfo,
    lessons,
    lessonTypes,
    groups,
    faculties,
    streams,
    rooms,
    subjects,
    teachers,
    lessonTypeDialogs,
    groupDialogs,
    streamDialogs,
    facultyDialogs,
    roomDialogs,
    subjectDialogs,
    teacherDialogs
});
