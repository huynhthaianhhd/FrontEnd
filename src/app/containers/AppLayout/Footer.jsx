import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { StyledFooter, BrandIcon } from './styles';
import bhdIcon from 'assets/png/bhd.png';
import touchIcon from 'assets/png/touch.png';
import cgvIcon from 'assets/png/cgv.png';
import galaxycineIcon from 'assets/png/galaxycine.png';
import cinestarIcon from 'assets/png/cinestar.png';
import vcbIcon from 'assets/png/vcb.png';
import agriIcon from 'assets/png/agri.png';
import zalopayIcon from 'assets/png/zalopay.png';
import megaIcon from 'assets/png/mega.png';
import ddcIcon from 'assets/png/ddc.png';
import bocongthuongIcon from 'assets/png/bocongthuong.png';
import zionIcon from 'assets/png/zion.jpg';
import {
  AppleFilled,
  AndroidFilled,
  FacebookFilled,
  TwitterSquareFilled,
} from '@ant-design/icons';

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="content border">
        <div className="column">
          <p className="title">AE1N</p>
          <Link to="#">FAQ</Link>
          <Link to="#">Brand Guidelines</Link>
        </div>
        <div className="column">
          <p className="title">CHÍNH SÁCH</p>
          <Link to="#">Thỏa thuận sử dụng</Link>
          <Link to="#">Chính sách bảo mật</Link>
        </div>
        <div className="column">
          <p className="title">ĐỐI TÁC</p>
          <div>
            <BrandIcon src={bhdIcon} />
            <BrandIcon src={cgvIcon} />
            <BrandIcon src={galaxycineIcon} />
            <BrandIcon src={cinestarIcon} />
            <BrandIcon src={touchIcon} />
          </div>
          <div>
            <BrandIcon src={vcbIcon} />
            <BrandIcon src={agriIcon} />
            <BrandIcon src={zalopayIcon} />
            <BrandIcon src={megaIcon} />
            <BrandIcon src={ddcIcon} />
          </div>
          <div>
            <BrandIcon src={bhdIcon} />
            <BrandIcon src={cgvIcon} />
            <BrandIcon src={galaxycineIcon} />
            <BrandIcon src={cinestarIcon} />
            <BrandIcon src={touchIcon} />
          </div>
          <div>
            <BrandIcon src={vcbIcon} />
            <BrandIcon src={agriIcon} />
            <BrandIcon src={zalopayIcon} />
            <BrandIcon src={megaIcon} />
            <BrandIcon src={ddcIcon} />
          </div>
        </div>
        <div className="column">
          <p className="title">MOBILE APP</p>
          <div>
            <AppleFilled
              style={{ fontSize: 30, color: '#949494', marginRight: 15 }}
            />
            <AndroidFilled
              style={{ fontSize: 30, color: '#949494', marginRight: 15 }}
            />
          </div>
        </div>
        <div className="column">
          <p className="title">SOCIAL</p>
          <div>
            <FacebookFilled
              style={{ fontSize: 30, color: '#949494', marginRight: 15 }}
            />
            <TwitterSquareFilled
              style={{ fontSize: 30, color: '#949494', marginRight: 15 }}
            />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="column">
          <img className="zion-logo" src={zionIcon} alt="zion" />
        </div>
        <div className="column full">
          <p className="title no-margin">SẢN PHẨM CỦA CÔNG TY CỔ PHẦN XYZ</p>
          <span>
            Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí
            Minh, Việt Nam.
          </span>
          <span>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</span>
          <span>
            Đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
            hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
          </span>
          <span>Số Điện Thoại (Hotline): 1900 545 436</span>
          <div>
            <span>Email: </span>
            <span className="email">anhem1nha@gmail.com</span>
          </div>
        </div>
        <div className="column">
          <img
            className="bo-cong-thuong"
            src={bocongthuongIcon}
            alt="bo-cong-thuong"
          />
        </div>
      </div>
    </StyledFooter>
  );
};

export default memo(Footer);
