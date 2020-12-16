import React, { memo, useMemo, useState, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import Loader from 'components/Common/Loader';
import Tabs from 'components/Common/Tabs';
import FilterField from 'components/TodoList/FilterField';
import TabPanel from 'components/TodoList/TabPanel';
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
  const { t } = useTranslation('tabs');
  const [activeValue, setActiveValue] = useState<string>(t('all'));
  const [inputValue, setValue] = useState<string>('');

  const getMapTasks = useMemo(makeGetMapTasks, []);

  const { complete, uncomplete, important, all } = useSelector<RootState & State, TasksMap>(
    state => {
      return getMapTasks(state, inputValue);
    }
  );

  const handleChange = useCallback(
    debounce((e, filterValue: string) => {
      setValue(filterValue);
    }, 300),
    []
  );

  const handleReset = useCallback(() => {
    setValue('');
  }, []);

  const handleChangeTab = useCallback((e, value: string) => {
    setActiveValue(value);
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

  const values = useMemo(() => [t('all'), t('uncomplete'), t('important'), t('complete')], [t]);

  return (
    <>
      {loading && <Loader size="lg" mode="circle" classNames={classes.tasksLoading} />}
      <Tabs value={activeValue} values={values} onChange={handleChangeTab}>
        <FilterField onChange={handleChange} onReset={handleReset} showButton={!!inputValue} />

        {tabs.map(({ value, tasks }) => (
          <TabPanel key={value} hidden={value !== activeValue} tasks={tasks} />
        ))}
      </Tabs>
    </>
  );
};

export default memo(TasksList);
