import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { SubjectsTable } from "../../components/Tables/SubjectsTable";
import { showCreateDialog } from "../../ducks/dialogs/subjectDialogs";
import { SubjectDialogs } from "../../components/Dialogs/SubjectDialogs";

class Subjects extends Component {
    render() {
        const { showCreateDialog } = this.props;

        return (
            <div className="container fluid pt-3">
                <header className="d-flex align-items-center justify-content-between mb-2">
                    <h1 className="h3 mb-2 text-gray-800">Subjects</h1>
                    <Button
                        variant="success"
                        onClick={showCreateDialog}
                        size="sm"
                    >
                        Add <i className="fas fa-plus-circle" />
                    </Button>
                </header>
                <SubjectDialogs />
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                            Subjects Table
                        </h6>
                    </div>
                    <div className="card-body">
                        <SubjectsTable />
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
)(Subjects);
