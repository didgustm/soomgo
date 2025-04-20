import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Navi } from "../../organisms";
import { useHeader } from "@context/HeaderContext";

function Layout() {
    const { title, bookmark } = useHeader();

    return (
        <>
            <Header title={title} bookmark={bookmark} />
            <Navi />
            <main>
                <Suspense fallback={"...loading"}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
}

export default Layout;
