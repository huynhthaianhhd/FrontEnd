import { Image } from 'antd';
import ImageBanner from 'images/em-la-cua-anh.jpg';
export const Banner = () => {
  return (
    <Image src={ImageBanner} alt="banner" className="img" preview={false} />
  );
};
export default Banner;
