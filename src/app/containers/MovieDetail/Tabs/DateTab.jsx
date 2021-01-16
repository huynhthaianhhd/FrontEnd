import moment from 'moment';
import { memo, useState, useCallback, useMemo } from 'react';
import { changeToDateOfWeek } from 'utils/common';
import { StyledDateTab } from './styles';

export const DateTab = memo(props => {
  const { activeDate, handleActiveTabDate } = props;
  const currentDayOfWeek = useMemo(() => {
    return moment().isoWeekday();
  }, []);
  const currentDate = useMemo(() => {
    return moment(Date().now);
  }, []);
  const dayOfWeek = useCallback(
    i => {
      const cc = currentDayOfWeek + i >= 8 ? `${i}` : currentDayOfWeek + i + 1;
      return cc;
    },
    [currentDayOfWeek],
  );
  return [...Array(7).fill('')].map((e, i) => {
    return (
      <StyledDateTab
        isActive={activeDate?.tab === i}
        onClick={() => {
          const dateNow = moment(Date().now);
          handleActiveTabDate({
            tab: i,
            date: dateNow.add(i, 'days'),
          });
        }}
      >
        {changeToDateOfWeek(dayOfWeek(i))}
        <div className="date">{currentDate.date() + i}</div>
      </StyledDateTab>
    );
  });
});
