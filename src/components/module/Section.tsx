import { clx } from '@/utils';
import type { ReactNode } from 'react';
import React from 'react';

type Props = {
  children?: ReactNode;
  /**
   * container clx
   */
  className?: string;
  clxTopTitle?: string;
  clxTitle?: string;
  title?: string;
  topTitle?: string;
};

const Section = ({ children, className, clxTopTitle, clxTitle, topTitle, title }: Props) => {
  return (
    <section className={clx('lg:py-14 py-10 px-8 lg:px-0  mx-auto', className)}>
      {topTitle && (
        <h3
          className={clx(
            'text-2xl tracking-widest text-green-600 text-center uppercase',
            clxTopTitle,
          )}
        >
          {topTitle}
        </h3>
      )}

      {title && (
        <h1
          className={clx(
            'mt-4 text-center sm:text-4xl text-2xl text-green-600 font-bold pb-14',
            clxTitle,
          )}
        >
          {title}
        </h1>
      )}
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default Section;
