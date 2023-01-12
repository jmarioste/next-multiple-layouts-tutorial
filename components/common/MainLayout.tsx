import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
