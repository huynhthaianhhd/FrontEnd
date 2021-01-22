import React, { useRef } from 'react';
import moment from 'moment';
import { Modal, Button, Form, Input, Select, DatePicker } from 'antd';

const { Option } = Select;

const AddEditMovieModal = ({
  inputMovie,
  showModal,
  handleCancel,
  onFinish,
  modalTitle,
}) => {
  console.log('render');
  const formEl = useRef(null);
  return (
    <Modal
      title={modalTitle}
      visible={showModal}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Hủy bỏ
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={() => {
            formEl.current.submit();
          }}
        >
          Xác nhận
        </Button>,
      ]}
    >
      {inputMovie ? (
        <Form name="basic" onFinish={onFinish} ref={formEl}>
          <Form.Item
            label="Trailerurl"
            name="trailerUrl"
            rules={[
              {
                required: true,
                message: 'Trailerurl không được bỏ trống',
              },
            ]}
            initialValue={inputMovie.trailerUrl}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Posterurl"
            name="posterUrl"
            rules={[
              {
                required: true,
                message: 'Posterurl không được bỏ trống',
              },
            ]}
            initialValue={inputMovie.posterUrl}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Tên phim"
            name="name"
            rules={[
              {
                required: true,
                message: 'Tên phim không được bỏ trống',
              },
            ]}
            initialValue={inputMovie.name}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Đạo diễn"
            name="director"
            rules={[
              {
                required: true,
                message: 'Đạo diễn không được bỏ trống',
              },
            ]}
            initialValue={inputMovie.name}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Mô tả"
            rules={[
              {
                required: true,
                message: 'Mô tả không được bỏ trống',
              },
              {
                min: 20,
                message: 'Mô tả phải ít nhất 20 ký tự',
              },
            ]}
            initialValue={inputMovie.description}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="category" label="Thể loại">
            <Select defaultValue={inputMovie.category}>
              <Option value={'Kinh dị'}>Kinh dị</Option>
              <Option value={'Hành động'}>Hành động</Option>
              <Option value={'Viễn tưởng'}>Viễn tưởng</Option>
              <Option value={'Võ thuật'}>Võ thuật</Option>
              <Option value={'Chiến tranh'}>Chiến tranh</Option>
              <Option value={'Hài hước'}>Hài hước</Option>
              <Option value={'Tâm lý'}>Tâm lý</Option>
              <Option value={'Hình sự'}>Hình sự</Option>
              <Option value={'Phiêu lưu'}>Phiêu lưu</Option>
              <Option value={'Thần thoại'}>Thần thoại</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Thời lượng (phút)"
            name="duration"
            rules={[
              {
                required: true,
                message: 'Thời lượng không được bỏ trống',
              },
            ]}
            initialValue={inputMovie.duration}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Thời điểm ra mắt" name="premiereTime">
            <DatePicker
            // defaultValue={moment(inputMovie.premiereTime).format(
            //   'YYYY-MM-DD',
            // )}
            />
          </Form.Item>
          <Form.Item name="language" label="Ngôn ngữ">
            <Select defaultValue={inputMovie.language}>
              <Option value={'English'}>English</Option>
              <Option value={'Vietnamese'}>Vietnamese</Option>
            </Select>
          </Form.Item>
        </Form>
      ) : (
        <Form name="basic" onFinish={onFinish} ref={formEl}>
          <Form.Item
            label="Trailerurl"
            name="trailerUrl"
            rules={[
              {
                required: true,
                message: 'Trailerurl không được bỏ trống',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Posterurl"
            name="posterUrl"
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
            name="description"
            label="Mô tả"
            rules={[
              {
                required: true,
                message: 'Mô tả không được bỏ trống',
              },
              {
                min: 20,
                message: 'Mô tả phải ít nhất 20 ký tự',
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="category"
            label="Thể loại"
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
              <Option value={'Viễn tưởng'}>Viễn tưởng</Option>
              <Option value={'Võ thuật'}>Võ thuật</Option>
              <Option value={'Chiến tranh'}>Chiến tranh</Option>
              <Option value={'Hài hước'}>Hài hước</Option>
              <Option value={'Tâm lý'}>Tâm lý</Option>
              <Option value={'Hình sự'}>Hình sự</Option>
              <Option value={'Phiêu lưu'}>Phiêu lưu</Option>
              <Option value={'Thần thoại'}>Thần thoại</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Thời lượng (phút)"
            name="duration"
            rules={[
              {
                required: true,
                message: 'Thời lượng không được bỏ trống',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Thời điểm ra mắt"
            name="premiereTime"
            rules={[
              {
                required: true,
                message: 'Thời điểm ra mắt không được bỏ trống',
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="language"
            label="Ngôn ngữ"
            rules={[
              {
                required: true,
                message: 'Ngôn ngữ không được bỏ trống',
              },
            ]}
          >
            <Select>
              <Option value={'English'}>English</Option>
              <Option value={'Vietnamese'}>Vietnamese</Option>
            </Select>
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
};

export default AddEditMovieModal;
