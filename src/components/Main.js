import React from "react";
import { useTab } from "../contexts/TabContext";

function Main() {
    const { tabData } = useTab();
    return (
        <div>
            <div className="tab-content">
                <p>{tabData.content}</p>
            </div>
        </div>
    );
}

export default Main;
