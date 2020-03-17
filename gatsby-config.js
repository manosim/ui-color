module.exports = {
  siteMetadata: {
    title: `UIColor.io | Convert HEX & RGB colors to UIColor`,
    description: `UIColor.io is a website that helps you convert HEX & RGB colors to UIColor for Objective-C, Swift and Xamarin featuring a colorpicker and copy to clipboard functionality to make things easier.`,
    author: `@manosim_`,
    keywords: `uicolor,ui,color,colour,convert,converter,hex,rgb,rgba,swift,objective-c,objective,c,apple,ios`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UIColor.io`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#4A5899`,
        theme_color: `#4A5899`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Sen'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-6891078-41',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
  ],
};
