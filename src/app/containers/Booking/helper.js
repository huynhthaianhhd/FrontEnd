export const PRICE_PER_SEAT = 50;

export const calcPrice = pickedSeats => {
  const price = pickedSeats.reduce((acc, curr) => {
    return acc + curr.price * 1000;
  }, 0);

  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price);
};

export const nameOfSeats = pickedSeats => {
  return pickedSeats
    .map(item => `${item.row}${item.no.toString().padStart(2, '0')}`)
    .join(', ');
};

new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
  1000,
);
