import React, { memo, useCallback, useState } from 'react';

import cn from 'classnames';
import { ImFire } from 'react-icons/im';
import { MdDoneAll } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import TaskActions from 'components/Tasks/TaskActions';
import * as tasksActions from 'store/tasks/tasks.actions';
import { Task } from 'store/tasks/tasks.types';

import style from './Task.module.scss';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  task: { description, title, important, complete },
}) => {
  const dispatch = useDispatch();
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
    dispatch(tasksActions.deleteTaskRequest(task.id));
  }, [dispatch, task.id]);

  const handleCompleteTask = useCallback(() => {
    dispatch(tasksActions.completeTaskRequest(task.id));
  }, [dispatch, task.id]);

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

      <TaskActions
        longTask={longTask}
        showFullTask={showFullTask}
        complete={complete}
        onToggle={toogle}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
        onCompleteTask={handleCompleteTask}
      />
    </>
  );
};

export default memo(TaskItem);
