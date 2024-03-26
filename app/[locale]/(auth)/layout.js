import Header from "@/components/Header/Header";
import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="auth">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
