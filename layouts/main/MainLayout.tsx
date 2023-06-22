import Navbar from "@/components/common/navbar";
import React from "react";

const MainLayout = ({ children }: any) => {
  return (
    <main className="container">
      <Navbar />
      <div className="section">{children}</div>
    </main>
  );
};

export default MainLayout;
