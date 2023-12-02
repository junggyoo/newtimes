import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

export const formattedDate = (date: string) => {
  return format(new Date(date), 'yyyy.M.dd. (E)', { locale: ko });
};
