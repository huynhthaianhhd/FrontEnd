import useActions from 'hooks/useActions';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectDetailMovie,
  selectMovieReviews,
  selectGroupCinema,
} from './selectors';
import { actions } from './slice';
import { ACTION_STATUS } from 'utils/constants';
import { useParams } from 'react-router-dom';

const useHooks = () => {
  const selectorDetailMovie = useSelector(selectDetailMovie);
  const selectorMovieReviews = useSelector(selectMovieReviews);
  const selectorGroupCinema = useSelector(selectGroupCinema);
  const { getDetailMovie, getMovieReviews, fetchGroup } = useActions(
    {
      getDetailMovie: actions.getDetailMovie,
      getMovieReviews: actions.getMovieReviews,
      fetchGroup: actions.fetchGroup,
    },
    [actions],
  );
  const [detailMovie, setDetailMovie] = useState({});
  const [movieReviews, setMovieReviews] = useState([]);
  const [groupCinema, setGroupCinema] = useState([]);
  const movieId = useParams();

  useEffect(() => {
    getDetailMovie(movieId);
    getMovieReviews(movieId);
    fetchGroup();
  }, []);

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

  return {
    handlers: {},
    selectors: {
      detailMovie,
      movieReviews,
      groupCinema,
    },
  };
};

export default useHooks;
