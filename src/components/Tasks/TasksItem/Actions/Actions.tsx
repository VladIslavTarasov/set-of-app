import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { AiTwotoneEdit, AiTwotoneDelete } from 'react-icons/ai';
import { BiShow, BiHide } from 'react-icons/bi';
import { MdDone } from 'react-icons/md';

import Button from 'components/Common/Button';

import style from './Actions.module.scss';

interface ActionsProps {
  longTask: boolean;
  showFullTask: boolean;
  complete: boolean;
  onToggle: () => void;
  onEditTask: () => void;
  onCompleteTask: () => void;
  onDeleteTask: () => void;
}

const Actions: React.FC<ActionsProps> = ({
  longTask,
  showFullTask,
  complete,
  onToggle,
  onEditTask,
  onCompleteTask,
  onDeleteTask,
}) => {
  const { t } = useTranslation('buttons');

  return (
    <>
      <div className={style.actions}>
        {longTask && (
          <Button
            type="button"
            onClick={onToggle}
            mode="icon"
            araia-label={t('showList')}
            title={t('showList')}
          >
            {showFullTask ? <BiHide /> : <BiShow />}
          </Button>
        )}
        {!complete && (
          <>
            <Button onClick={onEditTask} mode="icon" araia-label={t('edit')} title={t('edit')}>
              <AiTwotoneEdit />
            </Button>
            <Button onClick={onCompleteTask} mode="icon" araia-label={t('done')} title={t('done')}>
              <MdDone />
            </Button>
          </>
        )}
        <Button onClick={onDeleteTask} mode="icon" araia-label={t('delete')} title={t('delete')}>
          <AiTwotoneDelete />
        </Button>
      </div>
    </>
  );
};

export default memo(Actions);
