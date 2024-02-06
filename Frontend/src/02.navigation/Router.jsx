import { Routes, Route } from "react-router-dom";
import SpaPage from "../03.globals/01.Pages/SpaPage";


function Router() {
    return (
        <Routes>
            <Route path="/" element={<SpaPage />} />
        </Routes>
    )
}

export default Router;