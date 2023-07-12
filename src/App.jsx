import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MarkDown from 'markdown/App'
import Fulfillment from 'fulfillment/App'
import "./index.scss";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";


const Layout = () => {
  return (<div>
    <Header />
     <main>
      <Outlet />
     </main>
    <Footer />
  </div>)
}

const Home = () => (<p>Home</p>)


const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="markdown" element={<MarkDown />} />
      <Route path="fulfillment" element={<Fulfillment />} />
    </Route>
   )
);

createRoot(document.getElementById("app")).render(
  <RouterProvider router={router} />
);

