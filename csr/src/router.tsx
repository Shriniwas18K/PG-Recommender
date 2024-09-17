import React from 'react';
import { BrowserRouter, Route, Routes,createBrowserRouter,createRoutesFromElements,redirect } from 'react-router-dom';
import SignIn from './pages/Authentication/SignIn';
import Register from './pages/Authentication/Register';
import ErrorPage from './pages/ErrorPage';
import Active from './pages/Dashboard/Property/Active';
import NewPost from './pages/Dashboard/Property/NewPost';
import RemovePost from './pages/Dashboard/Property/RemovePost';
import Update from './pages/Dashboard/Profile/Update';
import Email from './pages/Landing/sections/HelpandSupport/Email';
import Contact from './pages/Landing/sections/HelpandSupport/Contact';
import FAQ from './pages/Landing/sections/HelpandSupport/FAQ/FAQ';
import Landing from './pages/Landing/Landing';
import View from './pages/Dashboard/Profile/View';
import DashboardLayout from './pages/Dashboard/DashboardLayout';
import Notifications from './pages/Dashboard/Notifications/Notifications';
import Hero from './pages/Landing/sections/Hero';

export const routes=createBrowserRouter(
    createRoutesFromElements(
        <><Route path='*' element={<ErrorPage />} /><Route path="/" element={<Landing />}>
        <Route index element={<Hero />} />
        <Route path="help-and-support/email" element={<Email />} />
        <Route path="help-and-support/contact" element={<Contact />} />
        <Route path="help-and-support/FAQs" element={<FAQ />} />
      </Route><Route path="/auth/signin" element={<SignIn />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/dashboard" loader={async () => {
        return localStorage.getItem('appwriteId');
      } }
        element={<DashboardLayout />}>
          <Route path="notifications" element={<Notifications />} />
          <Route path="property/view-active-postings" element={<Active />} />
          <Route path="property/post-new-property" element={<NewPost />} />
          <Route path="property/remove-postings" element={<RemovePost />} />
          <Route path="profile/view-profile" element={<View />} />
          <Route path="profile/update-profile" element={<Update />} />
        </Route></>
    ))