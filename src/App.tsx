/* eslint-disable @typescript-eslint/no-unused-vars */
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect, useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { User, signOut } from "firebase/auth";
import { auth } from "./config/firebase";
import { ToastContainer, toast } from "react-toastify";

import Homepage from "./Components/pages/Homepage";
import Login from "./Components/pages/Login";
import SignUp from "./Components/pages/SignUp";
import Reset from "./Components/pages/Reset";
import TrimUrl from "./Components/pages/TrimUrl";
import Redirect from "./Components/pages/Redirect";
import PrivateRoutes from "./Components/Helpers/PrivateRoutes";
import ErrorPage from "./Components/pages/ErrorPage";

export interface PostContextValue {
  setUser: (user: User) => void;
  user: User | null;
  logIn: boolean;
  setLogin: (logIn: boolean) => void;
  handleLogout: () => void;
}

const initialPostContextValue: PostContextValue = {
  setUser: (_user: User) => {},
  user: null,
  logIn: false,
  setLogin: (_logIn: boolean) => {},
  handleLogout: () => {},
};

export const PostContext = createContext<PostContextValue>(
  initialPostContextValue
);

/*
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
*/
function App() {
  const [user, setUser] = useState<User | null>(null);
  const [logIn, setLogin] = useState(true);
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setOnline(true);
      toast.dismiss("offline-toast");
      toast.success("You are now connected to the internet!", {
        position: "top-center",
        autoClose: 3000,
      });
    };

    const handleOffline = () => {
      setOnline(false);
      toast.error("You are not connected to the internet!", {
        position: "top-center",
        autoClose: false,
        toastId: "offline-toast",
      });
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [online]);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <BrowserRouter>
      <PostContext.Provider
        value={{
          user,
          setUser,
          logIn,
          setLogin,
          handleLogout,
        }}
      >
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Homepage PostContext={PostContext} />} />
          <Route path="/login" element={<Login PostContext={PostContext} />} />
          <Route
            path="/signup"
            element={<SignUp PostContext={PostContext} />}
          />
          <Route path="/reset" element={<Reset />} />
          <Route path="/:slug" element={<Redirect />} />
          <Route element={<PrivateRoutes />}>
            <Route
              path="/trim"
              element={<TrimUrl PostContext={PostContext} />}
            />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </PostContext.Provider>
    </BrowserRouter>
  );
}

export default App;
