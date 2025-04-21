import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navi, NoticeHeader} from "../../organisms";

function SgLayout() {

    return (
        <>
            <NoticeHeader />
            <Navi />
            <main>
                <Suspense fallback={"...loading"}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
}

export default SgLayout;
