import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav class="bg-blue-200 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            BookMyTicket
          </span>
        </Link>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium  md:flex-row md:space-x-8  ">
            <li>
              <Link to="/" class="mr-4 hover:underline md:mr-6 ">
                Movies
              </Link>
            </li>
            <li>
              <Link to="sports" class="mr-4 hover:underline md:mr-6 ">
                Sports
              </Link>
            </li>
            <li>
              <Link to="events" class="mr-4 hover:underline md:mr-6 ">
                Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
