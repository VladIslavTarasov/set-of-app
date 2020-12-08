import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

import TasksItem from 'components/TodoList/TasksItem';
import { Task } from 'store/tasks/tasks.types';
import { useTheme } from 'theme/theme';

import { useStyles } from './TabPanel.styles';

interface TabPanelProps {
  hidden: boolean;
  tasks: Task[];
}

const TabPanel: React.FC<TabPanelProps> = ({ hidden, tasks }) => {
  const theme = useTheme();
  const classes = useStyles({ theme, hidden });
  const { t } = useTranslation('tasks');

  if (!tasks.length) {
    return <p className={classes.paragraph}>{t('empty')}</p>;
  }

  return (
    <section role="list" className={classes.list}>
      {tasks.map(task => (
        <TasksItem key={task.id} task={task} />
      ))}
    </section>
  );
};

export default memo(TabPanel);
