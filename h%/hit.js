const Discord = module.require('discord.js');

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	var rng = Math.floor((Math.random() * 5) + 1);
	if (rng == 1) msg.reply("gaaah!");
	if (rng == 2) msg.reply("oooww!");
	if (rng == 3) msg.reply("why? What did I do");
	if (rng == 4) msg.reply("please, don't hurt me anymore");
	if (rng == 5) msg.reply("I like when you hit me...");
}

module.exports.help = {
	name: "hit",
	desc: "**Hit** a disobedient bot"
}