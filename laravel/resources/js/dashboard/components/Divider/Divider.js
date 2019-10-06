import React from 'react';

const Divider = (props) => {
    const { className } = props;
    let dividerStyle = "sidebar-divider ";

    if (className) {
        dividerStyle += className;
    }

    return (
        <hr className={dividerStyle} />
    )
}

export default Divider;
