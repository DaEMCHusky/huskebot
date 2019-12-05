const Discord = module.require('discord.js');

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	if (msg.content.includes(`${pack.prefix}random`)) {
		
		var result = '';
		var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&(){}[]<>/:;+=-_';
		if (args[0] > 72) args[0] = 72;
		if (args[0] < 1 ) args[0] = 1;
		if (args[0] == undefined) args[0] = 2;
		for (var i = 0;i < args[0]; i++) {
			result += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		msg.channel.send(result);
	}
}
module.exports.help = {
	name: "random",
	desc: "Makes a completely **random** message"
}