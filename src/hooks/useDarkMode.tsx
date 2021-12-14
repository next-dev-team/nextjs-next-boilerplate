import { COLOR_SCHEME_QUERY } from '@/constants';
import { useSettingsStore } from '@/stores';
import { useIsomorphicLayoutEffect } from 'ahooks';
import { isBrowser } from 'components-next/lib';
import useMediaQuery from './useMediaQuery';

const useDarkMode = () => {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const { colorScheme, setColorScheme } = useSettingsStore();

  const setLight = () => isBrowser && document.documentElement.classList.remove('dark');
  const setDark = () => isBrowser && document.documentElement.classList.add('dark');

  useIsomorphicLayoutEffect(() => {
    if (isBrowser && colorScheme === 'dark') {
      setColorScheme('dark');
      setDark?.();
    } else if (colorScheme === 'system') {
      setColorScheme('system');
      if (isDarkOS) {
        setDark?.();
      } else {
        setLight?.();
      }
    } else {
      setLight?.();
      setColorScheme('light');
    }
  }, [colorScheme, isDarkOS]);

  return isDarkOS;
};

export default useDarkMode;
