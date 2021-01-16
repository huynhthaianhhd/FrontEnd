import React, { memo } from 'react';
import {
  Comment,
  Tooltip,
  List,
  Row,
  Form,
  Input,
  Button,
  Avatar,
  Rate,
} from 'antd';
import moment from 'moment';

const { TextArea } = Input;

export const TabReview = memo(props => {
  const { movieReviews, handleSubmitReview } = props;

  const data = movieReviews.map(review => ({
    author: review?.user?.name,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
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
            <Rate defaultValue={review?.rating} disabled />
          </span>
        </div>
      </Tooltip>
    ),
  }));

  const Editor = ({ handleSubmitReview }) => (
    <>
      <Form className="register-form" id="form" onFinish={handleSubmitReview}>
        <Form.Item name="rating">
          <Rate defaultValue={5} />
        </Form.Item>
        <Form.Item name="content">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" form="form">
            Add Comment
          </Button>
        </Form.Item>
      </Form>
    </>
  );
  return (
    <Row justify="center">
      <div className="about-comments about">
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={<Editor handleSubmitReview={handleSubmitReview} />}
        />
        <List
          header={`${data.length} Reviews`}
          itemLayout="horizontal"
          dataSource={data}
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
      </div>
    </Row>
  );
});

export default TabReview;
