const { ApolloServer, gql } = require("apollo-server-lambda");
(faunadb = require("faunadb")), (axios = require("axios"));
q = faunadb.query;

const typeDefs = gql`
  type Query {
    getAllLollies: [Lolly]!
    getLollyBySlug(path: String!): Lolly
  }

  type Lolly {
    recipientName: String!
    senderName: String!
    message: String!
    topColor: String!
    mediumColor: String!
    bottomColor: String!
    path: String!
  }

  type Mutation {
    createLolly(
      recipientName: String!
      message: String!
      senderName: String!
      topColor: String!
      mediumColor: String!
      bottomColor: String!
      path: String!
    ): Lolly
  }
`;

const Client = new faunadb.Client({
  secret: "fnAD9we8H9ACAbxQGP9GNzytjpm3hKxmZEdc7Svn",
});

const resolvers = {
  Query: {
    getAllLollies: async () => {
      var result = await Client.query(
        q.Map(
          q.Paginate(q.Match(q.Index("AllLollies"))),
          q.Lambda((x) => q.Get(x))
        )
      );
      let x = [];
      result.data.map((curr) => {
        x.push(curr.data);
      });

      return x;
    },


    getLollyBySlug: async (_, { path }) => {
      console.log(path);
      try {
        const result = await Client.query(
          q.Get(q.Match(q.Index("Lolly"), path))
        );

        console.log(result)
        return result.data;
      } catch (error) {
        return error.toString();
      }
    },
  },

  Mutation: {
    createLolly: async (_, args) => {
      try {
        const result = await Client.query(
          q.Create(q.Collection("Lolly"), {
            data: args,
          })
        );

        axios
          .post("https://api.netlify.com/build_hooks/5fe6758b69f90d91097cd861")
          .then(function (response) {
            // console.log(response);
          })
          .catch(function (error) {
            // console.error(error);
          });

        return result.data;
      } catch (error) {
        return error.toString();
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = server.createHandler();

module.exports = { handler };
