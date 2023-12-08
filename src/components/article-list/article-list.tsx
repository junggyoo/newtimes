import styled from '@emotion/styled';

import Article from './article';

import { useArticleQuery } from '@/hooks/useArticleQuery';

const VIEW_HEIGHT = window.innerHeight;
const HEADER_HEIGHT = 87;
const BOTTOM_HEIGHT = 85;

export default function ArticleList() {
  const { data, isLoading } = useArticleQuery({
    headline: 'openai',
    date: '20231106',
  });

  if (isLoading) {
    return <h1>로딩중...</h1>;
  }

  console.log(data);

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
