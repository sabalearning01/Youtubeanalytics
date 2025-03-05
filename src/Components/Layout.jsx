import React from "react";
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import Rightsidebar from "./Rightsidebar";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Fixed Header */}
      <Header />

      {/* Page Layout */}
      <div className="flex">
        {/* Left Sidebar */}
        <Leftsidebar />

        {/* Main Content */}
        <div className="flex-1">{children}</div>

        {/* Right Sidebar */}
        <Rightsidebar />
      </div>
    </div>
  );
};

export default Layout;
