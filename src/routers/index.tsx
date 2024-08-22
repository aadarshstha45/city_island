import LayoutWrapper from "@/layout";
import { About, Contact, Gallery, Home, Menu, Testimonial } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/testimonial",
        element: <Testimonial />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
    ],
  },
]);

export default router;
