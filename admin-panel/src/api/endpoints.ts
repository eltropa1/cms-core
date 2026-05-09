export const endpoints = {

  posts: {
    list: "/posts",
    byId: (id: string) => `/posts/${id}`
  },

  categories: {
    list: "/categories",
    byId: (id: string) => `/categories/${id}`
  }

}