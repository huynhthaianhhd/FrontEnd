import { PlusCircleFilled } from '@ant-design/icons';
import { Button, Input, Modal, Table } from 'antd';
import AdminSider from 'app/components/AdminSider/index';
import moment from 'moment';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useInjectReducer, useInjectSaga } from 'utils/reduxInjectors';
import useHooks from './hooks';
import saga from './saga';
import { reducer, sliceKey } from './slice';
import {
  StyledContent,
  StyledForm,
  StyledLayout,
  StyledThumbnail,
} from './styles';

const formItemLayout = {
  labelCol: {
    xs: { span: 3 },
  },
  wrapperCol: {
    xs: { span: 21 },
  },
};

export const ManageNews = props => {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });
  const { handlers, selectors } = useHooks();
  const {
    handleShowAddEditModal,
    handleHideAddEditModal,
    handleChangeEditorState,
    handleSaveNews,
  } = handlers;
  const { news, visible, editorState, addNewsLoading, form } = selectors;

  const columns = [
    {
      title: 'Tựa đề',
      dataIndex: 'title',
      key: 'title',
      width: '18%',
    },
    {
      title: 'Miêu tả',
      dataIndex: 'description',
      key: 'description',
      width: '35%',
    },
    {
      title: 'Thumbnail',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      render: url => <StyledThumbnail src={url} alt="news-thumbnail" />,
      width: '27%',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: createdAt => (
        <span>{moment(createdAt).format('YYYY-MM-DD HH:mm')}</span>
      ),
      widht: '13%',
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, news) => (
        <Button onClick={() => handleShowAddEditModal(news)} type="link">
          Sửa
        </Button>
      ),
      width: '7%',
    },
  ];

  return (
    <StyledLayout style={{ height: '100%' }}>
      <AdminSider selectedKey="manage-news" />
      <StyledContent>
        <Button
          className="add-button"
          icon={<PlusCircleFilled />}
          type="primary"
          onClick={() => handleShowAddEditModal(null)}
        >
          Thêm mới
        </Button>
        <Table columns={columns} dataSource={news} />
      </StyledContent>
      <Modal
        width={1000}
        visible={visible}
        maskClosable={false}
        closable={false}
        footer={[
          <Button key="back" onClick={handleHideAddEditModal}>
            Back
          </Button>,
          <Button
            key="submit"
            htmlType="submit"
            form="form"
            type="primary"
            loading={addNewsLoading}
          >
            Save
          </Button>,
        ]}
      >
        <StyledForm
          form={form}
          id="form"
          onFinish={handleSaveNews}
          {...formItemLayout}
        >
          <StyledForm.Item
            label="Tựa đề"
            name="title"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập tựa đề',
              },
            ]}
          >
            <Input.TextArea rows={2} />
          </StyledForm.Item>
          <StyledForm.Item
            label="Miêu tả"
            name="description"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập miêu tả',
              },
            ]}
          >
            <Input.TextArea rows={4} />
          </StyledForm.Item>
          <StyledForm.Item
            label="Thumbnail URL"
            name="thumbnail"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập đường dẫn thumbnail',
              },
            ]}
          >
            <Input />
          </StyledForm.Item>
          <StyledForm.Item label="Nội dung" required>
            <Editor
              editorState={editorState}
              toolbarClassName="toolbar"
              editorClassName="editor"
              onEditorStateChange={handleChangeEditorState}
            />
          </StyledForm.Item>
        </StyledForm>
      </Modal>
    </StyledLayout>
  );
};

export default ManageNews;
