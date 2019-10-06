import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function ChooseView() {
    return (
        <div className="is-flex">
            <Link to={"schedule/groups"} className="list-views__item">
                <i class="fas fa-users fa-5x has-text-grey-darker" aria-hidden="true" />
                <h3 className="is-size-3">Groups</h3>
            </Link>
            <Link to={"schedule/teachers"} className="list-views__item">
                <i class="fas fa-chalkboard-teacher fa-5x has-text-grey-darker" aria-hidden="true" />
                <h3 className="is-size-3">Teachers</h3>
            </Link>
        </div>
    );
}

export default ChooseView;
