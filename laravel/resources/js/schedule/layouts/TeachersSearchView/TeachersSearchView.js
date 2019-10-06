import React from "react";
import { SearchTabs } from "../../components/SearchTabs";
import { SearchSection } from "../../components/SearchSection";
import { TeachersList } from "../../components/TeachersList";
import { entities } from "../../config/routes";

export default function TeachersSearchView() {
    return (
        <div className="container">
            <SearchSection />
            <div className="level">
                <TeachersList />
            </div>
            <SearchTabs tab={entities.teachers} />
        </div>
    );
}
