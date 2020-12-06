import React, { memo, useCallback, useState } from 'react';

import cn from 'classnames';
import { ImFire } from 'react-icons/im';
import { MdDoneAll } from 'react-icons/md';

import TaskActions from 'components/TodoList/TasksItem/Actions';
import { Task } from 'store/tasks/tasks.types';
import { useTheme } from 'theme/theme';
import 'react-quill/dist/quill.snow.css';

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

  const [longTask, setLongTask] = useState<boolean>(false);
  const [showFullTask, setShowFullTask] = useState<boolean>(false);

  const measuredRef = useCallback(
    (node: HTMLElement) => {
      setLongTask(node?.offsetHeight > 60);
    },
    // eslint-disable-next-line
    [task.description]
  );

  const toogle = useCallback(() => {
    setShowFullTask(prev => !prev);
  }, []);

  return (
    <>
      <article
        className={cn(classes.content, {
          [classes.show]: longTask && showFullTask,
          [classes.hide]: longTask && !showFullTask,
        })}
        ref={measuredRef}
      >
        <div className={classes.titleWrapper}>
          {important && <ImFire color="red" fontSize="medium" />}
          {complete && <MdDoneAll color="green" fontSize="medium" />}
          <h5 className={classes.title}>{title}</h5>
        </div>
        <div dangerouslySetInnerHTML={{ __html: description.toString() }} />
      </article>

      <TaskActions
        longTask={longTask}
        showFullTask={showFullTask}
        complete={complete}
        onToggle={toogle}
        task={task}
      />
    </>
  );
};

export default memo(TasksItem);
