module.exports = {
    siteMetadata: {
        title: `ABCrypto`,
        description: `A magnifying glass on the crypto world`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`,
        {
            resolve:`gatsby-plugin-typography`,
                options: {
                    pathToConfigModule: `src/utils/typography.js`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: "ABCrypto",
              short_name: "ABCrypto",
              start_url: "/",
              background_color: "#6b37bf",
              theme_color: "#6b37bf",
              // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
              // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
              display: "standalone",
              icon: "src/images/icon.png", // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-offline',
        `gatsby-plugin-catch-links`,
    ],
}