import AdminLayout from "./AdminLayout";
import MainLayout from "./MainLayout";

export const Layouts = {
  Main: MainLayout,
  Admin: AdminLayout,
};

export type LayoutKeys = keyof typeof Layouts;
