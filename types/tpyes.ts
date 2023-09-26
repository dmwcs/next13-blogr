export interface Post {
  id?: string;
  title: string;
  content: string | null;
  published?: boolean;
  author: { name: string | null } | null;
}

export interface User {
  name?: string;
  email?: String;
  image?: String;
  posts?: Post[];
}
