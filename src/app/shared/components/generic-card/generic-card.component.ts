import { Component, Input } from '@angular/core';
import { CardData } from '../../interface/card.model';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss']
})
export class GenericCardComponent {

  /**
   * The card object that contains all data we need to display.
   * Conforms to the CardData interface if you created one.
   */
  @Input() cardData!: CardData;

  /**
   * Alternatively, you can define individual @Input() for each field
   * if you prefer not to use a separate interface. For example:
   *
   * @Input() category!: string;
   * @Input() title!: string;
   * @Input() description!: string;
   * @Input() authorName!: string;
   * @Input() date!: string;
   * @Input() imageUrl!: string;
   * @Input() link?: string;
   *
   * Then adapt the HTML template accordingly.
   */

}
