module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addCollection("materi", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/materi/*.md").sort((a, b) => a.data.num.localeCompare(b.data.num));
  });

  eleventyConfig.addCollection("profil", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/profil/*.md").sort((a, b) => a.data.urutan - b.data.urutan);
  });

  eleventyConfig.addCollection("berita", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/berita/*.md").sort((a, b) => new Date(b.data.tanggal) - new Date(a.data.tanggal));
  });

  eleventyConfig.addCollection("video", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/video/*.md");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
