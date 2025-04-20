import { RouterProvider } from "react-router-dom";
import { HeaderProvider } from "@context/HeaderContext";
import { Route } from "./Routes";

function App() {
    return (
        <HeaderProvider>
            <RouterProvider router={Route} />
        </HeaderProvider>
    );
}

export default App;
