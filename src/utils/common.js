// Create an array from start to end - 1: range(1, 3) --> [1, 2]
export const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

export const toBase64 = file => {
  if (!file) return null;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

export const changeToDateOfWeek = date => {
  if (date === 8) {
    return `Chủ Nhật`;
  } else {
    return `Thứ ${date}`;
  }
};

export const UrlCinema = () => {
  const Group = [
    'https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png',
    'https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg',
    'https://s3img.vcdn.vn/123phim/2018/09/9b240f96a233bb43203ee514a21a6004.png',
    'https://s3img.vcdn.vn/123phim/2018/09/7b078639bd8fdb09dd83652d207c7b90.png',
    'https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png',
  ];
  const Cinema = [
    'https://s3img.vcdn.vn/123phim/2021/01/bhd-star-vincom-thao-dien-16105955634183.png',
    'https://s3img.vcdn.vn/123phim/2021/01/bhd-star-vincom-3-2-16105957596860.png',
    'https://s3img.vcdn.vn/123phim/2021/01/bhd-star-pham-hung-16105959230642.png',
    'https://s3img.vcdn.vn/123phim/2021/01/bhd-star-vincom-quang-trung-16105960645760.png',
  ];
  return { Group, Cinema };
};

export const GetUrlGroup = i => {
  const { Group } = UrlCinema();
  const length = Group.length;
  if (i >= 0) {
    if (i >= length) {
      return Group[i - length];
    } else {
      return Group[i];
    }
  }
};
export const GetUrlCinema = i => {
  const { Cinema } = UrlCinema();
  const length = Cinema.length;
  if (i >= 0) {
    if (i >= length) {
      return Cinema[i - length];
    } else {
      return Cinema[i];
    }
  }
};
