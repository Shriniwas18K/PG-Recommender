import React from "react";
import {Route} from "react-router-dom";
import Active from '../pages/Dashboard/Property/Active';
import NewPost from '../pages/Dashboard/Property/NewPost';
import RemovePost from '../pages/Dashboard/Property/RemovePost';
import Update from '../pages/Dashboard/Profile/Update';
import View from '../pages/Dashboard/Profile/View';
import DashboardLayout from '../pages/Dashboard/DashboardLayout';
import Notifications from '../pages/Dashboard/Notifications/Notifications';

export const privateRoutes = (
    <Route path="/dashboard/"id="dashboard" element={<DashboardLayout />}>
      <Route path="notifications" element={<Notifications />} />
      <Route path="property/view-active-postings" element={<Active />} />
      <Route path="property/post-new-property" element={<NewPost />} />
      <Route path="property/remove-postings" element={<RemovePost />} />
      <Route path="profile/view-profile" element={<View />} />
      <Route path="profile/update-profile" element={<Update />} />
    </Route> 
)