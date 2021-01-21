import { useParams } from 'react-router-dom';
import { actions } from './slice';
import useActions from 'hooks/useActions';
import { useCallback, useEffect } from 'react';
import { makeListCinema, makeDefaultCinema } from './selectors';
import { useSelector } from 'react-redux';

export const useHooks = () => {
  const param = useParams();
  const listCinema = useSelector(makeListCinema);
  const defaultCinema = useSelector(makeDefaultCinema);
  const { fetchListCinema, setDefaultCinema } = useActions(
    {
      fetchListCinema: actions.fetchListCinema,
      setDefaultCinema: actions.setDefaultCinema,
    },
    [actions],
  );
  const onClickTab = useCallback(
    date => {
      fetchListCinema({ ...param, date: date });
    },
    [fetchListCinema, param],
  );

  const changeDefaultCinema = useCallback(
    index => {
      setDefaultCinema(index);
    },
    [setDefaultCinema],
  );

  useEffect(() => {
    fetchListCinema(param);
  }, [fetchListCinema, param]);

  return {
    selectors: {
      listCinema,
      defaultCinema,
    },
    handles: {
      onClickTab,
      changeDefaultCinema,
    },
  };
};
