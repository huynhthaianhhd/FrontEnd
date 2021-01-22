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
  makeCurrentShowTime,
  makeLoading,
  makeCurrentError,
} from './selectors';
import { useHistory, useLocation } from 'react-router-dom';
import { actions as popupActions } from 'app/containers/Popup/slice';
import { POPUP_TYPE } from 'app/containers/Popup/constants';

export const useHooks = () => {
  const {
    fetchGroup,
    fetchListMovie,
    openPopup,
    getListMovieInDay,
  } = useActions(
    {
      fetchGroup: actions.fetchGroup,
      fetchListMovie: actions.fetchListMovie,
      openPopup: popupActions.openPopup,
      getListMovieInDay: actions.getListMovieInDay,
    },
    [actions],
  );
  const status = useSelector(makeStatus);
  const cinemaGroupList = useSelector(makeGroupList);
  // const listMovieHighLight = useSelector(makeListMovieHighLight);
  const listMovie = useSelector(makeListMovie);
  const loading = useSelector(makeLoading);
  const currentError = useSelector(makeCurrentError);
  const listMovieToday = useSelector(makeListMovieToday);
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
  }, [fetchGroup, fetchListMovie, getListMovieInDay]);

  return {
    selectors: {
      cinemaGroupList,
      status,
      // listMovieHighLight,
      listMovie,
      listMovieToday,
      loading,
      currentError,
    },
    handles: {
      // handleSelectMovie,
      confirmBooking,
      handleClickMovie,
      handleShowTrailer,
    },
  };
};
