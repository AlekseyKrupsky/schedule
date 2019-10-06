import React from "react";
import { DashboardSidebar } from "../DashboardSidebar";
import { DashboardContent } from "../DashboardContent";
import { BrowserRouter as Router } from "react-router-dom";

export default function Dashboard() {
    return (
        <Router>
            <div id="wrapper">
                <DashboardSidebar />
                <DashboardContent />
            </div>
        </Router>
    );
}
