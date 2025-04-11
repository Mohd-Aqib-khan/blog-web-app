// card.model.ts
export interface CardData {
  category: string;
  title: string;
  description: string;
  authorName: string;
  date: string;
  imageUrl: string;
  link?: string; // optional if you have a click-through
}
