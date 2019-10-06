import React from "react";
import { Link } from "react-router-dom";

const SidebarDropdown = props => {
    const { headerText, items, isOpen } = props;
    let styles = "collapse";

    if (isOpen) {
        styles += " show";
    }

    return (
        <div className={styles} onClick={(e)=>{
            e.stopPropagation()
        }}>
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">{headerText}</h6>
                {items.map(({ value, link }, index) => {
                    return (
                        <Link key={index} className="collapse-item" to={link}>
                            {value}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default SidebarDropdown;
