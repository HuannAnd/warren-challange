import { Loading } from '@/components'

import Home from '@/pages/Home'

import { useLoading } from './hooks/useLoading';


export default function App() {
  const { loading, delayToClose } = useLoading();
  delayToClose(5);

  return (
    loading ? (
      <Loading loading={loading} />
    ) : (
      <Home />
    )
  );
}
