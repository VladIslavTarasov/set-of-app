import React from 'react';

import { useTranslation } from 'react-i18next';

import Header from 'components/Common/Header';
import TodoListContainer from 'containers/TodoListContainer';
import MainLayout from 'layouts/Main';

const TodoListPage: React.FC = () => {
  const { t } = useTranslation('todo');
  return <MainLayout header={<Header title={t('title')} />} main={<TodoListContainer />} />;
};

export default TodoListPage;
