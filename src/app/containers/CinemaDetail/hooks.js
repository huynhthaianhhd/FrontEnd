import { useParams } from 'react-router-dom';
import { actions } from './slice';
import useActions from 'hooks/useActions';
import { useCallback, useEffect } from 'react';
import { makeListCinema, makeDefaultCinema } from './selectors';
import { useSelector } from 'react-redux';
import { useGetUserInfoAuthenticate } from '../Login/hooks';

export const useHooks = () => {
  const param = useParams();
  const listCinema = useSelector(makeListCinema);
  const defaultCinema = useSelector(makeDefaultCinema);
  const user = useGetUserInfoAuthenticate();
  const {
    fetchListCinema,
    fetchReviewOfCinema,
    addReviewOfCinema,
  } = useActions(
    {
      fetchListCinema: actions.fetchListCinema,
      fetchReviewOfCinema: actions.fetchReviewOfCinema,
      addReviewOfCinema: actions.addReviewOfCinema,
    },
    [actions],
  );
  const onClickTab = useCallback(
    date => {
      fetchListCinema({ ...param, date: date });
    },
    [fetchListCinema, param],
  );
  const onSubmitReview = useCallback(
    data => {
      const data1 = {
        userId: user?.id,
        cinemaId: defaultCinema?.id,
        ...data,
      };
      addReviewOfCinema(data1);
    },
    [user, addReviewOfCinema, defaultCinema],
  );
  const changeDefaultCinema = useCallback(
    index => {
      fetchReviewOfCinema(listCinema[index]);
    },
    [fetchReviewOfCinema, listCinema],
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
      onSubmitReview,
    },
  };
};
