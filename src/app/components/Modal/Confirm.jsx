import React, { memo } from 'react';
import { StyledModal } from './styles';
import Button from 'app/components/Button';

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
    ...rest
  } = props;

  return (
    <StyledModal
      centered
      title={title}
      visible={visible}
      closable={false}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          {cancelText}
        </Button>,
        <Button type="primary" key="ok" onClick={handleConfirm}>
          {okText}
        </Button>,
      ]}
      {...rest}
    >
      {message}
    </StyledModal>
  );
});

export default Confirm;
