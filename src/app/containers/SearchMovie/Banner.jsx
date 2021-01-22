import { Image, Carousel } from 'antd';
import ImageBanner from 'images/em-la-cua-anh.jpg';
import ImageBanner2 from 'images/thosanquaivat.jpg';
import ImageBanner3 from 'images/lua-deu.jpg';
import ImageBanner4 from 'images/sam-hoi.jpg';
import { memo } from 'react';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <LeftOutlined
      className={className}
      style={{
        ...style,
        display: 'block',
        fontSize: 45,
        color: '#5C4D4B',
        left: 0,
        width: 'unset',
        opacity: 0.8,
        paddingLeft: 15,
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <RightOutlined
      className={className}
      style={{
        ...style,
        display: 'block',
        fontSize: 45,
        color: '#5C4D4B',
        right: 0,
        width: 'unset',
        opacity: 0.8,
        paddingRight: 15,
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
}

export const Banner = () => {
  return (
    <Carousel
      autoplay
      dots={false}
      arrows
      effect="scrollx"
      easing="ease-in-out"
      nextArrow={<SampleNextArrow />}
      prevArrow={<SamplePrevArrow />}
    >
      <Image src={ImageBanner} alt="banner" className="img" preview={false} />
      <Image src={ImageBanner2} alt="banner" className="img" preview={false} />
      <Image src={ImageBanner3} alt="banner" className="img" preview={false} />
      <Image src={ImageBanner4} alt="banner" className="img" preview={false} />
    </Carousel>
  );
};
export default memo(Banner);
