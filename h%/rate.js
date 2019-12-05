const Discord = module.require('discord.js');

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	var rng = Math.floor((Math.random() * 10) + 1);
	if (args[0].toLowerCase() == "iffy" || args[0].toLowerCase() == "natsuki") 
		msg.reply("10/10");
	else msg.reply(`${rng}/10`);
}

module.exports.help = {
	name: "rate",
	desc: "**Rate** a thing 1 - 10"
}