import React from "react";
import styles from "../styles/humburger.module.css";

function Header({ isOpen, setIsOpen }) {

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <header>
            <h1>Logo</h1>

            <div
                className={`${styles["menu-icon"]} ${ isOpen ? styles["open"] : "" }`}
                onClick={toggleMenu}
            >
                <div className={styles["bar"]}></div>
                <div className={styles["bar"]}></div>
                <div className={styles["bar"]}></div>
            </div>
        </header>
    );
}

export default Header;
