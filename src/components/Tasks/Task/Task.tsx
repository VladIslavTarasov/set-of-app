import React, { memo, useContext, useCallback, useState } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { AiTwotoneEdit, AiTwotoneDelete } from 'react-icons/ai';
import { BiShow, BiHide } from 'react-icons/bi';
import { ImFire } from 'react-icons/im';
import { MdDone, MdDoneAll } from 'react-icons/md';

import Button from 'components/Button';
import { TasksDispatch } from 'context/tasksDispatch';
import * as tasksActions from 'store/tasks/tasks.actions';
import { Task } from 'store/tasks/tasks.types';

import style from './Task.module.scss';

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  onDelete,
  onComplete,
  task,
  task: { description, title, important, complete },
}) => {
  const { t } = useTranslation(['todo', 'buttons']);
  const dispatch = useContext(TasksDispatch);
  const [longTask, setLongTask] = useState<boolean>(false);
  const [showFullTask, setShowFullTask] = useState<boolean>(false);

  const measuredRef = useCallback((node: HTMLElement) => {
    if (node) setLongTask(node.offsetHeight > 50);
  }, []);

  const toogle = useCallback(() => {
    setShowFullTask(prev => !prev);
  }, []);

  const handleEditTask = useCallback(() => {
    dispatch(tasksActions.setEditTask(task));
  }, [dispatch, task]);

  const handleDeleteTask = useCallback(() => {
    onDelete(task.id);
  }, [onDelete, task.id]);

  const handleCompleteTask = useCallback(() => {
    onComplete(task.id);
  }, [onComplete, task.id]);

  return (
    <>
      <article
        className={cn(style.content, {
          [style.show]: longTask && showFullTask,
          [style.hide]: longTask && !showFullTask,
        })}
        ref={measuredRef}
      >
        <div className={style.titleWrapper}>
          {important && <ImFire color="red" fontSize="medium" />}
          {complete && <MdDoneAll color="green" fontSize="medium" />}
          <h5 className={style.title}>{title}</h5>
        </div>
        {description.map((item, i) => (
          // eslint-disable-next-line
          <p key={`${item}-${i}`} className={style.paragraph}>
            {item}
          </p>
        ))}
      </article>

      <div className={style.actions}>
        {longTask && (
          <Button
            type="button"
            onClick={toogle}
            mode="icon"
            araia-label={t('buttons:showList')}
            title={t('buttons:showList')}
          >
            {showFullTask ? <BiHide /> : <BiShow />}
          </Button>
        )}
        {!complete && (
          <>
            <Button
              onClick={handleEditTask}
              mode="icon"
              araia-label={t('buttons:edit')}
              title={t('buttons:edit')}
            >
              <AiTwotoneEdit />
            </Button>
            <Button
              onClick={handleCompleteTask}
              mode="icon"
              araia-label={t('buttons:done')}
              title={t('buttons:done')}
            >
              <MdDone />
            </Button>
          </>
        )}
        <Button
          onClick={handleDeleteTask}
          mode="icon"
          araia-label={t('buttons:delete')}
          title={t('buttons:delete')}
        >
          <AiTwotoneDelete />
        </Button>
      </div>
    </>
  );
};

export default memo(TaskItem);
