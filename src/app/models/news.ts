export interface INewsItem {
  id?: number,
  news_name: string,
  short_describtion: string,
  full_news: string,
  category: string,
  audio_name: string,
  img_name: string,
  tags: string[],
  // Лучше всё же тип Data использовать, так ты сможешь преобразовывать дату и проводить всячиские манипуляции
  // На сегодняшнем созвоне говорилось про это
  data: string,
  is_disable_comments?: boolean
}
