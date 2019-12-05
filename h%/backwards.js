const Discord = module.require('discord.js');

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	msg.channel.send({embed: {
		color: 0x673bb7,
		description:`${msg.content.split("").slice(12).reverse().join("")}`,
		author: {
			name: `${msg.author.tag}`,
			icon_url: `${msg.author.avatarURL}`
		},
	}});
}

module.exports.help = {
	name: "backwards",
	desc: "Makes a message **backwards**"
}