import React from 'react'
import { SidebarBookmark, SidebarHome, SidebarHub, SidebarShare } from "../assets/svg";

export default function LeftSidebar() {
    return (
        <div className="left-sidebar col-1 col-sm-2">
            <div className="sidebar-icon hs-mt-40"><span><SidebarHome /></span></div>
            <div className="sidebar-icon hs-mt-40"><span><SidebarHub /></span></div>
            <div className="sidebar-icon hs-mt-40"><span><SidebarBookmark /></span></div>
            <div className="sidebar-icon hs-mt-40"><span><SidebarShare /></span></div>
        </div>
    )
}
