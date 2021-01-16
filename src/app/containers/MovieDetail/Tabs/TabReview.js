import React, { memo, createElement, useState } from 'react';
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
import { LikeOutlined, LikeFilled } from '@ant-design/icons';
import moment from 'moment';

const { TextArea } = Input;

export const TabReview = memo(props => {
  const { movieReviews } = props;
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

  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item>
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
        <Rate defaultValue={5} />
      </Form.Item>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </>
  );
  return (
    <Row justify="center">
      <div className="about-comments about">
        <Comment
          content={
            <Editor
            // onChange={this.handleChange}
            // onSubmit={this.handleSubmit}
            // submitting={submitting}
            // value={value}
            />
          }
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
