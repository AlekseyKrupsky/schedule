import React from "react";
import { Link } from "react-router-dom";
import "./index.scss"

const tabLinks = {
    groups: "groups",
    teachers: "teachers"
};

export default function SearchTabs({ tab }) {
    const activeTab = "is-active";
    const groupsTab = tabLinks.groups;
    const teachersTab = tabLinks.teachers;

    return (
        <div class="mobile-tabs-panel tabs is-fullwidth is-hidden-desktop">
            <ul>
                <li class={tab === groupsTab ? activeTab : ""}>
                    <Link to={groupsTab}>
                        <span class="icon is-small">
                            <i class="fas fa-users" aria-hidden="true" />
                        </span>
                        <span>Groups</span>
                    </Link>
                </li>
                <li class={tab === teachersTab ? activeTab : ""}>
                    <Link to={teachersTab}>
                        <span class="icon is-small">
                            <i
                                class="fas fa-chalkboard-teacher"
                                aria-hidden="true"
                            />
                        </span>
                        <span>Teacher</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
