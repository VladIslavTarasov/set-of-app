import React from 'react';
import { createPortal } from 'react-dom';

import { useTranslation } from 'react-i18next';

import Button from 'components/Button';

import style from './Modal.module.scss';

export interface ModalProps {
  title?: string;
  description?: string | string[];
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, description, onClose, children }) => {
  const { t } = useTranslation('buttons');

  return createPortal(
    <div className={style.container}>
      <div className={style.modal} role="dialog">
        {title && (
          <header className={style.header}>
            <h3 className={style.title}>{title}</h3>
          </header>
        )}

        {description && (
          <div className={style.content}>
            {Array.isArray(description) ? (
              description.map(item => (
                <p key={item} className={style.text}>
                  {item}
                </p>
              ))
            ) : (
              <p className={style.text}>{description}</p>
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
