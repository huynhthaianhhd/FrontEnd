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

export const TabReview = memo(() => {
  const data = [
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: 'Han Solo',
      avatar:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure), to help people create
          their product prototypes beautifully and efficiently.
        </p>
      ),
      datetime: (
        <Tooltip
          title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}
        >
          <div className="time-rating">
            <span>{moment().subtract(2, 'days').fromNow()}</span>
            <span>
              <Rate defaultValue={4} disabled />
            </span>
          </div>
        </Tooltip>
      ),
    },
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: 'Han Solo',
      avatar:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure), to help people create
          their product prototypes beautifully and efficiently.
        </p>
      ),
      datetime: (
        <Tooltip
          title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}
        >
          <div className="time-rating">
            <span>{moment().subtract(2, 'days').fromNow()}</span>
            <span>
              <Rate defaultValue={4} disabled />
            </span>
          </div>
        </Tooltip>
      ),
    },
  ];
  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item>
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
        <Rate />
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
    <Row style={{ padding: '20px' }}>
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
          header={`${data.length} replies`}
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
