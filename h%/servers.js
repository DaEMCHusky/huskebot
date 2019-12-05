const Discord = module.require('discord.js');

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	msg.channel.send(`${client.guilds.size} servers`)
}

module.exports.help = {
	name: "servers",
	desc: "Amount of **servers** i'm in"
}