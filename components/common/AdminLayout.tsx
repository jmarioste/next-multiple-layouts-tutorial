import React, { PropsWithChildren } from "react";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = (props: PropsWithChildren) => {
  return (
    <div>
      <AdminNavbar />
      {props.children}
    </div>
  );
};

export default AdminLayout;
