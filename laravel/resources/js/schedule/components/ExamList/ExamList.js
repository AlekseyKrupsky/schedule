import React, { Component } from "react";
import { connect } from "react-redux";

export class ExamList extends Component {
    render() {
        console.log("ExamList");
        
        return <div>ExamList</div>;
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExamList);
