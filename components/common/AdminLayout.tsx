import React, { PropsWithChildren } from "react";
import AdminNavbar from "./AdminNavbar";
const AdminLayout = (props: PropsWithChildren) => {
  return (
    <>
      <AdminNavbar />
      {props.children}
    </>
  );
};
export default AdminLayout;
