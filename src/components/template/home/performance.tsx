import { useDemoStore } from '@/stores';

export const usePerformance = () => {
  const demoStore = useDemoStore();

  return {
    title: 'Test Store Performance',
    content: (
      <div className="flex justify-center gap-20 text-center">
        <div className="border p-4 rounded-md">
          <h4>Test Performance with {demoStore.totalItemFields} records</h4>
          {demoStore.itemFields.map((i) => {
            return <p key={i}>{i}</p>;
          })}
        </div>
      </div>
    ),
  };
};
