import React from "react";
import { Redirect } from "react-router-dom";
import { routes } from "../../config/routes";

export default function NotFound() {
    return <Redirect to={routes.search.groups} />;
}
