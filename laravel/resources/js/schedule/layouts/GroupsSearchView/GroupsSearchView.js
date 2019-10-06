import React from "react";
import { SearchTabs } from "../../components/SearchTabs";
import { SearchSection } from "../../components/SearchSection";
import { GroupList } from "../../components/GroupList";
import { entities } from "../../config/routes";

export default function GroupsSearchView() {
    return (
        <div className="container">
            <SearchSection />
            <div className="level">
                <GroupList />
            </div>
            <SearchTabs tab={entities.groups} />
        </div>
    );
}
