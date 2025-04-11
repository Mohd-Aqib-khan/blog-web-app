import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardData } from 'src/app/shared/interface/card.model';

@Component({
  selector: 'app-trending-blogs',
  templateUrl: './trending-blogs.component.html',
  styleUrls: ['./trending-blogs.component.scss']
})
export class TrendingBlogsComponent {

  // List of trending blog cards
  trendingBlogs: CardData[] = [
    {
      category: 'Tech',
      title: 'The Rise of AI',
      description: 'Exploring the latest advances in artificial intelligence.',
      authorName: 'Jane Doe',
      date: '10 Feb 2025',
      imageUrl: 'assets/images/Image.png',
      link: '/blog/ai-rise'
    },
    {
      category: 'Design',
      title: 'UI/UX Best Practices',
      description: 'How to design apps that users love.',
      authorName: 'John Smith',
      date: '22 Jan 2025',
      imageUrl: 'assets/images/Image (1).png',
      link: '/blog/ui-ux-best'
    },
    {
      category: 'Travel',
      title: 'Exploring the Alps',
      description: 'A breathtaking journey across the mountains.',
      authorName: 'Alice Johnson',
      date: '15 Mar 2025',
      imageUrl: 'assets/images/Image (2).png',
      link: '/blog/alps-travel'
    },
    {
      category: 'Food',
      title: 'Exquisite Culinary Arts',
      description: 'Discovering the secret recipes of top chefs.',
      authorName: 'Robert Brown',
      date: '05 Apr 2025',
      imageUrl: 'assets/images/Image.png',
      link: '/blog/culinary-arts'
    },
    // Add more cards if desired.
  ];

  // Grouped slides: each slide will show 4 cards
  slides: CardData[][] = [];

  ngOnInit(): void {
    this.slides = this.groupIntoChunks(this.trendingBlogs, 2);
  }

  /**
   * Groups an array into chunks of specified size.
   * @param arr The array to group.
   * @param chunkSize Number of items per chunk.
   */
  groupIntoChunks(arr: CardData[], chunkSize: number): CardData[][] {
    const chunks: CardData[][] = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }

}
