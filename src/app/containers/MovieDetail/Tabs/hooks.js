import useActions from 'hooks/useActions';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ACTION_STATUS } from 'utils/constants';
import { useParams } from 'react-router-dom';
import { selectCreateMovieReview } from '../selectors';
import { actions } from '../slice';
import { notifySuccess } from 'utils/notify';

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
  const handleChangeReview = useCallback(event => {
    const content = event.target.value;
  }, []);
  const handleChangeRating = useCallback(value => {}, []);

  const handleSubmitReview = useCallback(valueForm => {
    if (valueForm?.content) {
      createMovieReview({
        movieId: movieId.id,
        content: valueForm?.content,
        rating: valueForm?.rating ?? 5,
      });
    }
  }, []);

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
    handlers: { handleChangeReview, handleChangeRating, handleSubmitReview },
  };
};

export default useHooks;
