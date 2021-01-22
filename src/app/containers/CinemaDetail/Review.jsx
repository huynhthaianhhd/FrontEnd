import { memo } from 'react';
import {
  Comment,
  Avatar,
  Form,
  Button,
  List,
  Input,
  Tooltip,
  Rate,
} from 'antd';
import moment from 'moment';
const { TextArea } = Input;

export const Review = memo(({ onSubmit, cinemaReview }) => {
  const data = cinemaReview.map(review => ({
    author: review?.user?.name,
    avatar:
      'https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png',
    content: <p>{review?.content}</p>,
    datetime: (
      <Tooltip
        title={moment(review?.createdAt)
          .subtract(1, 'days')
          .format('YYYY-MM-DD')}
      >
        <div className="time-rating">
          <span>{moment(review?.createdAt).subtract(2, 'days').fromNow()}</span>
          <span style={{ marginLeft: '10px' }}>
            <Rate value={review?.rating} disabled defaultValue={5} />
          </span>
        </div>
      </Tooltip>
    ),
  }));
  return (
    <>
      <Comment
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={<Editor onSubmit={onSubmit} />}
      />
      {cinemaReview && <CommentList comments={data} />}
    </>
  );
});
const Editor = ({ onSubmit }) => (
  <>
    <Form
      className="register-form"
      id="form"
      onFinish={onSubmit}
      initialValues={{
        rating: 5,
        content: '',
      }}
    >
      <Form.Item name="rating">
        <Rate defaultValue={5} />
      </Form.Item>
      <Form.Item name="content">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary" form="form">
          Thêm đánh giá
        </Button>
      </Form.Item>
    </Form>
  </>
);
const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} Reviews`}
    itemLayout="horizontal"
    renderItem={item => (
      <li>
        <Comment
          actions={item.actions}
          author={item.author}
          avatar={item.avatar}
          content={item.content}
          datetime={item.datetime}
        />
      </li>
    )}
  />
);
