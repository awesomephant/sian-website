const Image = require("@11ty/eleventy-img")

async function figureShortcode(src, sizes, alt) {
  let metadata = await Image(src, {
    widths: [300, 800],
    formats: ["avif", "webp", "jpeg"],
    outputDir: "./_site/assets/",
    urlPath: "/assets/",
  })

  let imageAttributes = {
    sizes,
    alt,
    loading: "lazy",
    decoding: "async",
    class: "recipe-image",
  }
  return Image.generateHTML(metadata, imageAttributes)
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addAsyncShortcode("fig", figureShortcode)
  eleventyConfig.addPassthroughCopy("assets")
}
