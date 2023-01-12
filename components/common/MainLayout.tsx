import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default MainLayout;
