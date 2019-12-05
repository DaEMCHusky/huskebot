const Discord = module.require('discord.js');

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	var rng = Math.floor((Math.random() * 5) + 1);
	if (msg.member.voiceChannel) {
		if (!msg.guild.voiceConnection) msg.member.voiceChannel.join().then(connection => {});
		else msg.reply("in a voice chat already");
	} else msg.reply("you're not in a voice chat dummy");
	
}

module.exports.help = {
	name: "join",
	desc: "**Join** vc"
}