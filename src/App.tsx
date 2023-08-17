import Loading from '@/layouts/Loading'

import Home from '@/pages/Home'

import { useLoading } from './hooks/useLoading';
import { useEffect } from 'react';


export default function App() {
  const { loading, delayToClose } = useLoading();
  useEffect(() => delayToClose(5), [])

  return (
    loading ? (
      <Loading loading={loading} />
    ) : (
      <Home />
    )
  );
}
