const Discord = module.require('discord.js');
const request = module.require('request');
const cheerio = module.require('cheerio');
var waifu = require("./waifu.json");

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	
	var msgCont = msg.content.toLowerCase().split(" "), 
		waifuGood = false,
		GetImage = true;
	msgCont.shift();
	msgCont = msgCont.join(" ");
	
	for (var i = 0; i < waifu.length; i++) {
		if (waifu[i].name == msgCont) {
			waifuGood = true;
			var waifuName = waifu[i].name,
			    waifuFrom = waifu[i].from;
			j = i;
			i = waifu.length * 2;
		} else {
			if (msgCont == "list") {
				GetImage = false;
				waifuGood = true;
				i = waifu.length * 2;
			}
		}
	}
	
	var message, messageExtra, file;
	
	if (waifuGood) {
		if (GetImage) {
			var settings = {
				url: "http://results.dogpile.com/serp?qc=images&q="+waifuName + " " + waifuFrom,
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
					// return message
					msg.channel.send(waifuName+" is a good waifu", {files: [query[Math.floor(Math.random() * query.length)]]});
				}		
			});
		} else {
			if (msgCont == "list") {
				var WaifuList = [];
				for (var i = 0; i < waifu.length; i++) {
					WaifuList[i] = waifu[i].name;
					if (i == waifu.length - 1) {
						msg.author.send(WaifuList.join("\n"));
					}
				}
			}
		}
	}
	else {
		msg.channel.send("Your waifu \""+msgCont+"\" isn't good");
	}
	
}

module.exports.help = {
	name: "waifu",
	desc: "Look up a bunch of waifus."
}