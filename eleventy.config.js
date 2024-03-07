const inspect = require("util").inspect;

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets/**");
	eleventyConfig.addFilter("inspect", function(content) {  return `<pre>${inspect(content)}</pre>` });
	eleventyConfig.addShortcode("hostname", function (url) {
		let urlObj = new URL(url);
		let hostname = urlObj.hostname;
		return hostname;
	  });
	return {
    	"dir" : {
        	"input": "src",
        	"output": "dist"
    	}
	};
};
