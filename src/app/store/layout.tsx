import type { ReactNode } from "react";

export const metadata = {
  title: "Storefront",
};

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen p-4">{children}</main>
  );
}
