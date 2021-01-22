import { memo } from 'react';
import { StyledNewsSummary, StyledBox } from './styles';

const NewsBox = ({ item, handleClickNews }) => {
  const { title, thumbnail, description } = item;
  return (
    <StyledBox onClick={() => handleClickNews(item.id)}>
      <img className="thumbnail" src={thumbnail} alt="news-thumbnail" />
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </StyledBox>
  );
};

export const NewsSummary = ({ data, handleClickNews }) => {
  return (
    <StyledNewsSummary>
      {data &&
        data.map(item => (
          <NewsBox
            key={item.id}
            item={item}
            handleClickNews={handleClickNews}
          />
        ))}
    </StyledNewsSummary>
  );
};
export default memo(NewsSummary);
