import { Button, Select } from 'antd';
import { memo, useState } from 'react';
import moment from 'moment';

export const BookTicketQick = ({ listMovie, onConfirm }) => {
  const [current, setCurrent] = useState({
    indexMovie: null,
    indexCinema: null,
    indexShowTime: null,
    listCinemaCurrent: [],
    listShowTimeCurrent: [],
  });
  const checkCondition = () => {
    if (
      current?.indexMovie !== null &&
      current?.indexCinema !== null &&
      current.indexShowTime !== null
    )
      return { type: 'danger', disabled: false };
    return { type: 'danger', disabled: true };
  };
  const SelectMovie = () => {
    return (
      <Select
        className="dropdown"
        defaultValue="Chọn phim"
        value={
          current.indexMovie !== null
            ? listMovie[current.indexMovie].name
            : 'Chọn phim'
        }
        onSelect={data => {
          setCurrent(pre => {
            if (pre.indexCinema !== null) {
              return {
                ...pre,
                indexMovie: data,
                indexCinema: null,
                indexShowTime: null,
                listCinemaCurrent: listMovie[data].cinemas,
                listShowTimeCurrent: [],
              };
            } else {
              return {
                ...pre,
                indexMovie: data,
                listCinemaCurrent: listMovie[data].cinemas,
              };
            }
          });
        }}
      >
        {listMovie.length > 0 &&
          listMovie.map((e, i) => (
            <Select.Option key={i}>{e.name}</Select.Option>
          ))}
      </Select>
    );
  };
  const SelectCinemas = () => (
    <Select
      className="dropdown"
      trigger="click"
      defaultValue="Chọn rạp"
      notFoundContent={'Vui lòng chọn phim'}
      value={
        current.indexCinema !== null
          ? current.listCinemaCurrent[current.indexCinema].name
          : 'Chọn rạp'
      }
      onSelect={data => {
        setCurrent(pre => ({
          ...pre,
          indexCinema: data,
          listShowTimeCurrent: pre.listCinemaCurrent[data].showTime,
        }));
      }}
    >
      {current.listCinemaCurrent.length > 0 &&
        current.listCinemaCurrent.map((e, i) => (
          <Select.Option key={i}>{e.name}</Select.Option>
        ))}
    </Select>
  );
  const SelectShowTime = () => (
    <Select
      className="dropdown"
      trigger="click"
      defaultValue="Chọn suất chiếu"
      value={
        current.indexShowTime !== null
          ? moment(
              current.listShowTimeCurrent[current.indexShowTime].startTime,
            ).format('HH:mm DD/MM')
          : 'Chọn suất chiếu'
      }
      notFoundContent="Vui lòng chọn phim và rạp"
      onSelect={data => setCurrent(pre => ({ ...pre, indexShowTime: data }))}
    >
      {current.listShowTimeCurrent.length > 0 &&
        current.listShowTimeCurrent.map((e, i) => (
          <Select.Option key={i}>
            {moment(e.startTime).format('HH:mm DD/MM')}
          </Select.Option>
        ))}
    </Select>
  );
  return (
    <>
      <SelectMovie />
      <SelectCinemas />
      <SelectShowTime />
      <Button
        size="large"
        className="button"
        {...checkCondition()}
        onClick={() => onConfirm(current)}
      >
        Mua vé hôm nay
      </Button>
    </>
  );
};

export default memo(BookTicketQick);
