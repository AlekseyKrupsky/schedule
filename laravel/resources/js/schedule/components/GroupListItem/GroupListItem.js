import React from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import {updateSelectedSubgroup} from "../../ducks/groupSchedule"

const GroupListItem = (props) => {
    const {id, name} = props.data;
    const {updateSelectedSubgroup} = props;

    return (
        <div className="is-flex">
            <div class="field is-grouped">
                <p class="control" onClick={()=>{
                    updateSelectedSubgroup(1)
                }}>
                    <Link
                        class="button is-primary"
                        to={`/schedule/groups/${id}/lessons`}
                    >
                        {name} - 1
                    </Link>
                </p>
                <p class="control" onClick={()=>{
                    updateSelectedSubgroup(2)
                }}>
                    <Link
                        class="button is-primary"
                        to={`/schedule/groups/${id}/lessons`}
                    >
                        {name} - 2
                    </Link>
                </p>
            </div>
            <hr />
        </div>
    );
};

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    updateSelectedSubgroup
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupListItem)

