import React, { memo } from 'react';
import { StyledModal, StyledRow, StyledMessage } from './styles';
import Button from 'app/components/Button';
import { SyncOutlined } from '@ant-design/icons';

import { useTranslation } from 'react-i18next';

const Confirm = memo(props => {
  const { t } = useTranslation();
  const {
    visible,
    message,
    title,
    okText = t('Common.ok'),
    cancelText = t('Common.cancel'),
    onCancel,
    handleConfirm,
    handleCancel,
    loading,
    ...rest
  } = props;

  return (
    <StyledModal
      centered
      title={title}
      visible={visible}
      closable={false}
      onCancel={onCancel}
      maskClosable={false}
      footer={[
        <Button
          key="cancel"
          onClick={() => {
            if (handleCancel) handleCancel();
            onCancel();
          }}
        >
          {cancelText}
        </Button>,

        <Button
          type="primary"
          key="ok"
          loading={loading}
          onClick={() => {
            handleConfirm();
            onCancel();
          }}
        >
          {okText}
        </Button>,
      ]}
      {...rest}
    >
      <StyledRow>
        <StyledMessage>{message}</StyledMessage>
      </StyledRow>
    </StyledModal>
  );
});

export default Confirm;
