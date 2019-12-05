const Discord = module.require('discord.js');

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	var rng = Math.floor((Math.random() * 5) + 1);
	
	if (msg.guild.voiceConnection) msg.guild.voiceConnection.disconnect().then(msg => {msg.channel.send("Disconnected")});
	else msg.reply("I'm not in a voice chat dummy");
	
}

module.exports.help = {
	name: "leave",
	desc: "**Leave** dm"
}