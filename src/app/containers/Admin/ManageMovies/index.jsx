import React, { memo, useEffect, useRef, useState } from 'react';
import {
  Button,
  Space,
  Table,
  Typography,
  Popconfirm,
  message as antMessage,
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
import Highlighter from 'react-highlight-words';

import AdminSider from 'app/components/AdminSider/index';
import AddEditMovieModal from 'app/components/AddEditMovieModal/index';

import { WEB_API } from 'configs';
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleFilled,
  SearchOutlined,
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
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  let searchInput = '';

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

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
      ...getColumnSearchProps('name'),
      render: name => <Text strong>{name}</Text>,
    },
    {
      title: 'Đạo diễn',
      dataIndex: 'director',
      key: 'director',
      ...getColumnSearchProps('director'),
      render: director => <Text strong>{director}</Text>,
    },
    {
      title: 'Thể loại',
      dataIndex: 'category',
      key: 'category',
      ...getColumnSearchProps('category'),
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
                antMessage.success('Xóa phim thành công!');
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

  const handleAddCancel = () => {
    setShowAddMovieModal(false);
  };

  const handleEditCancel = () => {
    setEditMovie('');
    setShowEditMovieModal(false);
  };

  const onFinishAddMovie = async values => {
    const {
      trailerUrl,
      description,
      language,
      director,
      duration,
      name,
      posterUrl,
      premiereTime,
      category,
    } = values;
    const response = await axios.post(`${WEB_API}/movie/${editMovie.id}`, {
      director,
      duration,
      name,
      posterUrl,
      premiereTime,
      category,
      trailerUrl,
      description,
      language,
    });
    const { movie, success } = response.data;
    if (!success) {
      antMessage.error('Thêm phim không thành công');
    } else {
      let modifyMovies = cloneDeep(movies);
      modifyMovies.unshift({ ...movie, key: movie.id });
      setMovies(modifyMovies);
      setShowAddMovieModal(false);
      antMessage.success('Thêm phim thành công');
    }
  };

  const onFinishEditMovie = async values => {
    const {
      trailerUrl,
      description,
      language,
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
      trailerUrl,
      description,
      language,
    });
    const { movie, success } = response.data;
    if (!success) {
      antMessage.error('Chỉnh sửa phim không thành công');
    } else {
      const movieIndex = movies.findIndex(m => m.id === movie.id);
      let modifyMovie = cloneDeep(movies[movieIndex]);
      modifyMovie = { ...movie, key: movie.id };
      let modifyMovies = cloneDeep(movies);
      modifyMovies[movieIndex] = modifyMovie;
      setMovies(modifyMovies);
      setShowEditMovieModal(false);
      setEditMovie('');
      antMessage.success('Chỉnh sửa phim thành công');
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

      {/* AddMovie Modal */}
      <AddEditMovieModal
        modalTitle="Thêm phim"
        showModal={showAddMovieModal}
        handleCancel={handleAddCancel}
        onFinish={onFinishAddMovie}
      />
      {/* EditMovie Modal */}
      {editMovie ? (
        <AddEditMovieModal
          modalTitle="Chỉnh sửa phim"
          inputMovie={editMovie}
          showModal={showEditMovieModal}
          handleCancel={handleEditCancel}
          onFinish={onFinishEditMovie}
        />
      ) : null}
    </>
  );
});

export default ManageMovies;
