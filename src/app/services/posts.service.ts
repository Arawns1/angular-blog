import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/postModel';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  BASE_URL: string = 'https://64fa2f414098a7f2fc1571a0.mockapi.io';
  constructor(private http: HttpClient) {}
  posts: Post[] = [];

  private fetchPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.BASE_URL}/posts`);
  }
  getPosts(): Observable<Post[]> {
    return this.fetchPosts().pipe(
      tap((data) => {
        this.convertPosts(data);
      })
    );
  }

  public convertPosts(posts: any) {
    const convertedPosts: Post[] = [];
    posts.forEach((post: any) => {
      let postConverted = new Post(
        post.id,
        post.title,
        post.description,
        post.posted,
        post.image,
        post.isPrincipal
      );
      convertedPosts.push(postConverted);
    });
    return convertedPosts;
  }
}
