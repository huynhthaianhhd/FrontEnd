import { notification } from 'antd';

export const notifyError = message => {
  notification.error({
    message: message,
    placement: 'topRight',
    top: 90,
  });
};

export const notifySuccess = message => {
  notification.success({
    message: message,
    placement: 'topRight',
    top: 90,
  });
};
