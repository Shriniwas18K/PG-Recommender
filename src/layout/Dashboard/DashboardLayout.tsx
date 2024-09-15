import React from "react";
import { Outlet } from "react-router-dom";
import DrawerAppBar from "./Nav/DrawerAppBar";

export default function DashboardLayout() {
    return (
        <>
            <DrawerAppBar />
            <Outlet/>
        </>
    )
}