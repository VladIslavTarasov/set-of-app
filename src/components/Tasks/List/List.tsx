import React, { memo, useMemo, useState, useCallback } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import Loader from 'components/Loader';
import Tabs from 'components/Tabs';
import FiterList from 'components/Tasks/FiterList';
import TaskItem from 'components/Tasks/Task';
import { Task } from 'store/tasks/tasks.types';
import { debounce } from 'utils/debounce';

import { makeTasksMap, filterTasks } from './helpers';
import style from './List.module.scss';

interface ListProps {
  tasks: Task[] | null;
  loading: boolean;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

const List: React.FC<ListProps> = ({ tasks: propsTasks, loading, onDelete, onComplete }) => {
  const { t } = useTranslation(['tabs', 'tasks']);
  const [inputValue, setValue] = useState<string>('');

  const handleChange = useCallback(
    debounce((_: React.ChangeEvent, filterValue: string) => {
      setValue(filterValue);
    }, 300),
    []
  );

  const handleReset = useCallback(() => {
    setValue('');
  }, []);

  const tasksMap = useMemo(() => makeTasksMap(propsTasks), [propsTasks]);

  const tabs = useMemo(
    () => [
      { value: t('all'), tasks: filterTasks(inputValue, propsTasks) },
      {
        value: t('uncomplete'),
        tasks: filterTasks(inputValue, tasksMap?.uncomplete),
      },
      {
        value: t('important'),
        tasks: filterTasks(inputValue, tasksMap?.important),
      },
      {
        value: t('complete'),
        tasks: filterTasks(inputValue, tasksMap?.complete),
      },
    ],
    [t, inputValue, tasksMap, propsTasks]
  );

  return (
    <>
      {loading && <Loader size="lg" mode="circle" classNames={style.tasksLoading} />}
      <Tabs.Container
        active={t('all')}
        pannel={<FiterList onChange={handleChange} onReset={handleReset} showButton={!!inputValue} />}
      >
        {tabs.map(({ value, tasks }) => (
          <Tabs.Content key={value} value={value}>
            {tasks?.length ? (
              <ul className={style.ul}>
                {tasks.map(task => (
                  <li
                    className={cn(style.li, {
                      [style.complete]: task.complete,
                      [style.important]: task.important,
                    })}
                    key={task.id}
                  >
                    <TaskItem onDelete={onDelete} onComplete={onComplete} task={task} />
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

export default memo(List);
