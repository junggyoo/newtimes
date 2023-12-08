import { api } from '@/services/axios';

import { formattedDate } from '@/utils/date';
import { ArticleRequest } from './type';

// import data from '@/mocks/data.json';

export default class ArticleService {
  static async fetchNews({ headline, date, country, page }: ArticleRequest) {
    const getCountries = () => {
      if (Array.isArray(country)) {
        return country.join(' ');
      }

      return country;
    };

    const countries = getCountries();

    const { data } = await api.get('', {
      params: {
        q: `${countries || ''} ${headline}`,
        begin_date: date || new Date().toISOString().split('T')[0],
        end_date: date || new Date().toISOString().split('T')[0],
        page: page || 0,
        sort: 'newest',
      },
    });

    const articles = data.response.docs.map((article) => {
      return {
        id: article._id,
        headline: article.headline.main,
        source: article.source,
        original: article.byline.original,
        publishedAt: formattedDate(article.pub_date),
      };
    });

    return articles;
  }
}
