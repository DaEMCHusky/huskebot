const Discord = module.require('discord.js');

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	if (msg.member.hasPermission('MANAGE_MESSAGES')||msg.member.hasPermission('ADMINISTRATOR')) {
		if (isNaN(args[0])) {
			msg.channel.send(`${args[0]} is not a number`)
			return
		}
		msg.channel.fetchMessages(args[0]);
		msg.delete().then().catch(console.error);
		var logging = msg.guild.channels.find("name", "huskelogs");
		let username = msg.author.tag;
		let useravtr = client.user.avatarURL;
		msg.channel.bulkDelete(args[0]).then(msg => {
			if (logging) logging.send({embed:{
				color: 0x673bb7,
				description: `**${username}** deleted: **${args[0]}** messages`,
				author: {
					name: `huskeBot#6719`,
					icon_url: `${useravtr}`
				},
			}});
			else msg.channel.send(`Deleted ${args[0]}, by ${msg.author.tag}`)
		});
	} else {
		msg.reply("You do not have Admin")
		return
	}
}

module.exports.help = {
	name: "purge",
	desc: "**Purge** a chat of unwanted messages"
}