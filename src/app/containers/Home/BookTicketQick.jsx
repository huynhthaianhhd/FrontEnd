import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
export const BookTicketQick = () => {
  const Item = {
    movie: [
      { name: 'Chị Mười Ba: 3 Ngày Sinh Tử (C18)' },
      { name: 'Thợ Săn Quái Vật - Monster Hunter (C13)' },
      { name: 'Nữ Thần Chiến Binh 1984 - Wonder Woman 1984 (C13)' },
      { name: 'Em Là Của Em (C16)' },
    ],
    cinema: [
      { name: 'BHD Star Bitexco' },
      { name: 'BHD Star Bitexco' },
      { name: 'BHD Star Vincom Quang Trung' },
    ],
    date: [
      { name: 'Ngày xem' },
      { name: 'BHD Star Bitexco' },
      { name: 'BHD Star Vincom Quang Trung' },
    ],
    tick: [
      { name: 'Xuất chiếu' },
      { name: 'BHD Star Bitexco' },
      { name: 'BHD Star Vincom Quang Trung' },
    ],
  };
  const MenuOverLay = overlay => (
    <Menu>
      {overlay.map((e, i) => (
        <Menu.Item key={i}>{e.name}</Menu.Item>
      ))}
    </Menu>
  );

  const DropDown = () => {
    return Object.keys(Item).map((value, i) => {
      const overlay = Item[value];
      return (
        <Dropdown overlay={MenuOverLay(overlay)} key={i} className="dropdown">
          <Button>
            {Item[value][0]?.name} <DownOutlined />
          </Button>
        </Dropdown>
      );
    });
  };
  return (
    <>
      {DropDown()}
      <Button size="large" className="button" type="primary">
        Mua vé
      </Button>
    </>
  );
};

export default BookTicketQick;
