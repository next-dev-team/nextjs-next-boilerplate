import { useSettingsStore } from '@/stores';
import { Button } from 'components-next';

export const useTailwind = () => {
  const state = useSettingsStore();

  return {
    title: 'Tailwind & Dark Mode',
    content: (
      <div className="flex-col p-4 rounded-lg flex justify-center items-center bg-gray-100 dark:bg-black dark:text-white">
        <h1 className="mb-4 capitalize">
          Current Theme: <span className="font-bold">{state.colorScheme}</span>
        </h1>
        <div className="flex justify-center gap-4">
          <Button
            variant={state.colorScheme === 'dark' ? 'primary' : 'outline'}
            onClick={() => state.setColorScheme('dark')}
          >
            Dark
          </Button>
          <Button
            variant={state.colorScheme === 'light' ? 'primary' : 'outline'}
            onClick={() => state.setColorScheme('light')}
          >
            Light
          </Button>
          <Button
            variant={state.colorScheme === 'system' ? 'primary' : 'outline'}
            onClick={() => state.setColorScheme('system')}
          >
            System
          </Button>
        </div>
      </div>
    ),
  };
};
