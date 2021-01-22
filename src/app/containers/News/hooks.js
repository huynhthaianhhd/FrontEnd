import useActions from 'hooks/useActions';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectNewsContent } from './selectors';
import { actions } from './slice';

const useHooks = () => {
  const content = useSelector(selectNewsContent);
  const { getNews } = useActions(
    {
      getNews: actions.getNews,
    },
    [actions],
  );

  const { id } = useParams();

  useEffect(() => getNews(id), [getNews, id]);

  return {
    handlers: {},
    selectors: {
      content,
    },
  };
};

export default useHooks;
