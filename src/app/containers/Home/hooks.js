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

export const useHooks = () => {
  const { fetchGroup, fetchListMovie } = useActions(
    {
      fetchGroup: actions.fetchGroup,
      fetchListMovie: actions.fetchListMovie,
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
    },
  };
};
