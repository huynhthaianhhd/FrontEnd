import useActions from 'hooks/useActions';
import { useCallback, useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { actions } from './slice';
import { selectSearchMovieList } from './selectors';
import { useHistory } from 'react-router-dom';
import { ACTION_STATUS } from 'utils/constants';
import queryString from 'query-string';
import { actions as popupActions } from 'app/containers/Popup/slice';
import { POPUP_TYPE } from 'app/containers/Popup/constants';

export const useHooks = props => {
  const { fetchSearchMovie, openPopup } = useActions(
    {
      fetchSearchMovie: actions.searchMovie,
      openPopup: popupActions.openPopup,
    },
    [actions],
  );
  const selectorSearchMovie = useSelector(selectSearchMovieList);
  const [searchMovieList, setSearchMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();
  const myRef = useRef(null);
  const { q } = queryString.parse(props.location.search);
  const handleClickMovie = useCallback(
    id => {
      history.push(`/movie/${id}`);
    },
    [history],
  );

  const total = selectorSearchMovie?.total ?? 0;

  useEffect(() => {
    fetchSearchMovie({
      term: q,
      page: currentPage,
      perPage: 12,
    });
  }, [currentPage, fetchSearchMovie, q]);

  useEffect(() => {
    setCurrentPage(1);
  }, [q]);

  const handleChangePage = page => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (selectorSearchMovie && selectorSearchMovie.data) {
      if (selectorSearchMovie.status === ACTION_STATUS.SUCCESS) {
        setSearchMovieList(selectorSearchMovie.data);
        myRef.current.scrollIntoView();
      } else if (selectorSearchMovie.status === ACTION_STATUS.FAILED)
        setSearchMovieList([]);
    }
  }, [selectorSearchMovie]);

  const handleShowTrailer = trailerUrl => {
    if (trailerUrl)
      openPopup({
        key: 'showTrailer',
        type: POPUP_TYPE.LIVE_STREAM_VIDEO,
        data: { url: trailerUrl },
      });
  };

  return {
    selectors: {
      searchMovieList,
      selectorSearchMovie,
      myRef,
      currentPage,
      total,
    },
    handles: {
      handleClickMovie,
      handleChangePage,
      handleShowTrailer,
    },
  };
};
