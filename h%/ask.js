const Discord = module.require('discord.js');

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	var res = [
		"of course not!",
		"no.",
		"probably not.",
		"maybe not",
		"not too sure.",
		"I don't know",
		"maybe",
		"probably.",
		"yes.",
		"Of course!"
	];
	
	if (msg.content == "h%ask" && args.length == 0) msg.reply("Wa?");
	
	msg.reply(res[Math.floor((Math.random()*res.length))]);
}

module.exports.help = {
	name: "ask",
	desc: "**Ask** a Yes or No Question"
}