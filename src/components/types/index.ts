export interface PsychotherapyData {
  title: string;
  desc: string;
  href: string;
}

export interface Post {
  _id: string;
  _type: "post";
  title: string;
  slug: {
    _type: "slug";
    current: string;
  };
  excerpt: string;
  estReadingTime: number;
  _createdAt: string;
  _updatedAt: string;
  publishedAt: string;
  categories: null | string[];
  _rev: string;
  mainImage: {
    _type: "image";
    alt: string;
    asset: {
      _ref: string;
      _type: "reference";
    };
    ImageColor?: string;
    blurDataURL?: string;
  };
  author: {
    name: string;
    title?: string;
    avatar?: {
      _type: "image";
      asset: {
        _ref: string;
        _type: "reference";
      };
    };
    bio?: string;
  };
  body: Block[];
}

export interface Block {
  _type: "block";
  _key: string;
  style: string;
  children: Child[];
  markDefs: MarkDef[];
}

export interface Child {
  _type: string;
  _key: string;
  text: string;
  marks: string[];
}

export interface MarkDef {
  _key: string;
  _type: string;
  [key: string]: unknown;
}

export interface BlogPosts {
  posts: Post[];
}
