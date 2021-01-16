import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { memo } from 'react';

export const BookTicketQick = ({
  listMovie,
  currentCinemas,
  currentDate,
  currentShowTime,
  handleClick,
}) => {
  // const Cinema = [name];
  const MenuOverLay = overlay => (
    <Menu>
      {overlay.map((e, i) => (
        <Menu.Item key={i} onClick={() => handleClick(e)}>
          {e.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  const DropDownMovie = () => {
    return (
      <Dropdown
        overlay={MenuOverLay(listMovie)}
        className="dropdown"
        trigger="click"
      >
        <Button>
          Chọn phim <DownOutlined />
        </Button>
      </Dropdown>
    );
  };
  const DropDownCinemas = () => {
    return (
      <Dropdown
        overlay={MenuOverLay(currentCinemas)}
        className="dropdown"
        trigger="click"
      >
        <Button>
          Chọn rạp <DownOutlined />
        </Button>
      </Dropdown>
    );
  };
  const DropDownDate = () => {
    return (
      <Dropdown
        overlay={MenuOverLay(currentCinemas)}
        className="dropdown"
        trigger="click"
      >
        <Button>
          Chọn ngày xem <DownOutlined />
        </Button>
      </Dropdown>
    );
  };
  const DropDownShowTime = () => {
    return (
      <Dropdown
        overlay={MenuOverLay(currentCinemas)}
        className="dropdown"
        trigger="click"
      >
        <Button>
          Chọn suất chiếu <DownOutlined />
        </Button>
      </Dropdown>
    );
  };
  return (
    <>
      <DropDownMovie />
      <DropDownCinemas />
      <DropDownDate />
      <DropDownShowTime />
      <Button size="large" className="button" type="primary">
        Mua vé
      </Button>
    </>
  );
};

export default memo(BookTicketQick);
