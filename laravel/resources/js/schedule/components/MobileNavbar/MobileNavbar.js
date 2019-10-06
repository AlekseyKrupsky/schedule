import React, { Component } from "react";
import { connect } from "react-redux";
import { GroupScheduleModal } from "../GroupSheduleModal";
import { BackToSearchEntityBtn } from "../BackToSearchEntityBtn";
import { NavbarGroupInfo } from "../NavbarGroupInfo";
import { NavbarTeacherInfo } from "../NavbarTeacherInfo";
import { entities } from "../../config/routes";
import "./index.scss";

export class MobileNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({
            isModalOpen: true
        });
    }

    closeModal() {
        this.setState({
            isModalOpen: false
        });
    }

    render() {
        const { openModal, closeModal } = this;
        const { isModalOpen } = this.state;
        const { entity } = this.props;

        return (
            <div className="mobile-navbar">
                <GroupScheduleModal
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                />
                <BackToSearchEntityBtn />
                <div className="group-info-container">
                    {entity === entities.groups ? <NavbarGroupInfo /> : ""}
                    {entity === entities.teachers ? <NavbarTeacherInfo /> : ""}
                </div>
                <span className="dropdown-group-info__icon" onClick={openModal}>
                    menu
                    <i class="fas fa-bars fa-lg" />
                </span>
            </div>
        );
    }
}

const mapStateToProps = ({ searchEntity }) => ({
    entity: searchEntity.entity
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MobileNavbar);
