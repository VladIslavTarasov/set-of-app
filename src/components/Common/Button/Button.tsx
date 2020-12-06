import React, { memo, ButtonHTMLAttributes } from 'react';

import cn from 'classnames';

import Loader from 'components/Common/Loader';
import { useTheme } from 'theme/theme';

import { useStyles } from './Button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classNames?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  mode?: 'icon' | 'link';
  color?: 'white';
  transparent?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  size = 'md',
  mode,
  fullWidth,
  loading,
  transparent,
  color,
  ...props
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme, fs: size, transparent, color });

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      {...props}
      type={props?.type ?? 'button'}
      className={cn(
        classes.button,
        {
          [classes.icon]: mode === 'icon',
          [classes.link]: mode === 'link',
          [classes.fullWidth]: Boolean(fullWidth),
        },
        className
      )}
    >
      {!loading ? children : <Loader size="xs" mode="circle" classNames={classes.resetMargin} />}
    </button>
  );
};

export default memo(Button);
