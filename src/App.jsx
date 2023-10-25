import React, { Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Externals } from "./Externals";
import { lazily } from "react-lazily";
import { lazy } from "react";

// import MarkDown from 'markdown/App'
// import Fulfillment from 'fulfillment/App'

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

const MarkDown = lazy(() => import("markdown/App"));
const Fulfillment = lazy(() => import("fulfillment/App"));

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const Home = () => (
  <div className="mt-28 ml-32 text-3xl mx-auto ">
    <div>App name: Movies</div>
  </div>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Externals>
          <Layout />
        </Externals>
      }
      errorElement={
        <div className="mt-28 ml-32 text-3xl mx-auto ">Movie page is down</div>
      }
    >
      <Route
        index
        element={
          <Externals>
            <Home />
          </Externals>
        }
        errorElement={
          <div className="mt-28 ml-32 text-3xl mx-auto ">
            Movie page is down
          </div>
        }
      />
      <Route
        path="sports"
        element={
          <Externals>
            <MarkDown />
          </Externals>
        }
        errorElement={
          <div className="mt-28 ml-32 text-3xl mx-auto ">
            Sports page is down
          </div>
        }
      />
      <Route
        path="events"
        element={
          <Externals>
            <Fulfillment />
          </Externals>
        }
        errorElement={
          <div className="mt-28 ml-32 text-3xl mx-auto ">
            Event page is down
          </div>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById("app")).render(
  <RouterProvider router={router} />
);
