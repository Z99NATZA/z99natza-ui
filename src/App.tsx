import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Ai from "@/pages/Ai";
import MainLayout from "./components/layout/MainLayout";

export default function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ai" element={<Ai />} />
            </Routes>
        </MainLayout>
    );
}
