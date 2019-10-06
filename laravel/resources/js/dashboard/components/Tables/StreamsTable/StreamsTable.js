import React, { Component } from "react";
import { connect } from "react-redux";
import { readStreams } from "../../../ducks/streams";
import StreamsTableHeader from "./StreamsTableHeader";
import StreamsTableRow from "./StreamsTableRow";

export class StreamsTable extends Component {
    componentDidMount() {
        this.props.readStreams();
    }

    renderRows() {
        const { items } = this.props;
        return items.map(item => {
            return <StreamsTableRow key={item.id} data={item} />;
        });
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    <StreamsTableHeader />
                    <tbody>{this.renderRows()}</tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.streams.items
});

const mapDispatchToProps = {
    readStreams
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StreamsTable);
