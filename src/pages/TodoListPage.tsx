import React from 'react';

import TodoListHeader from 'components/Tasks/Header';
import TodoListContainer from 'containers/TodoListContainer';
import MainLayout from 'layouts/Main';

const TodoListPage: React.FC = () => {
  return <MainLayout header={<TodoListHeader />} main={<TodoListContainer />} />;
};

export default TodoListPage;
