import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import {
    showUpdateDialog,
    showDeleteDialog
} from "../../../ducks/dialogs/roomDialogs";

class RoomsTableRow extends Component {
    constructor(props) {
      super(props)
    
      this.handleEditButton = this.handleEditButton.bind(this);
      this.handleDeleteButton = this.handleDeleteButton.bind(this);
    }
    
    handleEditButton() {
        const { showUpdateDialog, data } = this.props;
        showUpdateDialog(data);
    }

    handleDeleteButton() {
        const { showDeleteDialog, data } = this.props;
        showDeleteDialog(data);
    }

    render() {
        const { data } = this.props;
        return (
            <tr>
                <th scope="row">{data.location}</th>
                <td>
                    <Button
                        onClick={this.handleEditButton}
                        variant="info"
                        size="sm"
                        value
                        className="btn-circle mr-2"
                    >
                        <i className="fas fa-pencil-alt" />
                    </Button>
                    <Button
                        onClick={this.handleDeleteButton}
                        variant="danger"
                        size="sm"
                        className="btn-circle"
                    >
                        <i className="fas fa-trash" />
                    </Button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    showUpdateDialog,
    showDeleteDialog
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoomsTableRow);
