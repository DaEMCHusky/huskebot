const Discord = module.require('discord.js');

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	msg.channel.send({embed: {
		color: 0x673bb7,
		description:`${msg.content.split(" ").slice(1).join(" ")}`,
		author: {
			name: `${msg.author.tag}`,
			icon_url: `${msg.author.avatarURL}`
		},
	}});
}

module.exports.help = {
	name: "say",
	desc: "**Say** a message"
}