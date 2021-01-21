import moment from 'moment';
import { memo, useCallback, useMemo } from 'react';
import { changeToDateOfWeek } from 'utils/common';
import { StyledDateTab } from './styles';

export const DateTab = memo(({ onClickTab, activeTab = 0, onChangeTab }) => {
  const currentDayOfWeek = useMemo(() => {
    return moment().isoWeekday();
  }, []);
  const currentDay = useMemo(() => {
    return moment().date();
  }, []);
  const dayOfWeek = useCallback(
    i => {
      const cc = currentDayOfWeek + i >= 8 ? `${i}` : currentDayOfWeek + i + 1;
      return cc;
    },
    [currentDayOfWeek],
  );
  return [...Array(7).fill('')].map((_, i) => {
    const temp = moment().add(i, 'days').toDate();
    return (
      <StyledDateTab
        isActive={activeTab === i}
        onClick={() => {
          onChangeTab(i);
          onClickTab(temp);
        }}
        key={i}
      >
        {changeToDateOfWeek(dayOfWeek(i))}
        <div className="date">{currentDay + i}</div>
      </StyledDateTab>
    );
  });
});
