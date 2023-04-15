import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ContactForm from "./pages/ContactForm";
import NoPage from "./pages/NoPage";


import React from "react";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Register />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/ContactForm" element={<ContactForm isEdit={false} />} />
                <Route path="/ContactForm/:id" element={<ContactForm isEdit={true} />} />
                <Route path="*" element={<NoPage />} />
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>

    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
