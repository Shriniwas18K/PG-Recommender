import React, { useEffect } from "react";
import { Navigate,Outlet, useLoaderData } from "react-router-dom";
import DrawerAppBar from "./shared/Nav/DrawerAppBar";
import { account } from "../../utils/appwrite";
export default function DashboardLayout() {
  const activeUserOnDevice=useLoaderData();
    useEffect(() => {
        const handleTabClose = event => {
          event.preventDefault();
            account.deleteSession('current');
        };
    
        window.addEventListener('beforeunload', handleTabClose);
    
        return () => {
          window.removeEventListener('beforeunload', handleTabClose);
        };
      }, []);
    return activeUserOnDevice===null ? <Navigate to={'/auth/signin'}/>:(
        <>
            <DrawerAppBar />
            <Outlet/>
        </>
    )
}