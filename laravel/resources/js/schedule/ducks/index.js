import { combineReducers } from "redux";
import toasts from "./toasts";
import groupInfo from "./groupInfo";
import weekInfo from "./weekInfo";
import groupSchedule from "./groupSchedule";
import teacherSchedule from "./teacherSchedule";
import groups from "./groups";
import teachers from "./teachers";
import searchFilter from "./searchFilter";
import searchEntity from "./searchEntity";

export const rootReducer = combineReducers({
    toasts,
    weekInfo,
    groupInfo,
    groupSchedule,
    teacherSchedule,
    groups,
    teachers,
    searchFilter,
    searchEntity,
});
