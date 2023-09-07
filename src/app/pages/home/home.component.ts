import { Component, Input } from '@angular/core';
import { Post } from 'src/app/model/postModel';
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'blog';
  posts: Post[] = [];
  postPrincipal: Post[] = [];
  postsSecundarios: Post[] = [];
  constructor(private postsService: PostsService) {}
  ngOnInit() {
    this.postsService.getPosts().subscribe((data) => {
      this.posts = data;
      this.postPrincipal = this.posts.filter(
        (post) => post.isPrincipal == true
      );
      this.postsSecundarios = this.posts.filter(
        (post) => post.isPrincipal == false
      );
    });
  }
}
