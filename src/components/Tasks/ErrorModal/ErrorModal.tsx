import React, { memo, useMemo } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import Modal from 'components/Modal';
import { getSlice } from 'store/tasks/tasks.selectors';
import { ResponseStatuses } from 'store/types';

interface ErrorModalProps {}

const ErrorModal: React.FC<ErrorModalProps> = () => {
  const { t } = useTranslation('errors');
  const {
    createTaskRequestStatus,
    editTaskRequestStatus,
    deleteTaskRequestStatus,
    getTasksRequestStatus,
  } = useSelector(getSlice);

  const hasError = useMemo(
    () =>
      [
        createTaskRequestStatus,
        editTaskRequestStatus,
        deleteTaskRequestStatus,
        getTasksRequestStatus,
      ].includes(ResponseStatuses.FAILURE),
    [createTaskRequestStatus, editTaskRequestStatus, deleteTaskRequestStatus, getTasksRequestStatus]
  );

  return <>{hasError && <Modal title={t('title')} description={t('description')} />}</>;
};

export default memo(ErrorModal);
