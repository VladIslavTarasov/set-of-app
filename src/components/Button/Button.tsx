import React, { memo, ButtonHTMLAttributes } from 'react';

import cn from 'classnames';

import Loader from 'components/Loader';

import style from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classNames?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  mode?: 'icon' | 'link';
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
  ...props
}) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      {...props}
      type={props?.type ?? 'button'}
      className={cn(
        style.button,
        style[size],
        {
          [style.icon]: mode === 'icon',
          [style.link]: mode === 'link',
          [style.fullWidth]: Boolean(fullWidth),
        },
        className
      )}
    >
      {!loading ? children : <Loader size="xs" mode="circle" classNames={style.resetMargin} />}
    </button>
  );
};

export default memo(Button);
