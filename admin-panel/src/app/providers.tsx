import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./queryClient"
import type { ReactNode } from "react"
import { Toaster } from "sonner"

type Props = {
  children: ReactNode
}

export function Providers({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster />
    </QueryClientProvider>
  )
}