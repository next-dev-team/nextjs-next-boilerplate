import { Section } from '@/components/module';
import Layout from '@/components/module/Layout';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const content = require('../docs/allDocs.md');

function Docs() {
  console.log('markdown');

  return (
    <Layout>
      <Section hasMt>
        <ReactMarkdown
          className="markdown-body px-10"
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content?.default}
        </ReactMarkdown>
      </Section>
    </Layout>
  );
}
export default Docs;
