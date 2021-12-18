import { Collapse, Panel } from 'components-next';
import React from 'react';
import { useApolloGraph } from './apolloGraph';
import { useCodeConvention } from './codeConvention';
import { useComponent } from './component';
import { useDevNDeploy } from './dev&deploy';
import { useEnv } from './env';
import { useHook } from './hooks';
import { useI18nDemo } from './i18nNext';
import { useLibrary } from './library';
import { usePerformance } from './performance';
import { useReadme } from './readme';
import { useSetup } from './setUp';
import { useStructure } from './structure';
import { useTailwind } from './tailwind';
import { useTutorial } from './tutorial';
import { useStateManagement } from './useStateManagement';
import { useUtils } from './utils';

const IndexPageTemplate = () => {
  const demoData: { title?: any; content?: any }[] = [
    useReadme(),
    useLibrary(),
    useComponent(),
    useTailwind(),
    useSetup(),
    useEnv(),
    useHook(),
    useUtils(),
    useStructure(),
    useCodeConvention(),

    useI18nDemo(),
    useApolloGraph(),
    useStateManagement(),
    usePerformance(),
    useTutorial(),
    useDevNDeploy(),
  ];

  return (
    <>
      <Collapse accordion>
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
