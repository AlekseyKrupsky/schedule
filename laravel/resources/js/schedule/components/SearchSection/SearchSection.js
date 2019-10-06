import React, { Component } from "react";
import { connect } from "react-redux";
import { updateFilter, resetFilter } from "../../ducks/searchFilter";

export class SearchSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: ""
        };

        this.inputHandler = this.inputHandler.bind(this);
    }

    componentWillUnmount() {
       // this.props.resetFilter();
    }

    inputHandler(event) {
        const value = event.target.value;

        this.setState({
            filter: value
        });

        this.props.updateFilter(value);
    }

    render() {
        const { filter } = this.state;

        return (
            <div class="field has-addons">
                <p class="control">
                    <input
                        class="input"
                        type="text"
                        placeholder="Find a group"
                        value={filter}
                        onChange={this.inputHandler}
                    />
                </p>
                <p class="control">
                    <button class="button"><i class="fas fa-search"></i></button>
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    updateFilter,
    resetFilter
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchSection);
