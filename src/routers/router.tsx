import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import SignIn from '../pages/Authentication/SignIn'
import Register from '../pages/Authentication/Register'
import ErrorPage from '../pages/ErrorPage'
import Active from '../pages/Dashboard/Property/Active'
import NewPost from '../pages/Dashboard/Property/NewPost'
import RemovePost from '../pages/Dashboard/Property/RemovePost'
import Update from '../pages/Dashboard/Profile/Update'
import Email from '../pages/Dashboard/HelpandSupport/Email'
import Contact from '../pages/Dashboard/HelpandSupport/Contact'
import FAQs from '../pages/Dashboard/HelpandSupport/FAQs'
import Landing from '../pages/Landing'
import View from '../pages/Dashboard/Profile/View'
import DashboardLayout from '../layout/Dashboard/DashboardLayout'
import Notifications from '../pages/Dashboard/Notifications/Notifications'

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Landing/>,
        errorElement:<ErrorPage/>
    },{
        path:"/auth/signin",
        element:<SignIn/>
    },{
        path:"/auth/register",
        element:<Register/>
    },{
        path:"/dashboard",
        element:<DashboardLayout/>,
        children:[
            {
                path:"dashboard/notifications",
                element:<Notifications/>
            },{
                path:"/dashboard/property/view-active-postings",
                element:<Active/>
            },{
                path:"/dashboard/property/post-new-property",
                element:<NewPost/>
            },{
                path:"/dashboard/property/remove-postings",
                element:<RemovePost/>
            },{
                path:"/dashboard/profile/view-profile",
                element:<View/>
            },{
                path:"/dashboard/profile/update-profile",
                element:<Update/>
            },{
                path:"/dashboard/help-and-support/email",
                element:<Email/>
            },{
                path:"/dashboard/help-and-support/contact",
                element:<Contact/>
            },{
                path:"/dashboard/help-and-support/FAQs",
                element:<FAQs/>
            }
        ]
    }
  ]);