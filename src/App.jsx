import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Consulting from "./pages/Consulting";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/consulting" element={<Consulting />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/team" element={<Team />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
}
