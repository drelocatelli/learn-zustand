import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Test from "./Test";

export default function Router() {
    return(
        <BrowserRouter>
            <Link to="/">Home</Link> <Link to="/test">Test</Link> <br /><br />
            <Routes>
                <Route index element={<App />} />
                <Route path='/test' element={<Test />} />
            </Routes>
        </BrowserRouter>
    );
}