import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
 
import Root from '../pages/Root/Root';
import ErrorPages from './../pages/ErrorPages/ErrorPages';
import Home from '../Home/Home';
import Bookdetails from './../pages/Bookdetails/Bookdetails';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        index:true,
        path:"/",
        loader: ()=>fetch('booksData.json'),
        Component: Home,
      },
      {
        path:"/BookDetails/:id",
        loader: ()=>fetch('booksData.json'),
        Component: Bookdetails,
      }
    ]
  },
]);  