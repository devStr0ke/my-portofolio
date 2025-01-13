interface SpacerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  mobileSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizes = {
  xs: 'md:h-36', // 96px
  sm: 'md:h-48', // 96px
  md: 'md:h-64', // 128px
  lg: 'md:h-80', // 160px
  xl: 'md:h-96', // 192px
};

const mobileSizes = {
  xs: 'h-32', // 96px
  sm: 'h-48', // 96px
  md: 'h-64', // 128px
  lg: 'h-80', // 160px
  xl: 'h-96', // 192px
};

export const Spacer = ({ size = 'md', mobileSize = 'xs', className = '' }: SpacerProps) => {
  return (
    <div className={`${mobileSizes[mobileSize]} ${sizes[size]} ${className}`} />
  );
};