import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { ToastManager } from "../../components/ToastManager";
import { Topbar } from "../Topbar";
import { Home } from "../../pages/Home";
import { EditPage } from "../../pages/EditPage";
import { DayList } from "../DayList";
import { Groups } from "../../pages/Groups";
import { NotFound } from "../../pages/NotFound";
import { Streams } from "../../pages/Streams";
import { Faculties } from "../../pages/Faculties";
import { Rooms } from "../../pages/Rooms";
import { Subjects } from "../../pages/Subjects";
import { Teachers } from "../../pages/Teachers";
import { LessonTypes } from "../../pages/LessonTypes";

export default function DashboardContent() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <ToastProvider autoDismissTimeout={4000} placement="bottom-right">
                <ToastManager />
            </ToastProvider>
            <div id="content">
                <Topbar />
                <Switch>
                    <Route path="/" exact component={DayList} />
                    <Route path="/edit" exact component={EditPage} />
                    <Route path="/groups" exact component={Groups} />
                    <Route path="/streams" exact component={Streams} />
                    <Route path="/faculties" exact component={Faculties} />
                    <Route path="/rooms" exact component={Rooms} />
                    <Route path="/subjects" exact component={Subjects} />
                    <Route path="/teachers" exact component={Teachers} />
                    <Route path="/lessonTypes" exact component={LessonTypes} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </div>
    );
}
