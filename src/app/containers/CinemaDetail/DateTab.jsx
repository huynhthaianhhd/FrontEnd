import moment from 'moment';
import { memo, useState, useCallback, useMemo } from 'react';
import { changeToDateOfWeek } from 'utils/common';
import { StyledDateTab } from './styles';

export const DateTab = memo(() => {
  const [activeTab, setActiveTab] = useState(0);
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
  return [...Array(7).fill('')].map((e, i) => {
    return (
      <StyledDateTab
        isActive={activeTab === i}
        onClick={() => {
          setActiveTab(i);
        }}
      >
        {changeToDateOfWeek(dayOfWeek(i))}
        <div className="date">{currentDay + i}</div>
      </StyledDateTab>
    );
  });
});
