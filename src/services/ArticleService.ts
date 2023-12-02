// import { api } from '@/services/axios';

import { formattedDate } from '@/utils/date';
import { ArticleRequest } from './type';

import data from '@/mocks/data.json';

export default class ArticleService {
  static async fetchNews({
    headline,
    date,
    country,
    page,
    sort,
  }: ArticleRequest) {
    console.log(headline, date, country, page, sort);
    // const { data } = await api.get('', {
    //   params: {
    //     q: headline || 'Korea',
    //     begin_date: date,
    //     fq: `glocations:(${country || 'Korea'})`,
    //     page: page || 0,
    //     sort: sort || 'newest',
    //   },
    // });

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
