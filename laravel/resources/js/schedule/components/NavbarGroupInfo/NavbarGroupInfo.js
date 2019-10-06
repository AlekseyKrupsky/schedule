import React from "react";
import { connect } from "react-redux";

const NavbarGroupInfo = ({ schedule, selectedWeek, selectedSubgroup }) => {
    const { isLoading, group } = schedule;

    return (
        <div className="group-info">
            {group ? (
                <h4 className="entity-name has-text-black">
                    {group.name} - {selectedSubgroup}
                </h4>
            ) : isLoading ? (
                "loading"
            ) : (
                <h4 className="entity-name has-text-black">Пусто :(</h4>
            )}
            <span>{selectedWeek}-я учебная неделя</span>
        </div>
    );
};

const mapStateToProps = state => {
    const { weekInfo, groupSchedule } = state;
    const { selectedWeek } = weekInfo;
    const { selectedSubgroup } = groupSchedule;

    return {
        schedule: groupSchedule,
        selectedWeek,
        selectedSubgroup
    };
};

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarGroupInfo);
