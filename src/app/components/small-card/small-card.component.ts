import { Component, Input } from '@angular/core';
import { Post } from 'src/app/model/postModel';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: [
    './small-card.component.css',
    './small-card.responsive.component.css',
  ],
})
export class SmallCardComponent {
  @Input() post: Post = new Post(0, '', '', '', '', false);
}
