import { useParams } from 'react-router-dom';
import { actions } from './slice';
import useActions from 'hooks/useActions';
import { useCallback, useEffect } from 'react';
import { makeListCinema } from './selectors';
import { useSelector } from 'react-redux';

export const useHooks = () => {
  const param = useParams();
  const listCinema = useSelector(makeListCinema);

  const { fetchListCinema } = useActions(
    {
      fetchListCinema: actions.fetchListCinema,
    },
    [actions],
  );

  useEffect(() => {
    fetchListCinema(param);
  }, [fetchListCinema, param]);

  return {
    selectors: {
      listCinema,
    },
    handles: {},
  };
};
