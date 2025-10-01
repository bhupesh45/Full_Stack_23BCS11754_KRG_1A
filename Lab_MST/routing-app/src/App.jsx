import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Form from "./pages/Form";

function App() {
    return (
        <BrowserRouter>
            <nav className="bg-gray-800 text-white p-4 flex space-x-4">
                <Link to="/" className="hover:text-yellow-300">
                    Home
                </Link>
                <Link to="/about" className="hover:text-yellow-300">
                    About
                </Link>
                <Link to="/contact" className="hover:text-yellow-300">
                    Contact
                </Link>
                <Link to="/form" className="hover:text-yellow-300">
                    Form
                </Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/form" element={<Form />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
