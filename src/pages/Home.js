import React, { useState } from "react";
import Main from "../components/Main";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Header setIsOpen={setIsOpen} isOpen={isOpen}></Header>

            <div className="container">
                <nav className={isOpen ? "open" : ""}>
                    <Navigation></Navigation>
                </nav>
                <main>
                    <Main></Main>
                </main>
            </div>
        </>
    );
}

export default Home;
