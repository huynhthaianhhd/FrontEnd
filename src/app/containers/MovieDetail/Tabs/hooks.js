import useActions from 'hooks/useActions';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ACTION_STATUS } from 'utils/constants';
import { useParams } from 'react-router-dom';
import { selectCreateMovieReview } from '../selectors';
import { actions } from '../slice';
import { notifySuccess } from 'utils/notify';
import moment from 'moment';

const useHooks = props => {
  const { detailMovie, movieReviews } = props;
  const selectorCreateMovieReview = useSelector(selectCreateMovieReview);
  const { createMovieReview, getMovieReviews } = useActions(
    {
      createMovieReview: actions.createMovieReview,
      getMovieReviews: actions.getMovieReviews,
    },
    [actions],
  );
  const movieId = useParams();
  const [activeDate, setActiveDate] = useState({
    tab: 0,
    date: moment(),
  });

  const handleActiveTabDate = useCallback(data => {
    console.log({ data });
    setActiveDate(preState => ({
      ...preState,
      ...data,
    }));
  }, []);

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
    if (selectorCreateMovieReview && selectorCreateMovieReview.data) {
      if (selectorCreateMovieReview.status === ACTION_STATUS.SUCCESS) {
        getMovieReviews(movieId);
        notifySuccess('Review Success');
      } else if (selectorCreateMovieReview.status === ACTION_STATUS.FAILED)
        notifySuccess('Review Fail');
    }
  }, [selectorCreateMovieReview, movieId, getMovieReviews]);

  return {
    selectors: { activeDate },
    handlers: { handleSubmitReview, handleActiveTabDate },
  };
};

export default useHooks;
