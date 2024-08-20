import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from './Layout.jsx';
import Home from "./component/Home/home.jsx";
import About from "./component/About/About.jsx";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Router, RouterProvider } from "react-router-dom";
import Contact from "./component/Contact/contact.jsx";
import User from "./component/User/user.jsx";
import Github from "./component/Github/gtihub.jsx"

//1 Method to creating a route

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path : "user/:userId",
        element: <User />
      },
      {
        path : "github",
        element: <Github />
      }
    ],
  },
]);

//2 Method to creating a route

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Router path='/' element={<Layout />}>
//       <Router path='' element={<Home />} />
//       <Router path='about' element={<About />} />
//       <Router path='contact' element={<Contact />} />

//     </Router>
//   )
// )


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
