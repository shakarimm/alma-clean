import { City } from '@/types/city';

export interface ReviewsListItemAuthor {
  name: string,
  avatar: string,
}

export interface ReviewsListItem {
  text: string,
  city: City,
  author: ReviewsListItemAuthor,
}
