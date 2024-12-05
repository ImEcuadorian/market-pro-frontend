import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppLayout from "./layouts/AppLayout.tsx";
import DashboardView from "./views/DashboardView.tsx";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<DashboardView/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default Router;
