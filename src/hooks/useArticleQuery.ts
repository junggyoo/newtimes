import { useQuery } from '@tanstack/react-query';

import ArticleService from '@/services/ArticleService';

import { ArticleRequest } from '@/services/type';

export const useArticleQuery = (filter: ArticleRequest = {}) => {
  const { headline, date, country } = filter;

  const { data, isLoading } = useQuery({
    queryKey: ['news', headline, date, country],
    queryFn: () => ArticleService.fetchNews(filter),
  });

  return { data, isLoading };
};
