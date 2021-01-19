import { Image, Carousel } from 'antd';
import ImageBanner from 'images/em-la-cua-anh.jpg';
import ImageBanner2 from 'images/thosanquaivat.jpg';
import { memo } from 'react';
export const Banner = () => {
  return (
    <Carousel
      autoplay={true}
      effect="fade"
      easing="ease-in-out"
      dotPosition="bottom"
    >
      <Image src={ImageBanner} alt="banner" className="img" preview={false} />
      <Image src={ImageBanner2} alt="banner" className="img" preview={false} />
    </Carousel>
  );
};
export default memo(Banner);
