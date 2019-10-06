import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { GroupsTable } from "../../components/Tables/GroupsTable";
import { showCreateDialog } from "../../ducks/dialogs/groupDialogs";
import { GroupDialogs } from "../../components/Dialogs/GroupDialogs";
import { readStreams } from "../../ducks/streams";
import { readFaculties } from "../../ducks/faculties";

class Groups extends Component {
    componentDidMount() {
        const { readStreams, readFaculties } = this.props;
        readStreams();
        readFaculties();
    }

    render() {
        const { showCreateDialog } = this.props;

        return (
            <div className="container fluid pt-3">
                <header className="d-flex align-items-center justify-content-between mb-2">
                    <h1 className="h3 mb-2 text-gray-800">Groups</h1>
                    <Button
                        variant="success"
                        onClick={showCreateDialog}
                        size="sm"
                    >
                        Add <i className="fas fa-plus-circle" />
                    </Button>
                </header>
                <GroupDialogs />
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                            Groups Table
                        </h6>
                    </div>
                    <div className="card-body">
                        <GroupsTable />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    showCreateDialog,
    readStreams,
    readFaculties
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Groups);
