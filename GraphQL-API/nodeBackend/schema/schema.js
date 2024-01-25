export const typeDefs = `#graphql
  
  # Basic strcutre for the list
  type Asset {
    id: ID!
    name: String!
    url: String! 
    comments: [Comment!]
  }

  type Comment {
    id: ID!
    rating: Int!
    content: String!
  }

  # Fetch the whole list
  type Query {
    assets: [Asset]
    asset(id: ID!): Asset
    comments: [Comment]
    comment(id: ID!): Comment
  }
`;
