import { Image, Typography, Tag, Input } from 'antd';
import { StyledMovie } from './styles';
import { SearchOutlined } from '@ant-design/icons';
const { Title } = Typography;

export const Movie = ({
  searchMovieList,
  handleChangeInput,
  handleClickMovie,
}) => {
  const MoviePreview = ({ name, src, classify, id }) => {
    return (
      <StyledMovie>
        <div
          className="film"
          onClick={() => {
            handleClickMovie(id);
          }}
        >
          <Image src={src} className="image" preview={false} />
          <Title level={5}>
            <Tag color="#f50">{classify}</Tag>
            {name}
          </Title>
        </div>
      </StyledMovie>
    );
  };

  return (
    <div className="container">
      <div className="header">
        <Input
          className="header-search"
          placeholder="Tìm kiếm ..."
          suffix={<SearchOutlined />}
          onChange={event => {
            const input = event.target.value;
            handleChangeInput(input);
          }}
          allowClear
        />
      </div>
      <div className="main">
        {searchMovieList?.length > 0 &&
          searchMovieList.map((e, i) => {
            return <MoviePreview {...e} id={e.id} src={e.posterUrl} key={i} />;
          })}
      </div>
    </div>
  );
};
