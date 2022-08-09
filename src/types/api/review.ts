import { City } from '@/types/city';

export interface ReviewsListItemAuthor {
  name: string,
  avatar: string,
}

export interface ReviewsListItem {
  id: string,
  text: string,
  city: City,
  author: ReviewsListItemAuthor,
}
