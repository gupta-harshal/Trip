import React from "react";
import Home from "./Home.jsx"
import {createBrowserRouter, Route, RouterProvider} from 'react-router-dom'
import Signup from "./Signup.jsx";
const App=()=>{
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/signup',
      element:<Signup/>
    }])
  return(
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
};

export default App;