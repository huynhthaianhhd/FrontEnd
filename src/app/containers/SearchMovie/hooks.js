import useActions from 'hooks/useActions';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { actions } from './slice';
import { selectSearchMovieList } from './selectors';
import { useHistory } from 'react-router-dom';
import { ACTION_STATUS } from 'utils/constants';
import { debounce } from 'lodash';

export const useHooks = () => {
  const { fetchSearchMovie } = useActions(
    {
      fetchSearchMovie: actions.searchMovie,
    },
    [actions],
  );
  const selectorSearchMovie = useSelector(selectSearchMovieList);
  const [searchMovieList, setSearchMovieList] = useState([]);
  const history = useHistory();

  const handleClickMovie = useCallback(
    id => {
      history.push(`/movie/${id}`);
    },
    [history],
  );

  useEffect(() => {
    fetchSearchMovie({
      term: '',
    });
  }, [fetchSearchMovie]);

  useEffect(() => {
    if (selectorSearchMovie && selectorSearchMovie.data) {
      if (selectorSearchMovie.status === ACTION_STATUS.SUCCESS) {
        setSearchMovieList(selectorSearchMovie.data);
      } else if (selectorSearchMovie.status === ACTION_STATUS.FAILED)
        setSearchMovieList([]);
    }
  }, [selectorSearchMovie]);

  const handleChangeInput = debounce(input => {
    fetchSearchMovie({ term: input });
  }, 500);

  return {
    selectors: {
      searchMovieList,
      selectorSearchMovie,
    },
    handles: {
      handleClickMovie,
      handleChangeInput,
    },
  };
};
