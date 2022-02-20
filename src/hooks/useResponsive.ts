import { useMediaQuery } from 'react-responsive';

export const useResponsive = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return { isTabletOrMobile };
};
