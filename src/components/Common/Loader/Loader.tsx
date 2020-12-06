import React from 'react';

import { BiLoader } from 'react-icons/bi';

import { useTheme } from 'theme/theme';

import { useStyles } from './Loader.styles';

export interface LoaderProps {
  size: 'xs' | 'sm' | 'lg';
  mode: 'circle';
  classNames?: string;
}

const Loader: React.FC<LoaderProps> = ({ size, mode, classNames }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.loader}>
      <span>
        <BiLoader size="80px" />
      </span>
    </div>
  );
};

export default Loader;
