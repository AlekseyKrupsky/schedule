import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChooseView } from "../ChooseView";
import { GroupsSearchView } from "../GroupsSearchView";
import { TeachersSearchView } from "../TeachersSearchView";
import { GroupScheduleView } from "../GroupScheduleView";
import { TeachersScheduleView } from "../TeachersScheduleView";
import { NotFound } from "../NotFound";
import { routes } from "../../config/routes";
import "bootstrap/dist/css/bootstrap-grid.min.css";

export default function Main() {
    return (
        <Router>
            <Switch>
                <Route exact path="/schedule" component={ChooseView} />
                <Route
                    exact
                    path={routes.search.groups}
                    component={GroupsSearchView}
                />
                <Route
                    exact
                    path={routes.search.teachers}
                    component={TeachersSearchView}
                />
                <Route
                    path="/schedule/groups/:id"
                    component={GroupScheduleView}
                />
                <Route
                    path="/schedule/teachers/:id"
                    component={TeachersScheduleView}
                />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}
