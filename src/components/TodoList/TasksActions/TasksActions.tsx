import React, { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { AiTwotoneEdit, AiTwotoneDelete } from 'react-icons/ai';
import { BiShow, BiHide } from 'react-icons/bi';
import { MdDone } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import Button from 'components/Common/Button';
import * as tasksActions from 'store/tasks/tasks.actions';
import { Task } from 'store/tasks/tasks.types';
import { useTheme } from 'theme/theme';

import { useStyles } from './TasksActions.styles';

interface ActionsProps {
  longTask: boolean;
  showFullTask: boolean;
  complete: boolean;
  task: Task;
  onToggle: () => void;
}

const Actions: React.FC<ActionsProps> = ({ longTask, showFullTask, complete, task, onToggle }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const { t } = useTranslation('buttons');
  const dispatch = useDispatch();

  const handleEditTask = useCallback(() => {
    dispatch(tasksActions.setEditTask(task));
  }, [dispatch, task]);

  const handleDeleteTask = useCallback(() => {
    dispatch(tasksActions.deleteTaskRequest(task.id));
  }, [dispatch, task.id]);

  const handleCompleteTask = useCallback(() => {
    dispatch(tasksActions.completeTaskRequest(task.id));
  }, [dispatch, task.id]);

  return (
    <>
      <div className={classes.actions}>
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
            <Button onClick={handleEditTask} mode="icon" araia-label={t('edit')} title={t('edit')}>
              <AiTwotoneEdit />
            </Button>
            <Button
              onClick={handleCompleteTask}
              mode="icon"
              araia-label={t('done')}
              title={t('done')}
            >
              <MdDone />
            </Button>
          </>
        )}
        <Button
          onClick={handleDeleteTask}
          mode="icon"
          araia-label={t('delete')}
          title={t('delete')}
        >
          <AiTwotoneDelete />
        </Button>
      </div>
    </>
  );
};

export default memo(Actions);
