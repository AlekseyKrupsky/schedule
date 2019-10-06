import React from "react";
import { Redirect } from "react-router-dom";
import { SearchTabs } from "../../components/SearchTabs";
import { SearchSection } from "../../components/SearchSection";
import { GroupList } from "../../components/GroupList";
import { TeachersList } from "../../components/TeachersList";
import { entities } from "../../config/routes";

export default function Search(props) {
    console.log(props);
    const { tab } = props.match.params;

    let entitiesList = null;

    if (tab === entities.teachers) {
        entitiesList = (
            <TeachersList
                items={[
                    "SP641",
                    "SP641",
                    "DT841",
                    "US643",
                    "NF437",
                    "US643",
                    "NF437"
                ]}
            />
        );
    } else if (tab === entities.groups) {
        entitiesList = (
            <GroupList items={["SP641", "SP641", "DT841", "US643", "NF437"]} />
        );
    } else {
        return <Redirect to={"/schedule"} />;
    }

    return (
        <div className="container">            
            <SearchSection />

            <div className="level">{entitiesList}</div>
            <SearchTabs tab={tab} />
        </div>
    );
}
