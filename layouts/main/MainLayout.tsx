import React from "react";

const MainLayout = ({ children }: any) => {
  return (
    <main>
      <h3>this is Layout</h3>
      <div>{children}</div>
    </main>
  );
};

export default MainLayout;
