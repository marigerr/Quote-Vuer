const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
} = require('graphql/type');

const Quote = require('../models/quote.js');

const quoteType = new GraphQLObjectType({
  name: 'quote',
  description: 'quote',
  fields: () => ({
    _id: {
      type: (GraphQLString),
      description: 'The id of the quote.',
    },
    quote: {
      type: GraphQLString,
      description: 'The text of the quote.',
    },
    author: {
      type: GraphQLString,
      description: 'The author of the quote.'
    }
  })
});

const graphqlSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      allQuotes: {
        type: new GraphQLList(quoteType),
        resolve: () => {
          var foundItems = new Promise((resolve, reject) => {
            Quote.find({}, (err, quotes) => {
              err ? reject(err) : resolve(quotes);
            });
          });

          return foundItems;
        }
      },
      quoteByAuthor: {
        type: new GraphQLList(quoteType),
        args: {
          author: {
            name: 'author',
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve: (root, { author }) => {
          var foundItems = new Promise((resolve, reject) => {
            Quote.find({ author }, (err, quotes) => {
              err ? reject(err) : resolve(quotes);
            });
          });

          return foundItems;
        }
      },
      authorStartsWith: {
        type: new GraphQLList(quoteType),
        args: {
          startsWith: {
            name: 'startsWith',
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve: (root, { startsWith }) => {
          var foundItems = new Promise((resolve, reject) => {
            Quote.find({ author: { $regex: "^" + startsWith, $options: 'i' } }, { author: true, _id: false }).exec((err, authors) => {
              if (err) {
                reject(err);
              } else {
                authors = authors.filter((author, index, self) =>
                  index === self.findIndex((t) => (
                    t.author === author.author
                  ))
                );
                resolve(authors);
              }
            });
          });
          return foundItems;
        }
      }
    },
  })
});

module.exports = { graphqlSchema };
