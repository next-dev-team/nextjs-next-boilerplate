import { useCreation } from 'ahooks';
import { isNumber } from 'lodash';
import SkeletonLoading, { SkeletonProps } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export type ISkeleton = SkeletonProps & { size?: 'sm' | 'md' | 'lg' | 'xl' | number };

export default function Skeleton({ size = 'xl', ...rest }: ISkeleton) {
  const renderSize = useCreation(() => {
    const sizes = {
      sm: 10,
      md: 16,
      lg: 20,
      xl: 30,
    } as Record<ISkeleton['size'], number>;
    return isNumber(size) ? size : sizes?.[size];
  }, [size]);

  return <SkeletonLoading count={renderSize} height={20} {...rest} />;
}
