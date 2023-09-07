import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/model/postModel';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  post: Post = new Post(0, '', '', '', '', false);
  id: string | null = '';
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.postsService.getPosts().subscribe((data) => {
      this.post = data.filter((post) => post.id == Number(this.id))[0];
    });
  }
}
