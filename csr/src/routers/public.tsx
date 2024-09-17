import React from "react";
import { createRoutesFromElements, Route, Routes } from "react-router-dom";
import Email from '../pages/Landing/sections/HelpandSupport/Email';
import Contact from '../pages/Landing/sections/HelpandSupport/Contact';
import FAQ from '../pages/Landing/sections/HelpandSupport/FAQ/FAQ';
import Landing from '../pages/Landing/Landing';
import Hero from '../pages/Landing/sections/Hero';
import SignIn from '../pages/Authentication/SignIn';
import Register from '../pages/Authentication/Register';
import Error from '../pages/Error';

export const publicRoutes = (
    <>
        <Route path="/" id="landing" element={<Landing />}>
        <Route index element={<Hero />} />
        <Route path="help-and-support/email" element={<Email />} />
        <Route path="help-and-support/contact" element={<Contact />} />
        <Route path="help-and-support/FAQs" element={<FAQ />} />
        </Route>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="*" element={<Error/>}/>
    </>
)