import Header from "../components/app/header/Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/app/footer/Footer.tsx";

const AppLayout = () => {
    return (
        <>
            <Header/>
            <section className="max-w-screen-2xl mx-auto mt-10 p-5">
                <Outlet/>
            </section>
            <Footer/>
        </>
    )
};

export default AppLayout;
