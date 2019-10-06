import React, { Component } from "react";
import { connect } from "react-redux";
import { SubgroupSwitcher } from "../SubgroupSwitcher";
import { WeekSwitcher } from "../WeekSwitcher";
import "./index.scss";

export class GroupScheduleModal extends Component {
    render() {
        const { closeModal, isOpen } = this.props;

        return (
            <div className={isOpen ? "modal is-active" : "modal"}>
                <div className="modal-background" onClick={closeModal} />
                <div className="modal-content">
                    <button
                        className="modal-close is-large"
                        aria-label="close"
                        onClick={closeModal}
                    />
                    <div className="dropdown-schedule-info box">
                        <SubgroupSwitcher />
                        <WeekSwitcher />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupScheduleModal);
