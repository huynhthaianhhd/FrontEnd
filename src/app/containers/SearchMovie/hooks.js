import useActions from 'hooks/useActions';
import { useCallback, useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { actions } from './slice';
import { selectSearchMovieList } from './selectors';
import { useHistory } from 'react-router-dom';
import { ACTION_STATUS } from 'utils/constants';
import queryString from 'query-string';

export const useHooks = props => {
  const { fetchSearchMovie } = useActions(
    {
      fetchSearchMovie: actions.searchMovie,
    },
    [actions],
  );
  const selectorSearchMovie = useSelector(selectSearchMovieList);
  const [searchMovieList, setSearchMovieList] = useState([]);
  const history = useHistory();
  const myRef = useRef(null);
  const { q } = queryString.parse(props.location.search);
  const handleClickMovie = useCallback(
    id => {
      history.push(`/movie/${id}`);
    },
    [history],
  );

  useEffect(() => {
    fetchSearchMovie({
      term: q,
    });
  }, [fetchSearchMovie, q]);

  useEffect(() => {
    if (selectorSearchMovie && selectorSearchMovie.data) {
      if (selectorSearchMovie.status === ACTION_STATUS.SUCCESS) {
        setSearchMovieList(selectorSearchMovie.data);
        myRef.current.scrollIntoView();
      } else if (selectorSearchMovie.status === ACTION_STATUS.FAILED)
        setSearchMovieList([]);
    }
  }, [selectorSearchMovie]);

  return {
    selectors: {
      searchMovieList,
      selectorSearchMovie,
      myRef,
    },
    handles: {
      handleClickMovie,
    },
  };
};
