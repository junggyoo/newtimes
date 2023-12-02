import { ArticleList } from '@/components/ArticleList';
import { FilterChips } from '@/components/filter-chips';

export default function HomePage() {
  return (
    <>
      <FilterChips />
      <ArticleList />
    </>
  );
}
