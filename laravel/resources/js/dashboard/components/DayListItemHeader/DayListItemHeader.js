import React, { Component } from "react";
import { days } from "../../config/main";
import './index.css';

class DayListItemHeader extends Component {
    render() {
        const { dayNumber, date } = this.props;
        const dayName = days[dayNumber];

        return (
            <header className="day-list__item-header">
                <span className="item-header__date">{ date }</span>
            </header>
        );
    }
}

export default DayListItemHeader;
