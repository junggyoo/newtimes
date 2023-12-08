import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Layout from '@/components/layout';

import AppRoutes from './Routes';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <AppRoutes />
      </Layout>
    </QueryClientProvider>
  );
}
