import React, { memo, useEffect, useState } from 'react';
import { Button, Space, Table, Typography, Layout, Card, Input } from 'antd';
import moment from 'moment';
import Highlighter from 'react-highlight-words';
import request, { handleGeneralError } from 'fetchers/index';

import AdminSider from 'app/components/AdminSider';

import { WEB_API } from 'configs';
import { SearchOutlined } from '@ant-design/icons';

const { Text } = Typography;

export const ManageTransactions = memo(() => {
  const [transactions, setTransactions] = useState([]);
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
      const { response } = await request(WEB_API, {
        url: `booking`,
        method: 'GET',
      })
        .then(({ data }) => data.data)
        .then(data => ({ response: data }))
        .catch(handleGeneralError);
      const transactions = response;
      setTransactions(transactions);
    }
    doStuff();
  }, []);

  const columns = [
    {
      title: 'Người mua',
      style: 'bold',
      dataIndex: 'userName',
      key: 'userName',
      ...getColumnSearchProps('userName'),
      render: userName => <Text>{userName}</Text>,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      ...getColumnSearchProps('phone'),
      render: phone => <Text>{phone}</Text>,
    },
    {
      title: 'Tên phim',
      dataIndex: 'movie',
      key: 'movie',
      ...getColumnSearchProps('movie'),
      render: movie => <Text>{movie}</Text>,
    },
    {
      title: 'Thời gian',
      dataIndex: 'time',
      key: 'time',
      ...getColumnSearchProps('time'),
      render: time => {
        let date = moment(time).format('DD-MM-YYYY hh:mm');
        return <Text>{date}</Text>;
      },
    },
    {
      title: 'Ghế',
      dataIndex: 'seat',
      key: 'seat',
      render: seat => <Text>{seat}</Text>,
    },
    {
      title: 'Rạp',
      dataIndex: 'cinema',
      key: 'cinema',
      render: cinema => <Text>{cinema}</Text>,
    },
    {
      title: 'Giá vé',
      dataIndex: 'price',
      key: 'price',
      render: price => <Text>{price}000</Text>,
    },
  ];

  return (
    <>
      <Layout style={{ height: '100%' }}>
        <AdminSider selectedKey={6} />
        <Card
          title="Danh sách các giao dịch"
          style={{ width: '80%', margin: '0 auto', marginTop: '16px' }}
        >
          <Table bordered columns={columns} dataSource={transactions} />
        </Card>
      </Layout>
    </>
  );
});

export default ManageTransactions;
