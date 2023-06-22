import React from "react";

const AuthLayout = ({ children }: any) => {
  return (
    <main className="auth__layout-wrapper">
      <div>{children}</div>
    </main>
  );
};

export default AuthLayout;
