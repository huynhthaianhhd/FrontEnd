import useActions from 'hooks/useActions';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { actions } from './slice';
import {
  makeGroupList,
  makeStatus,
  makeListMovieHighLight,
  makeListMovie,
  makeCurrentCinemas,
  makeCurrentDate,
  makeCurrentShowTime,
} from './selectors';
import { useHistory, useLocation } from 'react-router-dom';
import { actions as popupActions } from 'app/containers/Popup/slice';
import { POPUP_TYPE } from 'app/containers/Popup/constants';

export const useHooks = () => {
  const { fetchGroup, fetchListMovie, openPopup } = useActions(
    {
      fetchGroup: actions.fetchGroup,
      fetchListMovie: actions.fetchListMovie,
      openPopup: popupActions.openPopup,
    },
    [actions],
  );
  const status = useSelector(makeStatus);
  const cinemaGroupList = useSelector(makeGroupList);
  const listMovieHighLight = useSelector(makeListMovieHighLight);
  const listMovie = useSelector(makeListMovie);

  const currentCinemas = useSelector(makeCurrentCinemas);
  const currentDate = useSelector(makeCurrentDate);
  const currentShowTime = useSelector(makeCurrentShowTime);
  const history = useHistory();

  const handleSelectMovie = useCallback(id => {}, []);

  const handleClickMovie = useCallback(
    id => {
      history.push(`/movie/${id}`);
    },
    [history],
  );

  const handleSelectGroupCinema = useCallback(e => {}, []);
  const handleSelectCinema = useCallback(e => {}, []);

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
  }, [fetchGroup, fetchListMovie]);

  return {
    selectors: {
      cinemaGroupList,
      status,
      listMovieHighLight,
      listMovie,
      currentCinemas,
      currentDate,
      currentShowTime,
    },
    handles: {
      handleSelectMovie,
      handleSelectGroupCinema,
      handleSelectCinema,
      handleClickMovie,
      handleShowTrailer,
    },
  };
};
