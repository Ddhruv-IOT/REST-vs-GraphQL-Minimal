import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { PORT, FRONTEND_URL } from "./constants/constants.js";
import { typeDefs } from "./schema/schema.js";
import { assets, comments } from "../../data/data.js";

const resolvers = {
  Query: {
    assets() {
      return assets;
    },

    asset(_, args) {
      return assets.find((n) => n.id === args.id);
    },
    comments() {
      return comments;
    },

    comment(_, args) {
      return comments.find((n) => n.id === args.id);
    },
  },
  Asset: {
    comments(parent) {
      return comments.filter((n) => n.asset_id === parent.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs, //schema
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
