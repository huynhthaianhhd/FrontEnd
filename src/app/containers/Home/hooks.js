import useActions from 'hooks/useActions';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { actions } from './slice';
import {
  makeGroupList,
  makeStatus,
  // makeListMovieHighLight,
  makeListMovie,
  makeListMovieToday,
  makeLoading,
  makeCurrentError,
  selectNewsSummaryData,
} from './selectors';
import { useHistory } from 'react-router-dom';
import { actions as popupActions } from 'app/containers/Popup/slice';
import { POPUP_TYPE } from 'app/containers/Popup/constants';

export const useHooks = () => {
  const {
    fetchGroup,
    fetchListMovie,
    openPopup,
    getListMovieInDay,
    fetchNewsSummary,
  } = useActions(
    {
      fetchGroup: actions.fetchGroup,
      fetchListMovie: actions.fetchListMovie,
      fetchNewsSummary: actions.fetchNewsSummary,
      openPopup: popupActions.openPopup,
      getListMovieInDay: actions.getListMovieInDay,
    },
    [actions],
  );
  const status = useSelector(makeStatus);
  const cinemaGroupList = useSelector(makeGroupList);
  const listMovie = useSelector(makeListMovie);
  const loading = useSelector(makeLoading);
  const currentError = useSelector(makeCurrentError);
  const listMovieToday = useSelector(makeListMovieToday);
  const newsSummary = useSelector(selectNewsSummaryData);

  const history = useHistory();

  const handleClickMovie = useCallback(
    id => {
      history.push(`/movie/${id}`);
    },
    [history],
  );

  const confirmBooking = useCallback(
    ({ listShowTimeCurrent, indexShowTime }) => {
      if (listShowTimeCurrent.length < 1 || indexShowTime === null) return;
      history.push(`/booking/${listShowTimeCurrent[indexShowTime]?.id}`);
    },
    [history],
  );
  const handleClickNews = useCallback(
    id => {
      history.push(`/news/${id}`);
    },
    [history],
  );

  const handleShowTrailer = trailerUrl => {
    if (trailerUrl)
      openPopup({
        key: 'showTrailer',
        type: POPUP_TYPE.LIVE_STREAM_VIDEO,
        data: { url: trailerUrl },
      });
  };
  useEffect(() => {
    fetchGroup();
    fetchListMovie();
    getListMovieInDay();
    fetchNewsSummary(2);
  }, [fetchGroup, fetchListMovie, getListMovieInDay, fetchNewsSummary]);

  return {
    selectors: {
      cinemaGroupList,
      status,
      listMovie,
      listMovieToday,
      loading,
      currentError,
      newsSummary,
    },
    handles: {
      // handleSelectMovie,
      confirmBooking,
      handleClickMovie,
      handleShowTrailer,
      handleClickNews,
    },
  };
};
