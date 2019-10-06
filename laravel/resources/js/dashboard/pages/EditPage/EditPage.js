import React from "react";
import { DayItem } from "../../components/Schedule/DayItem";

function EditPage() {
    return (
        <div className="container fluid pt-3">
            <div className="row">
                <div className="col-7">
                    form
                </div>
                <div className="col-5">
                    <DayItem date={"Monday, 1/4 week"} />
                </div>
            </div>
        </div>
    );
}

export default EditPage;
