import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "../pages/detail";
import Home from "../pages/home";
export default function Routes() {
    const routes = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
    ]);
    return    <RouterProvider router={routes} />;
}
        
    
