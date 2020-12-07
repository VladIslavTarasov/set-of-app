import React, { memo, useLayoutEffect, useRef } from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import Button from 'components/Common/Button';
import { useClickOutside } from 'hooks';
import { useTheme } from 'theme/theme';

import { useStyles } from './Drawer.styles';

interface DrawerProps {
  onClose: () => void;
  open: boolean;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ onClose, open, children }) => {
  const theme = useTheme();
  const classes = useStyles({ theme, open });
  const drawer = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  useClickOutside(drawer, onClose, open);

  return (
    <>
      {open && <div className={classes.substrate} />}
      <div ref={drawer} className={classes.wrapper}>
        <Button onClick={onClose} type="button" className={classes.close} mode="icon">
          <AiOutlineClose />
        </Button>
        {children}
      </div>
    </>
  );
};

export default memo(Drawer);
