import React from "react";
import { Route, Switch } from "react-router-dom";
import { MobileTabPanel } from "../../components/MobileTabPanel";
import { TeacherLessons } from "../../components/TeacherLessons";
import { SearchDatepicker } from "../../components/SearchDatepicker";
import { ExamList } from "../../components/ExamList";
import { MobileNavbar } from "../../components/MobileNavbar";
import { NotFound } from "../NotFound";
import { routes as appRoutes, searchModes } from "../../config/routes";

const { lessons, search, exams } = searchModes;
const { teachers } = appRoutes.search;

const routes = [
    {
        path: `${teachers}/:id/${lessons}`,
        component: TeacherLessons
    },
    {
        path: `${teachers}/:id/${search}`,
        component: TeacherLessons
    },
    {
        path: `${teachers}/:id/${exams}`,
        component: TeacherLessons
    }
];

function TeachersScheduleView(props) {
    const { id } = props.match.params;

    if (id.length > 15) {
        return <NotFound />;
    }

    return (
        <div className="container">
            <MobileNavbar />
            <Switch>
                {routes.map(({ path, component }, index) => {
                    return (
                        <Route
                            key={index}
                            exact
                            path={path}
                            component={component}
                        />
                    );
                })}
                <Route component={NotFound} />
            </Switch>
            <MobileTabPanel />
        </div>
    );
}

export default TeachersScheduleView;
