import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient();
const query = gql`
  query {
    posts {
      title
      authorId
      author {
        firstName
        lastName
      }
    }
  }
`;

const body = document.body;
client.query({ query }).then(results => {
  results.data.posts.forEach(post => renderPost(body, post));
});

const renderPost = (body, post) => {
  const section = document.createElement("section");
  const domString = `
    <p>
      <strong>Post title is: </strong>${post.title}
    </p>
    <p>
      <strong>Author ${post.authorId}: </strong>${post.author.firstName} ${
    post.author.lastName
  }
    </p>
  `;
  section.innerHTML = domString;
  body.appendChild(section);
};
