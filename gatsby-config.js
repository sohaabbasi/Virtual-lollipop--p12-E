// In your gatsby-config.js
module.exports = {
    plugins: [
      // Simple config, passing URL
      {
        resolve: "gatsby-source-graphql",
        options: {
          // Arbitrary name for the remote schema Query type
          typeName: "Lolly",
          // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
          fieldName: "LOLLIES",
          // Url to query from
           url: "https://pedantic-williams-05140f.netlify.app/.netlify/functions/createLolly",
        },
      }
    ]
    }
  