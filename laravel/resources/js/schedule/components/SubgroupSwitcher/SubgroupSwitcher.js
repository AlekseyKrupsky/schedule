import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSelectedSubgroup } from "../../ducks/groupSchedule";
import "./index.scss";

const subgroups = [
    { name: "Первая", number: 1 },
    { name: "Вторая", number: 2 }
];

export class SubgroupSwitcher extends Component {
    renderSubgroups() {
        const { updateSelectedSubgroup, selectedSubgroup } = this.props;

        return subgroups.map(({ name, number }) => {
            const isActive = selectedSubgroup === number ? "is-success" : "";

            return (
                <button
                    key={number}
                    className={`button is-rounded ${isActive}`}
                    onClick={() => {
                        updateSelectedSubgroup(number);
                    }}
                >
                    {`${name} (${number})`}
                </button>
            );
        });
    }

    render() {
        return (
            <div className="subgroup-switcher">
                <h6 className="is-size-6 has-text-dark has-text-weight-semibold">
                    Подгруппа
                </h6>
                <div className="subgroup-buttons">{this.renderSubgroups()}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { groupSchedule } = state;
    const { selectedSubgroup } = groupSchedule;

    return {
        selectedSubgroup
    };
};

const mapDispatchToProps = {
    updateSelectedSubgroup
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubgroupSwitcher);
