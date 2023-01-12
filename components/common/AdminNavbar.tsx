import Link from "next/link";
import React from "react";

const AdminNavbar = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Admin</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/admin">Dashboard</Link>
          </li>
          <li>
            <Link href="/admin/users">Users</Link>
          </li>
          <li>
            <Link href="/">Back to Website</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminNavbar;
