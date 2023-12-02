import ArticleList from '@/components/ArticleList/ArticleList';
import { FilterChips } from '@/components/FilterChips';

export default function HomePage() {
  return (
    <>
      <FilterChips />
      <ArticleList />
    </>
  );
}
