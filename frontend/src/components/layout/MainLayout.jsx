import { Outlet } from "react-router-dom";
import { LandingHeader } from "./LandingHeader";
import { Footer } from "./Footer";

export const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden overscroll-x-none">
            <LandingHeader />
            <main className="grow pt-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};




