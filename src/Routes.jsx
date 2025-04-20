import { memo, lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./components/templates/DefaultLayout";

const MemoLayout = memo(Layout);
const BoardListA = lazy(() => import("@pages/Board/listA"));
const BoardListB = lazy(() => import("@pages/Board/listB"));
const BoardView = lazy(() => import("@pages/Board/view"));

export const Route = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/board/people" replace />,
    },
    {
        path: "/board",
        element: <Navigate to="/board/people" replace />,
    },
    {
        path: "/board",
        element: <MemoLayout />,
        children: [
            {
                path: "people",
                children: [
                    {
                        path: "",
                        element: <BoardListA />,
                    },
                    {
                        path: ":id",
                        element: <BoardView />,
                    },
                ],
            },
            {
                path: "member",
                children: [
                    {
                        path: "",
                        element: <BoardListB />,
                    },
                    {
                        path: ":id",
                        element: <BoardView />,
                    },
                ],
            },
        ],
    },
]);
