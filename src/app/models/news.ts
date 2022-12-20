export interface INewsItem {
  id?: number,
  newsName: string,
  shortDescribtion: string,
  fullNews: string,
  category: string,
  audioName: string,
  imgName: string,
  tags: string[],
  date: Date,
  isDisableComments?: boolean
}
