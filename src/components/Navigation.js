import React from "react";

import data from "../data/dummy";
import { useTab } from "../contexts/TabContext";

function Navigation({ isOpen }) {
    const { activeTab, setActiveTab } = useTab();

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className={`tab-container` }  >
            {/* <div className="tab-buttons"> */}
                {data.map((item, index) => (
                    <button
                        key={item.filename}
                        onClick={() => handleTabClick(index)}
                        className={index === activeTab ? "active" : ""}
                    >
                        {item.filename}
                    </button>
                ))}
            {/* </div> */}
        </div>
    );
}

export default Navigation;
