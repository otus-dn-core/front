export interface User {
  username?: string
  email: string
  password: string
}

export interface Userobj {
  user: object
}

export interface Post {
  id?: string
  title: string
  description: string
  body: string
  author?: Author
}

export interface Author {
  email: string
  id: number
  username: string
  forself?: string
  image?: string
}

export interface Rest {
  articles: Post[]
  articlesCount: number
}
