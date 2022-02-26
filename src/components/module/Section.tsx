import { ISkeleton, Skeleton } from '@/components/atoms';
import { colors } from '@/constants';
import { clx } from '@/utils';
import { ArrowRightOutlined } from '@ant-design/icons';
import React, { isValidElement, ReactNode } from 'react';

export type ISectionProps = {
  children?: ReactNode;
  /**
   * container clx
   */
  className?: string;
  clxTopTitle?: string;
  clxTitle?: string;
  title?: string;
  topTitle?: string;
  isFull?: boolean;
  loading?: boolean;
  skeletonProps?: ISkeleton;
  skeletonSize?: ISkeleton['size'];
  hasMt?: boolean;
  showFooter?: boolean;
  footerSeeMore?: boolean;
  noSpacing?: boolean;
  bgTransparent?: boolean;
  onClickSeeMore?: () => void;
};

export const Section = ({
  children,
  className = '',
  clxTopTitle,
  clxTitle,
  topTitle,
  title,
  isFull,
  loading,
  skeletonProps,
  skeletonSize = 'xl',
  hasMt,
  showFooter,
  footerSeeMore,
  onClickSeeMore,
  noSpacing,
  bgTransparent,
}: ISectionProps) => {
  return (
    <>
      <section
        className={clx(
          // if user pass bg- it will override
          !bgTransparent &&
            !className.includes('bg-') &&
            'bg-gradient-to-r from-primary-100  to-secondary-200 dark:from-gray-600 dark:to-gray-800',
          !noSpacing && !isFull && 'pb-10 lg:pb-12 px-5 lg:px-0 mx-auto',
          hasMt && 'pt-10 lg:pt-12',
          isFull && 'px-10',
          bgTransparent && 'bg-transparent',
          !loading && className,
        )}
      >
        {topTitle && (
          <h3
            className={clx(
              'mb-2 text-xl tracking-widest text-secondary-400 dark:text-white text-center uppercase',
              clxTopTitle,
            )}
          >
            {topTitle}
          </h3>
        )}

        {title && (
          <h1
            className={clx(
              'text-center sm:text-4xl text-2xl  font-bold pb-12 text-primary-500 dark:text-white',
              clxTitle,
            )}
          >
            {title}
          </h1>
        )}
        {loading && <Skeleton {...{ size: skeletonSize, ...skeletonProps }} />}

        <div className={clx(!isFull && 'max-w-6xl m-auto', loading && 'hidden')}>{children}</div>

        {showFooter && (
          <div className="justify-center flex mt-4">
            {typeof onClickSeeMore !== 'function' || isValidElement(footerSeeMore) ? (
              footerSeeMore
            ) : (
              <div
                onClick={onClickSeeMore}
                className="mt-4 bg-gray-100 px-2 py-2 bg-opacity-70 flex items-center gap-2 hover:cursor-pointer"
              >
                <a className=" text-blue-500 text-sm">See More</a>
                <ArrowRightOutlined style={{ color: colors.secondary['500'], fontSize: 15 }} />
              </div>
            )}
          </div>
        )}
      </section>
    </>
  );
};
