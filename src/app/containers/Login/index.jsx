import { LockOutlined, MailOutlined } from '@ant-design/icons';
import Button from 'app/components/Button';
import Form from 'app/components/Form';
import Input from 'app/components/Input';
import Title from 'app/components/Title';
import { FACEBOOK_ID, GOOGLE_ID } from 'configs';
import React, { memo } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ACTION_STATUS } from 'utils/constants';
import useHooks from './hooks';
import {
  StyledFacebookButton,
  StyledGoogleButton,
  StyledLogin,
} from './styles';

export const Login = memo(() => {
  const { handlers, selectors } = useHooks();
  const { onFinish, handleLoginService } = handlers;
  const { status } = selectors;
  const { t } = useTranslation();

  return (
    <StyledLogin>
      <Form className="login-form" onFinish={onFinish}>
        <Title className="login-form-title">{t('Login.title')}</Title>
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: t('Login.messageInvalidEmail'),
            },
            {
              required: true,
              message: t('Login.messageEmptyEmail'),
            },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: t('Login.messageEmptyPassword'),
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item className="login-form-forgot">
          <Link to="/forgot-password"> {t('Login.forgotPassword')} </Link>
        </Form.Item>
        <Form.Item className="login-form-button login-form-button-local">
          <Button
            type="primary"
            htmlType="submit"
            loading={status === ACTION_STATUS.PENDING}
          >
            {t('Login.btnLogin')}
          </Button>
        </Form.Item>
        <GoogleLogin
          clientId={GOOGLE_ID}
          render={renderProps => (
            <StyledGoogleButton
              className="login-form-button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              {t('Login.btnLoginGoogle')}
            </StyledGoogleButton>
          )}
          buttonText="Google Login"
          onSuccess={receivedData =>
            handleLoginService({
              service: 'google',
              data: receivedData && receivedData.accessToken,
            })
          }
          cookiePolicy={'single_host_origin'}
        />
        <FacebookLogin
          appId={FACEBOOK_ID}
          fields="name,email,picture"
          callback={receivedData =>
            handleLoginService({
              service: 'facebook',
              data: receivedData && receivedData.accessToken,
            })
          }
          render={renderProps => (
            <StyledFacebookButton
              className="login-form-button"
              onClick={renderProps.onClick}
            >
              {t('Login.btnLoginFacebook')}
            </StyledFacebookButton>
          )}
        />
        <span className="login-form-register">
          <Link to="/register"> {t('Login.linkRegister')} </Link>
        </span>
      </Form>
    </StyledLogin>
  );
});

export default Login;
