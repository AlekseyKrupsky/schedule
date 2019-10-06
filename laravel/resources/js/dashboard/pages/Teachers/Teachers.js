import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { TeachersTable } from "../../components/Tables/TeachersTable";
import { showCreateDialog } from "../../ducks/dialogs/teacherDialogs";
import { TeacherDialogs } from "../../components/Dialogs/TeacherDialogs";

class Teachers extends Component {
    render() {
        const { showCreateDialog } = this.props;

        return (
            <div className="container fluid pt-3">
                <TeacherDialogs />
                <header className="d-flex align-items-center justify-content-between mb-2">
                    <h1 className="h3 mb-2 text-gray-800">Teachers</h1>
                    <Button
                        variant="success"
                        onClick={showCreateDialog}
                        size="sm"
                    >
                        Add <i className="fas fa-plus-circle" />
                    </Button>
                </header>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                            Teachers table
                        </h6>
                    </div>
                    <div className="card-body">
                        <TeachersTable />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    showCreateDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Teachers);
