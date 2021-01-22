import React, { memo, useEffect, useState } from 'react';
import {
  Button,
  Space,
  Table,
  Typography,
  Popconfirm,
  message,
  Layout,
  Menu,
  Card,
} from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import lodash from 'lodash';

import AdminSider from 'app/components/AdminSider/index';

import { WEB_API } from 'configs';

const { Text } = Typography;

export const ManageUsers = memo(() => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function doStuff() {
      const response = await axios.get(`${WEB_API}/user`);
      const mapUsers = response.data.users.map(user => {
        return { ...user, key: user.id };
      });
      setUsers(mapUsers);
    }
    doStuff();
  }, []);

  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
      render: (name, record) => {
        return (
          <>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                textAlign: 'left',
              }}
            >
              <Avatar
                size="large"
                style={{ marginRight: '8px' }}
                src={record.avatar}
              />
              <Text strong>{name}</Text>
            </div>
          </>
        );
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: email => <Text strong>{email}</Text>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          {!record.isBlocked ? (
            <Popconfirm
              title="Xác nhận khóa tài khoản?"
              onConfirm={async () => {
                const response = await axios.put(
                  `${WEB_API}/user/${record.id}/block-user`,
                );
                if (response.data.success) {
                  const userIndex = users.findIndex(
                    user => user.id === record.id,
                  );

                  let modifyUser = lodash.cloneDeep(users[userIndex]);
                  modifyUser.isBlocked = true;

                  let modifyUsers = lodash.cloneDeep(users);
                  modifyUsers[userIndex] = modifyUser;
                  setUsers(modifyUsers);
                  message.success('Khóa tài khoản thành công!');
                }
              }}
              onCancel={async () => {
                console.log('cancel');
              }}
              okText="Khóa"
              cancelText="Hủy"
            >
              <Button danger>Khóa tài khoản</Button>
            </Popconfirm>
          ) : (
            <Button danger disabled>
              Đã khóa
            </Button>
          )}
        </Space>
      ),
    },
  ];

  return (
    <Layout style={{ height: '100%' }}>
      <AdminSider selectedKey={1} />
      <Card
        title="Danh sách người dùng"
        style={{ width: '80%', margin: '0 auto', marginTop: '16px' }}
      >
        <Table
          style={{ width: '100%', margin: '0 auto', marginTop: '16px' }}
          bordered
          columns={columns}
          dataSource={users}
        />
      </Card>
      {/* <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Table
          style={{ marginTop: '16px', width: '80%', marginLeft: '16px' }}
          bordered
          columns={columns}
          dataSource={users}
        />
      </div> */}
    </Layout>
  );
});

export default ManageUsers;
