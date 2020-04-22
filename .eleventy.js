const typesetPlugin = require('eleventy-plugin-typeset');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(
        typesetPlugin({
            only: '.article--body',
            disable: []
        })
    );

    eleventyConfig.addShortcode("fig", function (url, caption) {
        return (
            `<figure><img loading="lazy" src='/sian-website/${url}'/><figcaption>${caption}</figcaption></figure>
            `
        );
    });

    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("assets");

    return {
        pathPrefix: "/sian-website/"
    }
};