import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Card from './Components/Card/Card';
import Statistics from './Components/Statistics/Statistics';
import Common from './Components/Layout/Common';
import Applied from './Components/Applied/Applied';
import Blog from './Components/Blog/Blog';
import Banner from './Components/Banner/Banner';
import NotFound from './Components/NotFound/NotFound';

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      // element:<Common></Common>,
   
     
      children:[
        // {
        //   path:'/',
        //   element:<Main></Main>
        // },

        // {
        //   path:'/home',
        //   element:<Home></Home>,
         
        // },

        // {
        //   path:'home',
        //   element:<Home></Home>,
        // },
        // {
        //   path:'/',
        //   element:<Card></Card>
        // },
        
        {
          path:'statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'applied',
          element:<Applied></Applied>,
          loader: () => fetch('featuresData.json'),

        },
        {
          path:'blog',
          element:<Blog></Blog>
        },
        {
          path:'statistics',
          element:<Banner></Banner>
        },
        {
          path:'*',
          element:<NotFound></NotFound>
        }
      ]
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
