export interface ICollection {
  name: string;
  type: 'movies' | 'articles' | 'books';
  user_id: string;
  created_at?: number;
  updated_at?: number;
  is_public?: boolean;
  description: string;
}
