export class Post {
  id: number;
  title: string;
  description: string;
  posted: string;
  image: string;
  isPrincipal: boolean;

  constructor(
    id: number,
    title: string,
    description: string,
    created: string,
    image: string,
    isPrincipal: boolean
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.posted = created;
    this.image = image;
    this.isPrincipal = isPrincipal;
  }
}
