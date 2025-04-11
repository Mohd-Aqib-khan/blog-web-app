import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostDetails } from 'src/app/dashboard/interface/post.model';

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
  @Input({ required: true }) cardData!: PostDetails;

  constructor(private router: Router) { }

  onClickPost(id: number) {
    debugger;
    this.router.navigate(['/dashboard/post', id])

  }

}
