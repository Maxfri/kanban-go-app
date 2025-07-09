import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Board } from "@/features/task/ui/board";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Board />
  </QueryClientProvider>
);
