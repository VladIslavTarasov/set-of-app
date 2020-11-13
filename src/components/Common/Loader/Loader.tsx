import React from 'react';

import cn from 'classnames';

import style from './Loader.module.scss';

export interface LoaderProps {
  size: 'xs' | 'sm' | 'lg';
  mode: 'circle';
  classNames?: string;
}

const Loader: React.FC<LoaderProps> = ({ size, mode, classNames }) => {
  return (
    <div className={cn(style.wrapper, classNames)}>
      <div className={cn(style[mode], style[size])}>
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
