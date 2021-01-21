import React, { memo, useEffect, useRef, useState } from 'react';
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
  Form,
  Modal,
  Input,
  Select,
  DatePicker,
} from 'antd';
import axios from 'axios';
import moment from 'moment';
import { cloneDeep } from 'lodash';

import AdminSider from 'app/components/AdminSider/index';

import { WEB_API } from 'configs';
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleFilled,
} from '@ant-design/icons';

const { Text } = Typography;
const { Option } = Select;

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

export const ManageMovies = memo(() => {
  const [movies, setMovies] = useState([]);
  const [editMovie, setEditMovie] = useState(null);
  const [showAddMovieModal, setShowAddMovieModal] = useState(false);
  const [showEditMovieModal, setShowEditMovieModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const editFormEl = useRef(null);

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
            onClick={() => {
              setShowEditMovieModal(true);
              setEditMovie(record);
            }}
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

  const handleEditOk = () => {};

  const handleEditCancel = () => {
    setShowEditMovieModal(false);
  };

  const onFinish = async values => {
    const {
      director,
      duration,
      name,
      posterUrl,
      premiereTime,
      category,
    } = values;
    const response = await axios.put(`${WEB_API}/movie/${editMovie.id}`, {
      director,
      duration,
      name,
      posterUrl,
      premiereTime,
      category,
    });
    const { movie, success } = response.data;
    if (!success) {
      message.error('Chỉnh sửa phim không thành công');
    } else {
      const movieIndex = movies.findIndex(m => m.id === movie.id);
      let modifyMovie = cloneDeep(movies[movieIndex]);
      modifyMovie = movie;
      let modifyMovies = cloneDeep(movies);
      modifyMovies[movieIndex] = modifyMovie;
      setMovies(modifyMovies);
      setShowEditMovieModal(false);
      message.success('Chỉnh sửa phim thành công');
    }
  };

  return (
    <>
      <Layout style={{ height: '100%' }}>
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
      <Modal
        title="Chỉnh sửa phim"
        visible={showEditMovieModal}
        onOk={handleEditOk}
        confirmLoading={isLoading}
        onCancel={handleEditCancel}
        footer={[
          <Button key="back" onClick={handleEditCancel}>
            Hủy bỏ
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={isLoading}
            onClick={() => {
              editFormEl.current.submit();
            }}
          >
            Xác nhận
          </Button>,
        ]}
      >
        {editMovie ? (
          <Form name="basic" onFinish={onFinish} ref={editFormEl}>
            <Form.Item
              label="Posterurl"
              name="posterUrl"
              initialValue={editMovie?.posterUrl}
              rules={[
                {
                  required: true,
                  message: 'Posterurl không được bỏ trống',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Tên phim"
              name="name"
              initialValue={editMovie?.name}
              rules={[
                {
                  required: true,
                  message: 'Tên phim không được bỏ trống',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Đạo diễn"
              name="director"
              initialValue={editMovie?.director}
              rules={[
                {
                  required: true,
                  message: 'Đạo diễn không được bỏ trống',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="category"
              label="Thể loại"
              initialValue={editMovie?.category}
              rules={[
                {
                  required: true,
                  message: 'Thể loại không được bỏ trống',
                },
              ]}
            >
              <Select>
                <Option value={'Kinh dị'}>Kinh dị</Option>
                <Option value={'Hành động'}>Hành động</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Thời lượng (phút)"
              name="duration"
              initialValue={editMovie?.duration}
              rules={[
                {
                  required: true,
                  message: 'Thời lượng không được bỏ trống',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Thời điểm ra mắt" name="premiereTime">
              <DatePicker
                value={moment(editMovie?.premiereTime).format('YYYY-MM-DD')}
              />
            </Form.Item>
          </Form>
        ) : null}
      </Modal>
    </>
  );
});

export default ManageMovies;
