import React, { memo, useMemo, useState, useCallback } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import Loader from 'components/Common/Loader';
import Tabs from 'components/Common/Tabs';
import FilterField from 'components/TodoList/FilterField';
import TasksItem from 'components/TodoList/TasksItem';
import { makeGetMapTasks } from 'store/tasks/tasks.selectors';
import { TasksMap, State } from 'store/tasks/tasks.types';
import { RootState } from 'store/types';
import { useTheme } from 'theme/theme';
import { debounce } from 'utils/debounce';

import { useStyles } from './TasksList.styles';

interface TasksListProps {
  loading: boolean;
}

const TasksList: React.FC<TasksListProps> = ({ loading }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const { t } = useTranslation(['tabs', 'tasks']);
  const [inputValue, setValue] = useState<string>('');

  const getMapTasks = useMemo(makeGetMapTasks, []);

  const { complete, uncomplete, important, all } = useSelector<RootState & State, TasksMap>(
    state => {
      return getMapTasks(state, inputValue);
    }
  );

  const handleChange = useCallback(
    debounce((_: React.ChangeEvent, filterValue: string) => {
      setValue(filterValue);
    }, 300),
    []
  );

  const handleReset = useCallback(() => {
    setValue('');
  }, []);

  const tabs = useMemo(
    () => [
      { value: t('all'), tasks: all },
      {
        value: t('uncomplete'),
        tasks: uncomplete,
      },
      {
        value: t('important'),
        tasks: important,
      },
      {
        value: t('complete'),
        tasks: complete,
      },
    ],
    [t, all, complete, uncomplete, important]
  );

  return (
    <>
      {loading && <Loader size="lg" mode="circle" classNames={classes.tasksLoading} />}
      <Tabs.Container
        active={t('all')}
        pannel={
          <FilterField onChange={handleChange} onReset={handleReset} showButton={!!inputValue} />
        }
      >
        {tabs.map(({ value, tasks }) => (
          <Tabs.Content key={value} value={value}>
            {tasks?.length ? (
              <ul className={classes.ul}>
                {tasks.map(task => (
                  <li
                    key={task.id}
                    className={cn(classes.li, {
                      [classes.complete]: task.complete,
                      [classes.important]: task.important,
                    })}
                  >
                    <TasksItem task={task} />
                  </li>
                ))}
              </ul>
            ) : (
              <p>{t('tasks:empty')}</p>
            )}
          </Tabs.Content>
        ))}
      </Tabs.Container>
    </>
  );
};

export default memo(TasksList);
