import type { ReactNode } from "react";

export const metadata = {
  title: "Admin Dashboard",
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen p-4 bg-gray-50">
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
