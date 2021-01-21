import React, { memo, useEffect, useState } from 'react';
import {
  Button,
  Space,
  Table,
  Typography,
  Popconfirm,
  message,
  Layout,
  Image,
  Card,
  Modal,
} from 'antd';
import axios from 'axios';
import moment from 'moment';

import AdminSider from 'app/components/AdminSider/index';

import { WEB_API } from 'configs';
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleFilled,
} from '@ant-design/icons';

const { Text } = Typography;

export const ManageMovies = memo(() => {
  const [movies, setMovies] = useState([]);
  const [showAddMovieModal, setShowAddMovieModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function doStuff() {
      const response = await axios.get(`${WEB_API}/movie/all`);
      const mapMovies = response.data.movies.map(movie => {
        return { ...movie, key: movie.id };
      });
      setMovies(mapMovies);
    }
    doStuff();
  }, []);

  const columns = [
    {
      title: 'Poster',
      dataIndex: 'posterUrl',
      key: 'posterUrl',
      render: posterUrl => {
        return <Image width={100} src={posterUrl} />;
      },
    },
    {
      title: 'Tên phim',
      dataIndex: 'name',
      key: 'name',
      render: name => <Text strong>{name}</Text>,
    },
    {
      title: 'Đạo diễn',
      dataIndex: 'director',
      key: 'director',
      render: director => <Text strong>{director}</Text>,
    },
    {
      title: 'Thể loại',
      dataIndex: 'category',
      key: 'category',
      render: category => <Text strong>{category}</Text>,
    },
    {
      title: 'Thời lượng',
      dataIndex: 'duration',
      key: 'duration',
      render: duration => {
        const hour = Math.floor(duration / 60);
        const minute = duration % 60;
        return (
          <Text strong>
            {hour} tiếng {minute} phút
          </Text>
        );
      },
    },
    {
      title: 'Thời điểm ra mắt',
      dataIndex: 'premiereTime',
      key: 'premiereTime',
      render: premiereTime => {
        let date = moment(premiereTime).format('DD-MM-YYYY');
        return <Text strong>{date}</Text>;
      },
    },
    {
      title: '',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button
            ghost
            onClick={() => {}}
            style={{ color: 'green' }}
            icon={<EditOutlined />}
          />
          <Popconfirm
            title="Mọi dữ liệu về phim sẽ bị xóa sạch. Bạn có chắc muốn tiếp tục?"
            onConfirm={async () => {
              const response = await axios.delete(
                `${WEB_API}/movie/${record.id}`,
              );
              if (response.data.success) {
                let modifyMovies = movies.filter(
                  movie => movie.id !== record.id,
                );
                setMovies(modifyMovies);
                message.success('Xóa phim thành công!');
              }
            }}
            okText="Xóa"
            cancelText="Hủy"
          >
            <Button
              ghost
              onClick={() => {}}
              style={{ color: 'red' }}
              icon={<DeleteOutlined />}
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleOk = () => {};

  const handleCancel = () => {};

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <AdminSider selectedKey={2} />
        <Card
          title="Danh sách các phim"
          extra={
            <Button
              type="primary"
              icon={<PlusCircleFilled />}
              onClick={() => {
                setShowAddMovieModal(true);
              }}
            >
              Thêm phim
            </Button>
          }
          style={{ width: '80%', margin: '0 auto', marginTop: '16px' }}
        >
          <Table
            style={{ width: '100%' }}
            bordered
            columns={columns}
            dataSource={movies}
          />
        </Card>
      </Layout>
      <Modal
        title="Thêm phim"
        visible={showAddMovieModal}
        onOk={handleOk}
        confirmLoading={isLoading}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Hủy bỏ
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={isLoading}
            onClick={handleOk}
          >
            Xác nhận
          </Button>,
        ]}
      ></Modal>
    </>
  );
});

export default ManageMovies;
