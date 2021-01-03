import React, { memo, useCallback, useState } from 'react';

import cn from 'classnames';
import { ImFire } from 'react-icons/im';
import { MdDoneAll } from 'react-icons/md';

import Wysiwyg from 'components/Common/Fields/Wysiwyg';
import TaskActions from 'components/TodoList/TasksActions';
import { Task } from 'store/tasks/tasks.types';
import { useTheme } from 'theme/theme';

import { useStyles } from './TasksItem.styles';

interface TasksItemProps {
  task: Task;
}

const TasksItem: React.FC<TasksItemProps> = ({
  task,
  task: { description, title, important, complete },
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [showFullTask, setShowFullTask] = useState<boolean>(false);

  const toogle = useCallback(() => {
    setShowFullTask(prev => !prev);
  }, []);

  return (
    <div
      role="listitem"
      className={cn(classes.task, {
        [classes.complete]: task.complete,
        [classes.important]: task.important,
      })}
    >
      <article
        className={cn(classes.content, {
          [classes.show]: showFullTask,
          [classes.hide]: !showFullTask,
        })}
      >
        <div className={classes.titleWrapper}>
          {important && <ImFire color="red" fontSize="medium" />}
          {complete && <MdDoneAll color="green" fontSize="medium" />}
          <h5 className={classes.title}>{title}</h5>
        </div>
        <Wysiwyg readonly hidden={!showFullTask} value={description[0]} />
      </article>

      <TaskActions
        showFullTask={showFullTask}
        complete={complete}
        onToggle={toogle}
        task={task}
      />
    </div>
  );
};

export default memo(TasksItem);
