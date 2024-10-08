"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, useState } from "react";

interface ReactQueryProviderProps {
  children: React.ReactNode;
}

const ReactQueryProvider: FC<ReactQueryProviderProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={new QueryClient()}>
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
