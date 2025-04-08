import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Career from "./Pages/Career/Career";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/career",
          element: <Career/>,
        },
      ],
    },
    
  ]);
  return <RouterProvider router={router} />;
};

export default App;
