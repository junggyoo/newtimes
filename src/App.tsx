import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppRoutes from './Routes';
import Layout from '@/components/Layout';

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
