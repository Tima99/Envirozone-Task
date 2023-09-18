import { TabProvider } from "./contexts/TabContext";
import Home from "./pages/Home";
import "./App.css";

function App() {
    return (
        <TabProvider>
            <div className="layout-container">
                <Home></Home>
            </div>
        </TabProvider>
    );
}

export default App;
