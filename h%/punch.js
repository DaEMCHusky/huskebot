const Discord = module.require('discord.js');
const fs = 		module.require('fs');

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	var disc,user;
	if (!args[0]) {
		msg.reply("who?");
		return
	} else {
		if (isNaN(args[0]))
			args[0] = msg.mentions.users.first().id;
	}
	
	client.fetchUser(args[0]).then(user => {
	
	
		if (user.presence.status == "online") disc = `<@${msg.author.id}> punched <@${args[0]}>`;
		if (user.presence.status == "idle"||user.presence.status == "dnd") disc = `<@${msg.author.id}> punched an unaware <@${args[0]}>`;
		if (user.presence.status == "offline") disc = `<@${msg.author.id}> beat the dead corpse of <@${args[0]}>`;
		
		if (args[0] == msg.author.id)
			disc = `<@${msg.author.id}> punched themselves`;
		
		var ImgLink = client.scripts.get('image').run(client,msg,"punch");
		console.log(ImgLink);
		
		msg.channel.send("",{
			embed: {
			  color: 0x673bb7,
			  description: disc
			}
			//,files: [ImgLink]
		});
	});
	
}

module.exports.help = {
	name: "punch",
	desc: "**Punch**es someone"
}