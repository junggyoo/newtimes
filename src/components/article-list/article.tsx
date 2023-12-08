import styled from '@emotion/styled';

import { Icon } from '../icon';

import { Article } from '@/services/type';

interface ArticleProps {
  article: Article;
}

export default function Article({ article }: ArticleProps) {
  const { headline, source, original, publishedAt } = article;
  return (
    <Container>
      <Headline>
        <Title>{headline}</Title>
        <Icon name="STAR" color="#6D6D6D" size={16} />
      </Headline>
      <Source>
        <NewsPaper>
          <span>{source}</span>
          {original && <span>{original} 기자</span>}
        </NewsPaper>
        <PublishedAt>{publishedAt}</PublishedAt>
      </Source>
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background-color: #fefefe;
`;

const Headline = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
`;

const Title = styled.h2`
  height: 5.6rem;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.4;
  color: #000000;
`;

const Source = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NewsPaper = styled.span`
  display: flex;
  gap: 0.8rem;
  font-size: 1.3rem;
`;

const PublishedAt = styled.span`
  font-size: 1.2rem;
  color: #6d6d6d;
`;
