import React from 'react';

import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

import Button from 'components/Common/Button';
import { useTheme } from 'theme/theme';

import { useStyles } from './Modal.styles';

export interface ModalProps {
  title?: string;
  description?: string | string[];
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, description, onClose, children }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { t } = useTranslation('buttons');

  return createPortal(
    <div data-testid="modal" className={classes.container}>
      <div className={classes.modal} role="dialog">
        {title && (
          <header className={classes.header}>
            <h3 className={classes.title}>{title}</h3>
          </header>
        )}

        {description && (
          <div className={classes.content}>
            {Array.isArray(description) ? (
              description.map(item => (
                <p key={item} className={classes.text}>
                  {item}
                </p>
              ))
            ) : (
              <p className={classes.text}>{description}</p>
            )}
          </div>
        )}

        {onClose && (
          <Button onClick={onClose} type="button">
            {t('close')}
          </Button>
        )}

        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
