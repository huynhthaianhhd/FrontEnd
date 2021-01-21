import useActions from 'hooks/useActions';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ACTION_STATUS } from 'utils/constants';
import { useParams } from 'react-router-dom';
import { selectCreateMovieReview, selectCinemaList } from '../selectors';
import { actions } from '../slice';
import { notifySuccess } from 'utils/notify';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

const useHooks = props => {
  const { groupCinema } = props;
  const selectorCreateMovieReview = useSelector(selectCreateMovieReview);
  const selectorCinemaList = useSelector(selectCinemaList);
  const { createMovieReview, getMovieReviews, getCinemaList } = useActions(
    {
      createMovieReview: actions.createMovieReview,
      getMovieReviews: actions.getMovieReviews,
      getCinemaList: actions.getCinemaList,
    },
    [actions],
  );
  const history = useHistory();
  const movieId = useParams();
  const [cinemaList, setCinemaList] = useState([]);
  const [activeDate, setActiveDate] = useState({
    tab: 0,
    date: moment(),
  });

  const [activeTabGroup, setActiveTabGroup] = useState('');

  const handleActiveTabDate = useCallback(
    data => {
      setActiveDate(preState => ({
        ...preState,
        ...data,
      }));
      getCinemaList({
        movieId: movieId.id,
        idGroup: activeTabGroup ?? groupCinema[0].id,
        startTime: data?.date,
      });
    },
    [activeTabGroup, groupCinema, getCinemaList, movieId],
  );

  const handleActiveTabGroup = useCallback(
    data => {
      setActiveTabGroup(data);
      getCinemaList({
        movieId: movieId.id,
        idGroup: data,
        startTime: activeDate?.date,
      });
    },
    [activeDate, getCinemaList, movieId],
  );

  const handleSubmitReview = useCallback(
    valueForm => {
      if (valueForm?.content) {
        createMovieReview({
          movieId: movieId.id,
          content: valueForm?.content,
          rating: valueForm?.rating ?? 5,
        });
      }
    },
    [createMovieReview, movieId.id],
  );

  useEffect(() => {
    if (groupCinema[0]) {
      getCinemaList({
        movieId: movieId.id,
        idGroup: groupCinema[0]?.id,
        startTime: moment(),
      });
      setActiveTabGroup(groupCinema[0]?.id);
    }
  }, [groupCinema, getCinemaList, movieId]);

  useEffect(() => {
    if (selectorCreateMovieReview && selectorCreateMovieReview.data) {
      if (selectorCreateMovieReview.status === ACTION_STATUS.SUCCESS) {
        getMovieReviews(movieId);
        notifySuccess('Review Success');
      } else if (selectorCreateMovieReview.status === ACTION_STATUS.FAILED)
        notifySuccess('Review Fail');
    }
  }, [selectorCreateMovieReview, movieId, getMovieReviews]);

  useEffect(() => {
    if (selectorCinemaList && selectorCinemaList.data) {
      if (selectorCinemaList.status === ACTION_STATUS.SUCCESS) {
        setCinemaList(selectorCinemaList.data);
      } else if (selectorCinemaList.status === ACTION_STATUS.FAILED)
        setCinemaList([]);
    }
  }, [selectorCinemaList]);

  const handleBooking = useCallback(
    id => {
      history.push(`/booking/${id}`);
    },
    [history],
  );

  return {
    selectors: { activeDate, cinemaList },
    handlers: {
      handleSubmitReview,
      handleActiveTabDate,
      handleActiveTabGroup,
      handleBooking,
    },
  };
};

export default useHooks;
