interface SpacerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string;
}

const sizes = {
  xs: 'h-36', // 96px
  sm: 'h-48', // 96px
  md: 'h-64', // 128px
  lg: 'h-80', // 160px
  xl: 'h-96', // 192px
};

export const Spacer = ({ size = 'md', className = '' }: SpacerProps) => {
  return (
    <div className={`${sizes[size]} ${className}`} />
  );
};