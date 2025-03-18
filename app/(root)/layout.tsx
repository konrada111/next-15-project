import { ReactNode } from "react";
import Navbar from "@/app/shared/components/navbar/navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
