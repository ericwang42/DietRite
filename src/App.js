import Navbar from "./Navbar";
import Home from "./Home";
import Calculator from "./Calculator";
import MealPlanner from "./MealPlanner";
import {Route, Routes} from "react-router-dom";

function App() {
    
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Calculator" element={<Calculator />} />
                    <Route path="/MealPlanner" element={<MealPlanner />} />
                </Routes>
            </div>
        </>
    )
}

export default App;