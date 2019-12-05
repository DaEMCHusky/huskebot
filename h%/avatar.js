const Discord = module.require('discord.js');

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	var member;
	if (isNaN(args[0])) {
		member = msg.mentions.users.first();
		msg.reply(new Discord.RichEmbed().setImage(member.avatarURL).setColor('#673BB7'));
	}
	else var variable = client.fetchUser(args[0]).then(myUser => {
		msg.reply(new Discord.RichEmbed().setImage(myUser.avatarURL).setColor('#673BB7'))
	});
}

module.exports.help = {
	name: "avatar",
	desc: "get a user's **avatar**"
}