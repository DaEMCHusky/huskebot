const Discord = module.require('discord.js');

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	
	var userEmbed = new Discord.RichEmbed();
	userEmbed.setColor('#673BB7');
	
	function getUser(x) {
		if (isNaN(x)) {
			return msg.mentions.users.first()
		} else {
			return client.fetchUser(args[0]);
		}
	};
	
	var userEmbed = new Discord.RichEmbed()
	
	var mention = getUser(args[0]);
	userEmbed
		.setThumbnail(mention.avatarURL)
		.addField(
			"Details:", `
			Username: **${mention.username}** 
			Discriminator: **#${mention.discriminator}**
		`, true)
		.addField("Other Details:", `
			Id: **${mention.id}**
			Bot: **${mention.bot}**
		`, true);
	msg.reply(userEmbed);
}

module.exports.help = {
	name: "user",
	desc: "Gets **user** details."
}