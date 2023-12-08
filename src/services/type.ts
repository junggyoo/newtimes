export interface ArticleRequest {
  headline?: string;
  date?: string;
  country?: string | string[];
  page?: number;
  sort?: string;
}

export interface Article {
  id: string;
  headline: string;
  source: string;
  original: string | null;
  publishedAt: string;
}

export interface NYTResponse {
  status: string;
  copyright: string;
  response: {
    docs: ArticleDto[];
  };
}

export interface ArticleDto {
  abstract: string;
  web_url: string;
  headline: {
    main: string;
    kicker?: string;
  };
  source: string;
  byline: {
    original: string;
  };
  pub_date: string;
  document_type: string;
  _id: string;
  word_count: number;
  section_name: string;
  subsection_name?: string;
  keywords: Keyword[];
  multimedia: Multimedia[];
}

export interface Keyword {
  name: string;
  value: string;
}

export interface Multimedia {
  url: string;
  height: number;
  width: number;
  subtype: string;
  caption: string;
  type: string;
}
