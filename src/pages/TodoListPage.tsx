import React from 'react';

import TodoListContainer from 'containers/TodoListContainer';
import MainLayout from 'layouts/Main';

const TodoListPage: React.FC = () => {
  return <MainLayout main={<TodoListContainer />} />;
};

export default TodoListPage;
