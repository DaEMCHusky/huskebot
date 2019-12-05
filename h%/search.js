const Discord = module.require('discord.js');
const request = module.require('request');
const cheerio = module.require('cheerio');

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	var settings = {
		url: "http://results.dogpile.com/serp?qc=images&q="+msg.content.split("h%search "),
		method: "GET",
		headers: {
			"Accept": "temsgt/html",
			"User-Agent": "Chrome"
		}
	};
	request(settings, function(err,response,responseBody) {
		if (err) {
			return; // returns error
		}
		else {
			// load HTML body
			$ = cheerio.load(responseBody); 
			// finds image link
			var link = $(".image a.link");	
			// get images
			var query = new Array(link.length).fill(0).map((v,i) => link.eq(i).attr("href"));
			// 404 error
			var  notfound = "https://spng.pngfly.com/20180624/zr/kisspng-http-404-sleep-hypnotic-web-page-pharmaceutical-dr-404-5b301be13343f3.12334715152987952121.jpg";
			// returns 404
			if (!query.length) { 
				return notfound;
			}
			
			msg.channel.send("", {files: [query[Math.floor(Math.random() * query.length)]]});
		}		
	});
}

module.exports.help = {
	name: "search",
	desc: "**Search**es for an Image on Google"
}