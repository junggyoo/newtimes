import styled from '@emotion/styled';

import { Icon } from '../Icon';

export default function News() {
  return (
    <Container>
      <Headline>
        <Title>국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”</Title>
        <Icon name="STAR" color="#6D6D6D" size={16} />
      </Headline>
      <Source>
        <NewsPaper>
          <span>중앙일보</span>
          <span>김정확 기자</span>
        </NewsPaper>
        <PublishedAt>2021.10.15(목)</PublishedAt>
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
