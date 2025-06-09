import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
 
import Root from '../pages/Root/Root';
import ErrorPages from './../pages/ErrorPages/ErrorPages';
import Home from '../Home/Home';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        index:true,
        path:"/",
        Component: Home,
      },
    ]
  },
]);  