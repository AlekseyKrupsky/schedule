import React, { Component } from "react";
import { connect } from "react-redux";
import { withToastManager } from "react-toast-notifications";
import { resetToasts } from "../../ducks/toasts";

export class ToastManager extends Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.toasts.length) {
            return true;
        }

        return false;
    }

    componentWillUpdate(nextProps) {
        const { toasts, toastManager } = nextProps;

        toasts.forEach(({ content, config }) => {
            toastManager.add(content, config);
        });
    }

    componentDidUpdate() {
        this.props.resetToasts();
    }

    render() {
        return <div />;
    }
}

const mapStateToProps = state => ({
    toasts: state.toasts
});

const mapDispatchToProps = {
    resetToasts
};

export default withToastManager(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(ToastManager)
);
