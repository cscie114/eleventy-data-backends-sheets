const inspect = require("util").inspect;

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets/**");
	eleventyConfig.addFilter("inspect", function(content) {  return `<pre>${inspect(content)}</pre>` });

	return {
    	"dir" : {
        	"input": "src",
        	"output": "dist"
    	}
	};
};
