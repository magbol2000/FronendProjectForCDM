import {Data} from "@angular/router";

export interface INews {
  id?: number,
  news_name: string,
  short_describtion: string,
  full_news: string,
  // todo ICategory
  category: string,
  audio_name: string,
  img_name: string,
  tags: string[],
  // todo fill data
  data: string,
  is_disable_comments?: boolean
}
