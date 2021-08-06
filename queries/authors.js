export const getAuthors = `
query Authors {
  authors(orderBy: name_ASC) {
    id
    name
    picture {
      url(transformation: {image: {resize: {height: 300}}})
    }
    title
  }
}
`;

export const getPostById = (id) => `
  query AuthorsPost {
    post(where: {id: "${id}"}) {
      id
      title
      coverImage {
        url(transformation: {image: {resize: {height: 300}}})
      }
      content {
        html
      }
      excerpt
      author {
        name
      }
    }
  }
`;

export const getPostByAuthorsId = (id) => `
  query AuthorsPost {
    posts(where: {author: {id: "${id}"}}) {
      id
      title
      coverImage {
        url(transformation: {image: {resize: {height: 300}}})
      }
      excerpt
      author {
        name
      }
    }
  }
`;

export const listAuthorId = `
query Authors {
  authors(orderBy: name_ASC) {
    id
  }
}
`;
