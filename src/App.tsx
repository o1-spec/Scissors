import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./Components/pages/Homepage";
import Login from "./Components/pages/Login";
import SignUp from "./Components/pages/SignUp";
import { ToastContainer } from "react-toastify";

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
