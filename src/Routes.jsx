import { memo, lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./components/templates/DefaultLayout";
import NoticeLayout from "./components/templates/NoticeLayout";


const MemoLayout = memo(Layout);
const NoticeMemoLayout = memo(NoticeLayout);
const BoardListA = lazy(() => import("@pages/Board/listA"));
const BoardListB = lazy(() => import("@pages/Board/listB"));
const BoardView = lazy(() => import("@pages/Board/view"));

const Writing = lazy(() => import("@pages/Notice/writing"));
const Receive = lazy(() => import("@pages/Notice/receive"));

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
        path: "/notice",
        element: <Navigate to="/notice/writing" replace />,
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
    {
        path: "/notice",
        element: <NoticeMemoLayout />,
        children: [
            {
                path: "writing",
                element: <Writing />
            },
            {
                path: "receive",
                element: <Receive />
            }
        ]
    }
]);
