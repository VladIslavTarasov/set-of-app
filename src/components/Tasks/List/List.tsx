import React, { memo } from 'react';

import Loader from 'components/Loader';
import TaskItem from 'components/Tasks/Task';
import { Task } from 'store/tasks/tasks.types';

import style from './List.module.scss';

interface ListProps {
  tasks: Task[] | null;
  loading: boolean;
  onDelete: (id: string) => void;
}

const List: React.FC<ListProps> = ({ tasks, loading, onDelete }) => {
  if (loading) {
    return <Loader size="lg" mode="circle" />;
  }

  return (
    tasks && (
      <ul className={style.ul}>
        {tasks.map(task => (
          <li className={style.li} key={task.id}>
            <TaskItem onDelete={onDelete} task={task} />
          </li>
        ))}
      </ul>
    )
  );
};

export default memo(List);
