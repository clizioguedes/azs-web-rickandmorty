"use client";

import { EpisodesProvider } from "@/contexts/episodes.context";
import client from "@/services/api";
import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};
export default function Providers({ children }: ProvidersProps) {
  return (
    <ApolloProvider client={client}>
      <EpisodesProvider>{children}</EpisodesProvider>
    </ApolloProvider>
  );
}
