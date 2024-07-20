export type Book = {
  id: number;
  title: string;
  author: string;
  description: string;
  cover: string;
  publicationDate: string;
  isLocal?: boolean; // Optional property to indicate if the book is locally added
}
