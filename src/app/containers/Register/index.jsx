import React, { memo } from 'react';
import { useInjectSaga, useInjectReducer } from 'utils/reduxInjectors';
import saga from './saga';
import useHooks from './hooks';
import { sliceKey, reducer } from './slice';
import { Link } from 'react-router-dom';
import { StyledRegister } from './styles';
import Form from 'app/components/Form';
import Button from 'app/components/Button';
import Input from 'app/components/Input';
import Title from 'app/components/Title';
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  CheckSquareOutlined,
} from '@ant-design/icons';
import { ACTION_STATUS } from 'utils/constants';
import { useTranslation } from 'react-i18next';

export const Register = memo(() => {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });
  const { handlers, selectors } = useHooks();
  const { onFinish } = handlers;
  const { status } = selectors;
  const { t } = useTranslation();

  return (
    <StyledRegister>
      <Form className="register-form" onFinish={onFinish}>
        <Title className="register-form-title">{t('Register.title')}</Title>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: t('Register.messageEmptyName'),
            },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder={t('Register.labelName')}
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: t('Register.messageInvalidEmail'),
            },
            {
              required: true,
              message: t('Register.messageEmptyEmail'),
            },
          ]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder={t('Register.labelEmail')}
          />
        </Form.Item>

        <Form.Item
          name="password"
          hasFeedback
          rules={[
            {
              required: true,
              message: t('Register.messageEmptyPassword'),
            },
            { min: 6, message: t('Register.messageMinPassword') },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder={t('Register.labelPassword')}
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: t('Register.messageEmptyConfirmPassword'),
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  t('Register.messageInvalidConfirmPassword'),
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<CheckSquareOutlined />}
            type="password"
            placeholder={t('Register.labelConfirmPassword')}
          />
        </Form.Item>

        <Form.Item className="register-form-button register-form-button-local">
          <Button
            type="primary"
            htmlType="submit"
            loading={status === ACTION_STATUS.PENDING}
          >
            {t('Register.btnRegister')}
          </Button>
        </Form.Item>
        <span className="register-form-login">
          <Link to="/login"> {t('Register.linkLogin')}</Link>
        </span>
      </Form>
    </StyledRegister>
  );
});

export default Register;
