const path = require("path")
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
	target:"web",
	entry:path.resolve(__dirname,'src/main.js'),
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader'
			},
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			}
		]
	},
	plugins:[
		new VueLoaderPlugin()
	],
	mode:'development'
}