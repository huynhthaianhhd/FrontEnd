import useActions from 'hooks/useActions';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { actions } from './slice';
import { makeGroupList, makeStatus, makeListFilmHighLight } from './selectors';

export const useHooks = () => {
  const { fetchGroup, setCurrentCinema, fetchHighLight } = useActions(
    {
      fetchGroup: actions.fetchGroup,
      setCurrentCinema: actions.setCurrentCinema,
      fetchHighLight: actions.fetchListFilmHightLight,
    },
    [actions],
  );
  const status = useSelector(makeStatus);
  const cinemaGroupList = useSelector(makeGroupList);
  const listFilmHighLight = useSelector(makeListFilmHighLight);

  useEffect(() => {
    fetchGroup();
    fetchHighLight();
  }, [fetchGroup, fetchHighLight]);

  return {
    selectors: {
      cinemaGroupList,
      status,
      listFilmHighLight,
    },
    handles: {},
  };
};
