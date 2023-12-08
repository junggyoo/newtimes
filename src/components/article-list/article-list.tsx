import styled from '@emotion/styled';

import Article from './article';

import { useArticleQuery } from '@/hooks/useArticleQuery';
import { useGlobalStore } from '@/store/global';

const VIEW_HEIGHT = window.innerHeight;
const HEADER_HEIGHT = 87;
const BOTTOM_HEIGHT = 85;

export default function ArticleList() {
  const filter = useGlobalStore((state) => state.filter);

  const { data, isLoading } = useArticleQuery(filter);

  if (isLoading) {
    return <h1>로딩중...</h1>;
  }

  if (!data.length) {
    return <h1>데이터가 없습니다.</h1>;
  }

  return (
    <Container height={VIEW_HEIGHT}>
      {data?.map((article) => {
        return <Article key={article.id} article={article} />;
      })}
    </Container>
  );
}

const Container = styled.section<{ height: number }>`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 2rem;

  height: ${({ height }) => (height - (HEADER_HEIGHT + BOTTOM_HEIGHT)) / 10}rem;
  overflow-y: scroll;
`;
