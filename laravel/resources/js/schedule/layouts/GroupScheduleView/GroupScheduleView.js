import React from "react";
import { Route, Switch } from "react-router-dom";
import { MobileTabPanel } from "../../components/MobileTabPanel";
import { DayList } from "../../components/DayList";
import { SearchDatepicker } from "../../components/SearchDatepicker";
import { ExamList } from "../../components/ExamList";
import { MobileNavbar } from "../../components/MobileNavbar";
import { NotFound } from "../NotFound";
import { routes as appRoutes, searchModes } from "../../config/routes";

const { lessons, search, exams } = searchModes;
const { groups } = appRoutes.search;

const routes = [
    {
        path: `${groups}/:id/${lessons}`,
        component: DayList
    },
    {
        path: `${groups}/:id/${search}`,
        component: DayList
    },
    {
        path: `${groups}/:id/${exams}`,
        component: DayList
    }
];

function GroupScheduleView(props) {
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

export default GroupScheduleView;
