"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      {children}
      <Footer />
    </QueryClientProvider>
  );
};

export default RootLayout;
