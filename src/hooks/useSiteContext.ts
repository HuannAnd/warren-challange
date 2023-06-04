import { useContext } from 'react';
import { SiteContext } from '@/contexts/SiteContextProvider';

const useSiteContext = () => {
  return useContext(SiteContext);
};

export default useSiteContext;