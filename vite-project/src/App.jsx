import { Routes, Route } from "react-router-dom";
import Logdata from "./pages/Logdata";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Logdata />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
