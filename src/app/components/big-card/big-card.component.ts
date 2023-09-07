import { Component, Input } from '@angular/core';
import { Post } from 'src/app/model/postModel';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: [
    './big-card.component.css',
    './big-card.responsive.component.css',
  ],
})
export class BigCardComponent {
  @Input() post: Post = new Post(0, '', '', '', '', false);
}
