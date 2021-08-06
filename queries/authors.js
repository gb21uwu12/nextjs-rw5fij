export const getAuthors = `
query Authors {
  authors {
    name
    picture {
      url(transformation: {image: {resize: {height: 300}}})
    }
    title
  }
}
`;
