import React, { memo } from 'react';
import Button from 'app/components/Button';
import Form from 'app/components/Form';
import Input from 'app/components/Input';
import { Avatar } from 'antd';
import { Row, Col } from 'app/components/Grid';
import useHooks from './hooks';
import saga from './saga';
import { useInjectReducer, useInjectSaga } from 'utils/reduxInjectors';
import { reducer, sliceKey } from './slice';
import { StyledAvatar, StyledEditIcon, StyledProfile } from './styles';
import { useTranslation } from 'react-i18next';
import { Typography } from 'antd';

const { Title } = Typography;

export const Profile = () => {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });
  const { handlers, selectors } = useHooks();
  const { onFinish } = handlers;
  const { info, form, loading } = selectors;
  const { t } = useTranslation();

  return (
    <StyledProfile>
      <Form
        className="profile-form"
        form={form}
        onFinish={onFinish}
        requiredMark={false}
        initialValues={info ?? {}}
        layout="vertical"
      >
        <Row className="mb-4">
          <Col flex={0.05}>
            <StyledAvatar>
              <Avatar size={100} src={info?.avatar} />
              <StyledEditIcon />
            </StyledAvatar>
          </Col>
          <Col className="group-info">
            <Title level={3}>{info?.name}</Title>
            <Title level={5}>{info?.country}</Title>
          </Col>
        </Row>

        <Row gutter={[24, 0]}>
          <Col span={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: t('Profile.requiredName'),
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: 'email',
                  message: t('Profile.invalidEmail'),
                },
                {
                  required: true,
                  message: t('Profile.requiredEmail'),
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Phone number" name="phone">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Address" name="address">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="accent" htmlType="submit" loading={loading}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </StyledProfile>
  );
};

export default memo(Profile);
