import { useDemoStore } from '@/stores';

export const useComponent = () => {
  const demoStore = useDemoStore();

  return {
    title: 'Components',
    content: (
      <div className="flex justify-center gap-20 text-center">
        <iframe
          className="h-[100vh] w-full"
          src="https://components-next.netlify.app/components/card/blog"
        />
      </div>
    ),
  };
};
