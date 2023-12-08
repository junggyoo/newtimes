import { ArticleList } from '@/components/article-list';
import { FilterChips } from '@/components/filter-chips';

export default function HomePage() {
  return (
    <>
      <FilterChips />
      <ArticleList />
    </>
  );
}
