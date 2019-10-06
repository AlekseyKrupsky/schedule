import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const TeacherListItem = ({ data }) => {
    const { id, name } = data;
    return (
        <Link to={`/schedule/teachers/${id}/lessons`}>
            <div className="teachers-list__item">
                <span className="user-avatar">
                    <i className="fas fa-user fa-2x" aria-hidden="true" />
                </span>
                <div className="teachers-list__item-info">
                    <span className="teacher-name has-text-weight-bold">
                        {name}
                    </span>
                    <span className="teacher-position">{id}</span>
                </div>
            </div>
        </Link>
    );
};

export default TeacherListItem;
