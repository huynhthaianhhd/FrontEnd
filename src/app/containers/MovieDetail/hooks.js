import useActions from 'hooks/useActions';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectDetailMovie,
  selectMovieReviews,
  selectGroupCinema,
} from './selectors';
import { actions } from './slice';
import { ACTION_STATUS } from 'utils/constants';
import { POPUP_TYPE } from 'app/containers/Popup/constants';
import { actions as popupActions } from 'app/containers/Popup/slice';
import { useParams } from 'react-router-dom';

const useHooks = () => {
  const selectorDetailMovie = useSelector(selectDetailMovie);
  const selectorMovieReviews = useSelector(selectMovieReviews);
  const selectorGroupCinema = useSelector(selectGroupCinema);
  const { getDetailMovie, getMovieReviews, fetchGroup, openPopup } = useActions(
    {
      getDetailMovie: actions.getDetailMovie,
      getMovieReviews: actions.getMovieReviews,
      fetchGroup: actions.fetchGroup,
      openPopup: popupActions.openPopup,
    },
    [actions, popupActions],
  );
  const [detailMovie, setDetailMovie] = useState({});
  const [movieReviews, setMovieReviews] = useState([]);
  const [groupCinema, setGroupCinema] = useState([]);
  const movieId = useParams();

  useEffect(() => {
    fetchGroup();
    getDetailMovie(movieId);
    getMovieReviews(movieId);
  }, [getDetailMovie, fetchGroup, getMovieReviews, movieId]);

  useEffect(() => {
    if (selectorDetailMovie && selectorDetailMovie.data) {
      if (selectorDetailMovie.status === ACTION_STATUS.SUCCESS) {
        setDetailMovie(selectorDetailMovie.data);
      } else if (selectorDetailMovie.status === ACTION_STATUS.FAILED)
        setDetailMovie({});
    }
  }, [selectorDetailMovie]);

  useEffect(() => {
    if (selectorMovieReviews && selectorMovieReviews.data) {
      if (selectorMovieReviews.status === ACTION_STATUS.SUCCESS) {
        setMovieReviews(selectorMovieReviews.data);
      } else if (selectorMovieReviews.status === ACTION_STATUS.FAILED)
        setMovieReviews([]);
    }
  }, [selectorMovieReviews]);

  useEffect(() => {
    if (selectorGroupCinema && selectorGroupCinema.data) {
      if (selectorGroupCinema.status === ACTION_STATUS.SUCCESS) {
        setGroupCinema(selectorGroupCinema.data);
      } else if (selectorGroupCinema.status === ACTION_STATUS.FAILED)
        setGroupCinema([]);
    }
  }, [selectorGroupCinema]);

  const handleShowTrailer = trailerUrl => {
    if (trailerUrl)
      openPopup({
        key: 'showTrailer',
        type: POPUP_TYPE.LIVE_STREAM_VIDEO,
        data: { url: trailerUrl },
      });
  };

  return {
    handlers: { handleShowTrailer },
    selectors: {
      detailMovie,
      movieReviews,
      groupCinema,
      selectorGroupCinema,
    },
  };
};

export default useHooks;
