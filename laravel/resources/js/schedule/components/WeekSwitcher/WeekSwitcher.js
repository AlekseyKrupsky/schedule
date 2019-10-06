import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSelectedWeek } from "../../ducks/weekInfo";
import "./index.scss";

const weeks = [1, 2, 3, 4];

export class WeekSwitcher extends Component {
    renderWeekItems() {
        const { updateSelectedWeek, currentWeek, selectedWeek } = this.props;

        return weeks.map(weekNumber => {
            const isActive = selectedWeek === weekNumber ? "is-success" : "";
            const weekMark = currentWeek === weekNumber ? " (текущая)" : "";

            return (
                <button
                    key={weekNumber}
                    className={`week-list__item button is-rounded ${isActive}`}
                    onClick={() => {
                        updateSelectedWeek(weekNumber);
                    }}
                >
                    {weekNumber} - неделя {weekMark}
                </button>
            );
        });
    }

    render() {
        return (
            <div className="week-switcher">
                <hr className="dropdown-schedule-divider" />
                <h6 className="is-size-6 has-text-dark has-text-weight-semibold">
                    Неделя
                </h6>
                <ul className="week-list">{this.renderWeekItems()}</ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { weekInfo } = state;
    const { currentWeek, selectedWeek } = weekInfo;

    return {
        currentWeek,
        selectedWeek
    };
};

const mapDispatchToProps = {
    updateSelectedWeek
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeekSwitcher);
