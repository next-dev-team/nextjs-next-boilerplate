import { Collapse, Panel } from 'components-next';
import React from 'react';
import { useApolloGraph } from './apolloGraph';
import { useComponent } from './component';
import { useI18nDemo } from './i18nNext';
import { usePerformance } from './performance';
import { useTailwind } from './tailwind';
import { useStateManagement } from './useStateManagement';

const IndexPageTemplate = () => {
  const demoData: { title?: any; content?: any }[] = [
    useComponent(),
    useTailwind(),
    useI18nDemo(),
    useApolloGraph(),
    useStateManagement(),
    usePerformance(),
  ];

  return (
    <>
      <Collapse accordion destroyInactivePanel>
        {demoData.map((i) => {
          return (
            <Panel header={i.title} panelKey={i.title} key={i.title}>
              {i.content}
            </Panel>
          );
        })}
      </Collapse>

      {/* <div className="mt-32">{demoData[1].content}</div> */}
    </>
  );
};

export default IndexPageTemplate;
