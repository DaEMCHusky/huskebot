const Discord = module.require('discord.js');

module.exports.run = async (client,msg,newmsg,args,condition,pack) => {
	msg.author.send("",{embed:{
		title:"Invite",
		url:pack.link,
		color:0x673bb7
	}});
}

module.exports.help = {
	name: "invite",
	desc: "**Invite** for a server"
}