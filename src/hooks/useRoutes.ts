import { ROUTE, ROUTE_KEY } from '@/constants';
import { useRouter } from 'next/router';

interface TransitionOptions {
  shallow?: boolean;
  locale?: string | false;
  scroll?: boolean;
}

export default function useRoutes() {
  const { push, pathname } = useRouter();

  const navigateHome = () => {
    push(ROUTE.home);
  };

  const navigate = (
    url: ROUTE_KEY,
    as?: ROUTE_KEY,
    options?: TransitionOptions,
  ): Promise<boolean> => {
    return push(url, as, options);
  };

  return {
    pathname,
    navigate,
    push,
    navigateHome,
  };
}
