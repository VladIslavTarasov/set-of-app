import React, { memo, useContext, useCallback, useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import Modal from 'components/Modal';
import { TasksDispatch } from 'context/tasksDispatch';
import * as tasksActions from 'store/tasks/tasks.actions';
import { ResponseStatuses } from 'types';

interface ErrorModalProps {
  createTaskRequestStatus: ResponseStatuses;
  editTaskRequestStatus: ResponseStatuses;
  deleteTaskRequestStatus: ResponseStatuses;
  getTasksRequestStatus: ResponseStatuses;
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  createTaskRequestStatus,
  editTaskRequestStatus,
  deleteTaskRequestStatus,
  getTasksRequestStatus,
}) => {
  // TODO stubs errors codes
  const { t } = useTranslation('errors');
  const dispatch = useContext(TasksDispatch);

  const handleClose = useCallback(() => {
    dispatch(tasksActions.setRequestStatusUncalled());
  }, [dispatch]);

  const hasError = useMemo(
    () =>
      [
        createTaskRequestStatus,
        editTaskRequestStatus,
        deleteTaskRequestStatus,
        getTasksRequestStatus,
      ].includes(ResponseStatuses.FAILURE) || null,
    [createTaskRequestStatus, editTaskRequestStatus, deleteTaskRequestStatus, getTasksRequestStatus]
  );

  return (
    hasError && <Modal title={t('title')} description={t('description')} onClose={handleClose} />
  );
};

export default memo(ErrorModal);
