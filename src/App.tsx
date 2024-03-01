import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./Components/pages/Homepage";
import Login from "./Components/pages/Login";
import SignUp from "./Components/pages/SignUp";
import { ToastContainer } from "react-toastify";
import Reset from "./Components/pages/Reset";
import TrimUrl from "./Components/pages/TrimUrl";
import Redirect from "./Components/pages/Redirect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  {
    path: "/trim",
    element: <TrimUrl />,
  },
  {
    path: "/:slug",
    element: <Redirect/>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
